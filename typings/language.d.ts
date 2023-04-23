/* eslint-disable typescript-sort-keys/interface */

export interface LanguageValues {
	LANGUAGE_ENABLED: {};
	LANGUAGE_ID: {};
	LANGUAGE_NAME: {};
	PARSE_REGEX: {};
	MS_OTHER: {};
	SECOND_ONE: {};
	SECOND_OTHER: {};
	SECOND_SHORT: {};
	MINUTE_ONE: {};
	MINUTE_OTHER: {};
	MINUTE_SHORT: {};
	HOUR_ONE: {};
	HOUR_OTHER: {};
	HOUR_SHORT: {};
	DAY_ONE: {};
	DAY_OTHER: {};
	DAY_SHORT: {};
	YEAR_ONE: {};
	YEAR_OTHER: {};
	YEAR_SHORT: {};
	CreateInstantInvite: {};
	KickMembers: {};
	BanMembers: {};
	Administrator: {};
	ManageChannels: {};
	ManageGuild: {};
	AddReactions: {};
	ViewAuditLog: {};
	PrioritySpeaker: {};
	Stream: {};
	ViewChannel: {};
	SendMessages: {};
	SendTTSMessages: {};
	ManageMessages: {};
	EmbedLinks: {};
	AttachFiles: {};
	ReadMessageHistory: {};
	MentionEveryone: {};
	UseExternalEmojis: {};
	ViewGuildInsights: {};
	Connect: {};
	Speak: {};
	MuteMembers: {};
	DeafenMembers: {};
	MoveMembers: {};
	UseVAD: {};
	ChangeNickname: {};
	ManageNicknames: {};
	ManageRoles: {};
	ManageWebhooks: {};
	ManageEmojisAndStickers: {};
	UseApplicationCommands: {};
	RequestToSpeak: {};
	ManageEvents: {};
	ManageThreads: {};
	CreatePublicThreads: {};
	CreatePrivateThreads: {};
	UseExternalStickers: {};
	SendMessagesInThreads: {};
	UseEmbeddedActivities: {};
	ModerateMembers: {};
	INVALID_ARGUMENT_TITLE: {};
	INVALID_PATH_TITLE: {};
	INVALID_PATH_DESCRIPTION: {};
	INTERNAL_ERROR_TITLE: {};
	INTERNAL_ERROR_DESCRIPTION: {};
	SENTRY_EVENT_ID_FOOTER: { eventId: any };
	NON_EXISTENT_APPLICATION_COMMAND_TITLE: { type: any };
	NON_EXISTENT_APPLICATION_COMMAND_DESCRIPTION: { type: any };
	MISSING_PERMISSIONS_BASE_TITLE: {};
	MISSING_PERMISSIONS_OWNER_ONLY_DESCRIPTION: { type: any };
	MISSING_PERMISSIONS_DEVELOPER_ONLY_DESCRIPTION: { type: any };
	MISSING_PERMISSIONS_USER_PERMISSIONS_ONE_DESCRIPTION: { missingPermissions: any; type: any };
	MISSING_PERMISSIONS_USER_PERMISSIONS_OTHER_DESCRIPTION: { missingPermissions: any; type: any };
	MISSING_PERMISSIONS_CLIENT_PERMISSIONS_ONE_DESCRIPTION: { missingPermissions: any; type: any };
	MISSING_PERMISSIONS_CLIENT_PERMISSIONS_OTHER_DESCRIPTION: { missingPermissions: any; type: any };
	TYPE_ON_COOLDOWN_TITLE: { type: any };
	TYPE_ON_COOLDOWN_DESCRIPTION: { type: any; formattedTime: any };
	COOLDOWN_ON_TYPE_TITLE: { type: any };
	COOLDOWN_ON_TYPE_DESCRIPTION: { type: any };
	AN_ERROR_HAS_OCCURRED_TITLE: {};
	AN_ERROR_HAS_OCCURRED_DESCRIPTION: {};
	PING_COMMAND_NAME: {};
	PING_COMMAND_DESCRIPTION: {};
	PING: {};
	PONG: { hostLatency: any };
	LEVEL_COMMAND_NAME: {};
	LEVEL_COMMAND_DESCRIPTION: {};
	LEVEL_MEMBER_NAME: {};
	LEVEL_MEMBER_DESCRIPTION: {};
	LEVEL_USER_COMMAND_NAME: {};
	LEVEL_USER_COMMAND_DESCRIPTION: {};
	EDIT_EXPERIENCE_COMMAND_NAME: {};
	EDIT_EXPERIENCE_COMMAND_DESCRIPTION: {};
	EDIT_EXPERIENCE_MEMBER_NAME: {};
	EDIT_EXPERIENCE_MEMBER_DESCRIPTION: {};
	EDIT_EXPERIENCE_OPERATION_NAME: {};
	EDIT_EXPERIENCE_OPERATION_DESCRIPTION: {};
	EDIT_EXPERIENCE_OPERATION_CHOICES_ADD: {};
	EDIT_EXPERIENCE_OPERATION_CHOICES_REMOVE: {};
	EDIT_EXPERIENCE_OPERATION_CHOICES_SET: {};
	EDIT_EXPERIENCE_AMOUNT_NAME: {};
	EDIT_EXPERIENCE_AMOUNT_DESCRIPTION: {};
	EDIT_EXPERIENCE_EMBED_TITLE: {};
	EDIT_EXPERIENCE_EMBED_DESCRIPTION_SET: { user: any; amount: any };
	EDIT_EXPERIENCE_EMBED_DESCRIPTION_INCREMENT: {
		amount: any;
		operation: any;
		toOrFrom: any;
		user: any;
		experience: any;
	};
	FAKE_BAN_COMMAND_NAME: {};
	FAKE_BAN_COMMAND_DESCRIPTION: {};
	FAKE_BAN_MEMBER_NAME: {};
	FAKE_BAN_MEMBER_DESCRIPTION: {};
	FAKE_BAN_MESSAGE: { user: any };
	LEADERBOARD_COMMAND_NAME: {};
	LEADERBOARD_COMMAND_DESCRIPTION: {};
	LEADERBOARD_ACTIVITY_SUB_COMMAND_GROUP_NAME: {};
	LEADERBOARD_ACTIVITY_SUB_COMMAND_GROUP_DESCRIPTION: {};
	LEADERBOARD_ACTIVITY_SUB_COMMAND_GROUP_TEXT_SUB_COMMAND_NAME: {};
	LEADERBOARD_ACTIVITY_SUB_COMMAND_GROUP_TEXT_SUB_COMMAND_DESCRIPTION: {};
	LEADERBOARD_ACTIVITY_SUB_COMMAND_GROUP_VOICE_SUB_COMMAND_NAME: {};
	LEADERBOARD_ACTIVITY_SUB_COMMAND_GROUP_VOICE_SUB_COMMAND_DESCRIPTION: {};
	LEADERBOARD_LEVELING_SUB_COMMAND_NAME: {};
	LEADERBOARD_LEVELING_SUB_COMMAND_DESCRIPTION: {};
	LEADERBOARD_LEVELING_EMBED_TITLE: {};
	LEADERBOARD_WEEKLY_TEXT_EMBED_TITLE: {};
	LEADERBOARD_WEEKLY_VOICE_EMBED_TITLE: {};
	LEVEL: {};
	EXPERIENCE: {};
	MESSAGES: {};
	VOICE: {};
	EMBED_COMMAND_NAME: {};
	EMBED_COMMAND_DESCRIPTION: {};
	EMBED_CREATE_SUB_COMMAND_NAME: {};
	EMBED_CREATE_SUB_COMMAND_DESCRIPTION: {};
	EMBED_CREATE_SUB_COMMAND_NAME_NAME: {};
	EMBED_CREATE_SUB_COMMAND_NAME_DESCRIPTION: {};
	EMBED_CREATE_SUB_COMMAND_DATA_NAME: {};
	EMBED_CREATE_SUB_COMMAND_DATA_DESCRIPTION: {};
	EMBED_DELETE_SUB_COMMAND_NAME: {};
	EMBED_DELETE_SUB_COMMAND_DESCRIPTION: {};
	EMBED_DELETE_SUB_COMMAND_NAME_DESCRIPTION: {};
	EMBED_SEND_SUB_COMMAND_NAME: {};
	EMBED_SEND_SUB_COMMAND_DESCRIPTION: {};
	EMBED_SEND_SUB_COMMAND_NAME_NAME: {};
	EMBED_SEND_SUB_COMMAND_NAME_DESCRIPTION: {};
	EMBED_SEND_SUB_COMMAND_CHANNEL_NAME: {};
	EMBED_SEND_SUB_COMMAND_CHANNEL_DESCRIPTION: {};
	EMBED_LIST_SUB_COMMAND_NAME: {};
	EMBED_LIST_SUB_COMMAND_DESCRIPTION: {};
	INVALID_ARGUMENT_JSON_DESCRIPTION: {};
	EMBED_CREATED_TITLE: {};
	EMBED_CREATED_DESCRIPTION: { name: any; channel: any };
	EMBED_DELETED_TITLE: {};
	EMBED_DELETED_DESCRIPTION: { name: any };
	EMBED_SENT_TITLE: {};
	EMBED_SENT_DESCRIPTION: { name: any; channelId: any };
	JUMP_TO_MESSAGE_BUTTON_LABEL: {};
	EMBED_LIST_TITLE: {};
	EMBED_LIST_DESCRIPTION_NONE: {};
	STATUS_ROLE_COMMAND_NAME: {};
	STATUS_ROLE_COMMAND_DESCRIPTION: {};
	STATUS_ROLE_CREATE_SUB_COMMAND_NAME: {};
	STATUS_ROLE_CREATE_SUB_COMMAND_DESCRIPTION: {};
	STATUS_ROLE_CREATE_SUB_COMMAND_TEXT_NAME: {};
	STATUS_ROLE_CREATE_SUB_COMMAND_TEXT_DESCRIPTION: {};
	STATUS_ROLE_CREATE_SUB_COMMAND_ROLE_NAME: {};
	STATUS_ROLE_CREATE_SUB_COMMAND_ROLE_DESCRIPTION: {};
	STATUS_ROLE_CREATE_SUB_COMMAND_CHANNEL_NAME: {};
	STATUS_ROLE_CREATE_SUB_COMMAND_CHANNEL_DESCRIPTION: {};
	STATUS_ROLE_CREATE_SUB_COMMAND_EMBED_NAME: {};
	STATUS_ROLE_CREATE_SUB_COMMAND_EMBED_DESCRIPTION: {};
	STATUS_ROLE_DELETE_SUB_COMMAND_NAME: {};
	STATUS_ROLE_DELETE_SUB_COMMAND_DESCRIPTION: {};
	STATUS_ROLE_DELETE_SUB_COMMAND_STATUS_ROLE_CHOICE_NAME: {};
	STATUS_ROLE_DELETE_SUB_COMMAND_STATUS_ROLE_CHOICE_DESCRIPTION: {};
	STATUS_ROLE_LIST_SUB_COMMAND_NAME: {};
	STATUS_ROLE_LIST_SUB_COMMAND_DESCRIPTION: {};
	STATUS_ROLE_CHANNEL_MISSING_DESCRIPTION: {};
	STATUS_ROLE_EMBED_MISSING_DESCRIPTION: {};
	STATUS_ROLE_CREATED_TITLE: {};
	STATUS_ROLE_CREATED_DESCRIPTION: {};
	STATUS_ROLE_DELETED_TITLE: {};
	STATUS_ROLE_DELETED_DESCRIPTION: {};
	STATUS_ROLE_LIST_TITLE: {};
	STATUS_ROLE_LIST_DESCRIPTION_NONE: {};
}
