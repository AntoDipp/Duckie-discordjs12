const db = require("quick.db");
const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'blacklist',
	aliases: [],
	category: 'Bot Creator Only',
	description: 'Blacklist',
	usage: 'blacklist',
	userperms: ['BOT_OWNER'],
	botperms: [],
	run: async (client, message, args, prefix) => {
       let user;
        if (message.mentions.users.first()) {
          user = message.mentions.users.first();
        } else if (args[0]) {
          user = message.guild.members.cache.get(args[0]).user;
        } 
        
        if(!user) return message.channel.send("Menziona un utente!")
        let blacklist = db.get(`blacklist_${user.id}`)
  
        if(blacklist === null) {
            db.set(`blacklist_${user.id}`, 1);
        const embed = new MessageEmbed()
        .setAuthor('Eseguito', client.user.displayAvatarURL())
        .setTitle('Blacklistato')
        .setDescription('Blacklist eseguita correttamente')
        .setTimestamp()
        user.send(embed)

        message.channel.send(`${user} è blacklistato`)
        } else if(blacklist !== null) {
            message.channel.send(`Questa persona è già blacklistata!`)
        } return;
  }
}
