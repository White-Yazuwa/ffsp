

const Aqua = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');


if (Config.WORKTYPE == 'private') {

    Aqua.addCommand({pattern: 'alive', fromMe: true, desc: Lang.ALIVE_DESC, deleteCommand: false }, (async (message, match) => {
        var HANDLER = '';
    
                    if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                        HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                    } else {
                        HANDLER = '.';
                    }

        if (Config.ALIVEMSG == 'default') {
            
        var aliveimg = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})

        await message.client.sendMessage (message.jid, Buffer.from (aliveimg.data), MessageType.image, {mimetype: Mimetype.png, caption: '┌───[🐋𝙰𝚀𝚄𝙰𝙱𝙾𝚃 🐋]\n\n│```👋Hey, I\'m online now```\n\n│ ```Type``` ' + HANDLER + Config. CUS_PANEL + ' ```to get command list```\n\n│ _Version_: ```'  + Config. VERSION + '```\n\n└─────────────◉'})

    }
    else {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝙰𝚀𝚄𝙰𝙱𝙾𝚃 ²⁰²²' })
     }
    }));

    Aqua.addCommand({pattern: 'sysd', fromMe: true, desc: Lang.SYSD_DESC, deleteCommand: false }, (async (message, match) => {

        if (message.jid === '120363042897065108@g.us') {

            return;
        }

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
}
else if (Config.WORKTYPE == 'public') {

    Aqua.addCommand({pattern: 'alive', fromMe: false, desc: Lang.ALIVE_DESC, deleteCommand: false}, (async (message, match) => {
        var HANDLER = '';
    
                    if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                        HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                    } else {
                        HANDLER = '.';
                    }

        if (Config.ALIVEMSG == 'default') {
             
        var aliveimg = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})

        await message.client.sendMessage (message.jid, Buffer.from (aliveimg.data), MessageType.image, {mimetype: Mimetype.png, caption: '┌───[🐋𝙰𝚀𝚄𝙰𝙱𝙾𝚃 🐋]\n\n│```Hey, I\'m online now```\n\n│ ```Type``` ' + HANDLER + Config. CUS_PANEL + ' ```to get command list```\n\n│ _Version_: ```' + Config. VERSION + '```\n\n└─────────────◉'})

    }
    else {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝙰𝚀𝚄𝙰𝙱𝙾𝚃 ²⁰²²' })
     }
    }));


    Aqua.addCommand({pattern: 'sysd', fromMe: false, desc: Lang.SYSD_DESC, deleteCommand: false}, (async (message, match) => {

        if (message.jid === '120363042897065108@g.us') {

            return;
        }

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
} 
