import type { APIGuildMember, APIRole, GatewayPresenceUpdateDispatchData, WithIntrinsicProps } from "@discordjs/core";
import { RESTJSONErrorCodes, ActivityType, GatewayDispatchEvents } from "@discordjs/core";
import { DiscordAPIError } from "@discordjs/rest";
import EventHandler from "../../../lib/classes/EventHandler.js";
import type ExtendedClient from "../../../lib/extensions/ExtendedClient.js";

export default class PresenceUpdate extends EventHandler {
	public constructor(client: ExtendedClient) {
		super(client, GatewayDispatchEvents.PresenceUpdate, false);
	}

	/**
	 * User was updated.
	 *
	 * https://discord.com/developers/docs/topics/gateway-events#presence-update
	 */
	public override async run({ data }: WithIntrinsicProps<GatewayPresenceUpdateDispatchData>) {
		const cachedPresencesInGuild = this.client.guildPresenceCache.get(data.guild_id) ?? new Map<string, string>();
		const cachedUserPresence = cachedPresencesInGuild.get(data.user.id);

		const customActivity = data.activities?.find((activity) => activity.type === ActivityType.Custom);

		if (cachedUserPresence && !customActivity) {
			cachedPresencesInGuild.delete(data.user.id);
			this.client.guildPresenceCache.set(data.guild_id, cachedPresencesInGuild);

			const rolesInGuild = this.client.guildRolesCache.get(data.guild_id) ?? new Map<string, APIRole>();

			const validStatusRoleIds = new Set<string>();

			for (const statusRoleId of Object.values(this.client.config.otherConfig.statusRoles[data.guild_id] ?? {})) {
				const validRole = rolesInGuild.get(statusRoleId);
				if (!validRole) continue;

				validStatusRoleIds.add(validRole.id);
			}

			if (!validStatusRoleIds.size) return;

			let member: APIGuildMember;

			try {
				member = await this.client.api.guilds.getMember(data.guild_id, data.user.id);
			} catch (error) {
				if (error instanceof DiscordAPIError && error.code === RESTJSONErrorCodes.UnknownMember) return;

				throw error;
			}

			const newRoles = member.roles.filter((roleId) => !validStatusRoleIds.has(roleId));

			if (newRoles.length === member.roles.length) return;

			try {
				await this.client.api.guilds.editMember(data.guild_id, data.user.id, {
					roles: member.roles.filter((roleId) => !validStatusRoleIds.has(roleId)),
				});

				this.client.logger.debug(
					`User ${data.user.id} cleared their status, their status was previously ${cachedUserPresence}.`,
				);

				return;
			} catch (error) {
				if (error instanceof DiscordAPIError && error.code === RESTJSONErrorCodes.MissingPermissions) {
					this.client.logger.error(`Missing permissions to edit roles for guild ${data.guild_id}`);
					return;
				}

				throw error;
			}
		}

		if (!customActivity?.state) return;

		cachedPresencesInGuild.set(data.user.id, customActivity.state);
		this.client.guildPresenceCache.set(data.guild_id, cachedPresencesInGuild);

		if (cachedUserPresence === customActivity.state) return;

		const rolesInGuild = this.client.guildRolesCache.get(data.guild_id) ?? new Map<string, APIRole>();

		const validStatusRoleIds = new Set<string>();
		const rolesIdsToAdd = new Set<string>();

		let removeOldRoles = false;

		for (const [requiredText, statusRoleId] of Object.entries(
			this.client.config.otherConfig.statusRoles[data.guild_id] ?? {},
		)) {
			const validRole = rolesInGuild.get(statusRoleId);
			if (!validRole) continue;

			validStatusRoleIds.add(validRole.id);

			if (customActivity.state.toLowerCase().includes(requiredText.toLowerCase())) rolesIdsToAdd.add(validRole.id);

			if (!removeOldRoles && cachedUserPresence?.toLowerCase().includes(requiredText.toLowerCase()))
				removeOldRoles = true;
		}

		if (!validStatusRoleIds.size || (!rolesIdsToAdd.size && !removeOldRoles)) return;

		let member: APIGuildMember;

		try {
			member = await this.client.api.guilds.getMember(data.guild_id, data.user.id);
		} catch (error) {
			if (error instanceof DiscordAPIError && error.code === RESTJSONErrorCodes.UnknownMember) return;

			throw error;
		}

		try {
			await this.client.api.guilds.editMember(data.guild_id, data.user.id, {
				roles: member.roles.filter((roleId) => !validStatusRoleIds.has(roleId)).concat([...rolesIdsToAdd]),
			});

			this.client.logger.debug(
				`User ${data.user.id} updated their status, it is now ${
					customActivity.state
				}, I have removed all status roles from them${
					rolesIdsToAdd.size ? `, then I added the following roles: ${[...rolesIdsToAdd].map((roleId) => roleId)}` : `.`
				}`,
			);

			return;
		} catch (error) {
			if (error instanceof DiscordAPIError && error.code === RESTJSONErrorCodes.MissingPermissions) {
				this.client.logger.error(`Missing permissions to edit roles for guild ${data.guild_id}`);
				return;
			}

			throw error;
		}
	}
}
