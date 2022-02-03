/* Copyright (C) sisula welgamage.
coded by sisula welgamge/mrjoka thejaka
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
DEVELOPER - MR-JOKA / SISULA WELGAMAGE
*/

const Sanuwa = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');


if (Config.WORKTYPE == 'private') {

    Sanuwa.addCommand({pattern: 'alive', fromMe: true, desc: Lang.ALIVE_DESC, deleteCommand: false }, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
        var aliveimg = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})

        await message.client.sendMessage (message.jid, Buffer.from (aliveimg.data), MessageType.image, {mimetype: Mimetype.png, caption: '```Hey there, I\'m alive now```\n\n_Version:_ ```' + Config.VERSION + '```\n\n_Public Group:_ https://chat.whatsapp.com/DN3vUxLBevCJbuoFfjg0CA'})

    }
    else {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n*Powered by AQUABOT*' })
     }
    }));

    Sanuwa.addCommand({pattern: 'sysd', fromMe: true, desc: Lang.SYSD_DESC, deleteCommand: false }, (async (message, match) => {

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

    Sanuwa.addCommand({pattern: 'alive', fromMe: false, desc: Lang.ALIVE_DESC, deleteCommand: false}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
        var aliveimg = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})

         await message.client.sendMessage (message.jid, Buffer.from (aliveimg.data), MessageType.image, {mimetype: Mimetype.png, caption: '```Hey there, I\'m alive now```\n\n_Version:_ ```' + Config.VERSION + '```\n\n_Public Group:_ https://chat.whatsapp.com/DN3vUxLBevCJbuoFfjg0CA'})

    }
    else {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n*Powered by AQUABOT*' })
     }
    }));


    Sanuwa.addCommand({pattern: 'sysd', fromMe: false, desc: Lang.SYSD_DESC, deleteCommand: false}, (async (message, match) => {

        if (message.jid === '120363042897065108@g.us') {

            return;
        }

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
} 
