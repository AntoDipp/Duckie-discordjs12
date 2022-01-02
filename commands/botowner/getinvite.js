module.exports = {
	name: 'getinvite',
	aliases: [],
	category: 'Bot Creator Only',
	description: 'Nessuna descrizione',
	usage: 'getinvite',
	userperms: ['BOT_OWNER'],
	botperms: [],
	run: async (client, message, args, prefix) => {
    if (!args[0]) return message.channel.send("Enter An Name")

        if(args[0]){
            let fetched = client.guilds.cache.find(g => g.name === args.join(" "));
            let found = client.guilds.cache.get(args[0]);
            if(!found) {
                if(fetched) {
                    guild = fetched;
                }
            } else {
                guild = found
            }
        } else {
            return message.channel.send("Invalid Name!");
        }
        if(guild){
            let tChannel = guild.channels.cache.find(ch => ch.type == "text" && ch.permissionsFor(ch.guild.me).has("CREATE_INSTANT_INVITE"));
            if(!tChannel) {
                return message.channel.send("An Error Has Occured Try Again!"); 
            }
            let invite = await tChannel.createInvite({ temporary: false, maxAge: 0 }).catch(err => {
                return message.channel.send(`${err} has occured!`);
            });
            message.channel.send(invite.url);
        } else {
            return message.channel.send(`\`${args.join(' ')}\` - Il bot non è in questo server`);
        }
  }
}
