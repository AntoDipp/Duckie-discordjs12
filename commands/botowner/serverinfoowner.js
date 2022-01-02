const { Util } = require('discord.js');

module.exports = {
	name: 'serverlist',
	aliases: [],
	category: 'Bot Creator Only',
	description: 'Nessuna descrizione',
	usage: 'serverlist',
	userperms: ['BOT_OWNER'],
	botperms: [],
	run: async (client, message, args, prefix) => {
 
        let clientGuilds = message.client.guilds.cache;
        let messageObj = Util.splitMessage(
            clientGuilds.map(g => '\`' + g.id + `\` **|** \`` + g.name + `\` **|** \`` + g.members.cache.size + '\`') || 'None'
        );
 
        if (messageObj.length == 1) {
            message.channel.send(messageObj[0]);
        } else {
            for (i = 0; messageObj.length < i; i++) {
                message.channel.send(messageObj[i]);
            }
        }
    }
}
