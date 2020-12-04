require('dotenv').config()

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Bot is ready to go!!!');
})

client.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply("Hey");
        // msg.reply('PONG!');
    }
})

client.login(process.env.BOT_TOKEN);