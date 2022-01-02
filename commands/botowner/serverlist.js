const { Util } = require('discord.js');

module.exports = {
    name: 'serverlist',
    run: async (client, message, args, Discord) => {
        if (message.author.id !== "476844893277519873") {
 return;
 }
   const member = message.guild.members.cache;
 client.guilds.cache.forEach(guild => {
  message.channel.send(`${guild.name} | ${guild.id} | Membri: ${message.guild.memberCount}`);
})
    }
}
