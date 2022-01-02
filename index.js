require('dotenv').config();
const nekoclient = require('nekos.life');
const neko = new nekoclient();
const { Client, Collection, Intents } = require('discord.js');
const client = new Client({ disableMentions: 'everyone', partials: ['MESSAGE', 'CHANNEL', 'REACTION'], ws: { intents: Intents.ALL } });

client.commands = new Collection();
client.aliases = new Collection();

['command', 'event'].forEach(handler => require(`./handlers/${handler}`)(client));

require("./server")();

client.login("bot token");
