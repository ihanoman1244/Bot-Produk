module.exports = {
    Bot: {
    token: process.env.sk, //Add your token here
    prefix: ["$getVar[prefix]"],
    intents: ["MessageContent",
    "Guilds",
    "GuildMessages",
    "GuildMembers",
    "GuildBans",
    "GuildEmojisAndStickers",
    "GuildIntegrations",
    "GuildWebhooks",
    "GuildInvites",
    "GuildVoiceStates",
    "GuildPresences",
    "GuildMessageReactions",
    "GuildMessageTyping",
    "DirectMessages",
    "DirectMessageReactions",
    "DirectMessageTyping"],
    events: ["onInteractionCreate",
    "onReactionAdd",
    "onReactionRemove",
    "onLeave",
    "onMessage",
    "onJoin",
    "onGuildJoin",
    "onGuildLeave",
    "onBanAdd",
    "onChannelDelete",
    "onChannelUpdate",
    "onChannelCreate",
    "onVoiceStateUpdate",
    "onRoleUpdate",
    "onMemberUpdate",
    "onRoleDelete",
    "onRoleCreate",
    "onBanRemove",
    "onPresenceUpdate",
    "onUserUpdate",
    "onGuildUpdate",
    "onEmojiCreate",
    "onEmojiUpdate",
    "onEmojiDelete",
    "onReactionRemoveAll",
    "onReactionRemoveEmoji",

    "onChannelPinsUpdate",
    "onVariableCreate",
    "onVariableUpdate",
    "onVariableDelete",
    "onStickerCreate",
    "onStickerUpdate",
    "onStickerDelete",
    "onThreadCreate",
    "onThreadUpdate",
    "onThreadDelete",
    "onThreadListSync"],
        database: {
        db: require("@akarui/aoi.db"),
        type: "aoi.db",
        path: "./database/",
        tables: ["main"],
        extraOptions: {
          dbType: "KeyValue"
        }},

    respondOnEdit:  {
        commands: true,
        alwaysExecute: true,
        nonPrefixed: true,
        time: 5
    },
   suppressAllErrors : true,
    aoiLogs : true
    }

} 