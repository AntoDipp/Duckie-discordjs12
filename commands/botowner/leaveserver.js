const Discord = require("discord.js");

module.exports = {
	name: 'leaveserver',
	aliases: [],
	category: 'Bot Creator Only',
	description: 'Nessuna descrizione',
	usage: 'leaveserver',
	userperms: ['BOT_OWNER'],
	botperms: [],
	run: async (client, message, args, prefix) => {
        const guildId = args[0];
 
    if (!guildId) {
      return message.channel.send("ID server?");
    }
 
    const guild = client.guilds.cache.find((g) => g.id === guildId);
 
    if (!guild) {
      return message.channel.send("That guild wasn't found");
    }
 
    try {
      await guild.leave();
      message.channel.send(`Successfully left guild: **${guild.name}**`);
    } catch (e) {
      console.error(e);
      return message.channel.send("An error occurred leaving that guild");
    }
  }
};
