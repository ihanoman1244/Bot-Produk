module.exports = (bot) => {
bot.onInteractionCreate();
bot.onReactionAdd();
bot.onReactionRemove();
bot.onLeave();
bot.onMessage();
bot.onJoin();
bot.onGuildJoin();
bot.onGuildLeave();
bot.onBanAdd();
bot.onChannelDelete();
bot.onChannelUpdate();
bot.onChannelCreate();
bot.onVoiceStateUpdate();
bot.onRoleUpdate();
bot.onMemberUpdate();
bot.onRoleDelete();
bot.onRoleCreate();
bot.onBanRemove();
bot.onPresenceUpdate();
bot.onUserUpdate();
bot.onGuildUpdate();
bot.onEmojiCreate();
bot.onEmojiUpdate();
bot.onEmojiDelete();
bot.onReactionRemoveAll();
bot.onReactionRemoveEmoji();
bot.onWebhookUpdate();
bot.onChannelPinsUpdate();
bot.onVariableCreate();
bot.onVariableUpdate();
bot.onVariableDelete();
bot.onStickerCreate();
bot.onStickerUpdate();
bot.onStickerDelete();
bot.onThreadCreate();
bot.onThreadUpdate();
bot.onThreadDelete();
bot.onThreadListSync();
}