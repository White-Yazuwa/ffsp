const Aqua = require('../events');
const { MessageType, Mimetype } = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');
let wk = Config.WORKTYPE == 'public' ? false : true
const Language = require('../language');
const Lang = Language.getString('facebook');
Aqua.addCommand({ pattern: 'fb ?(.*)', fromMe: wk, desc:Lang.FB_DESC, deleteCommand: false }, async (message, match) => {
   const fblink = match[1]
   if (!fblink) return await message.client.sendMessage(message.jid,Lang.N_FB, MessageType.text, { quoted: message.data });
  var load= await message.client.sendMessage(message.jid,Lang.FB_DOWN, MessageType.text, { quoted: message.data });
  await axios.get(`https://sanuwa-api.herokuapp.com/docs/download/fb?url=${fblink}&apikey=sanuwa`).then(async (response) => {
    if(!response.data.status) {
    return await message.client.sendMessage(message.jid,Lang.E_FB, MessageType.text, { quoted: message.data });
       }
     else { 
      
     var up= await message.client.sendMessage(message.jid,Lang.FB_UP, MessageType.text, { quoted: message.data });
      await message.client.deleteMessage(message.jid, {id: load.key.id, remoteJid: message.jid, fromMe: true}) ; 
    const msg = '┌───[🐋𝙰𝚀𝚄𝙰𝙱𝙾𝚃🐋]\n\n  *📥FACEBOOK DOWNLODER*\n\n│🎪ᴛɪᴛʟᴇ: ' + response.data.title + '\n\n└───────────◉'
     const viddata = await axios.get(response.data.result[1].url, { responseType: 'arraybuffer'}); 
    await message.sendMessage(Buffer.from(viddata.data), MessageType.video, { caption: msg, quoted: message.data}); 
    await message.client.deleteMessage(message.jid, {id: up.key.id, remoteJid: message.jid, fromMe: true}) ;
  }
    })})