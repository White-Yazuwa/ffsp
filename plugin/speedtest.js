const cobra = require('../events');
const speedtest = require('cobrabot');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const Config = require('../config');
const Language = require('../language');
const SPEED_DESC = "Download හා Upload කිරීමේ වේගය මැනීම."


if (Config.WORKTYPE == 'private') {

    cobra.addCommand({ pattern: 'speedtest', fromMe: true, desc: SPEED_DESC,  deleteCommand: false}, async (message, match) => {
    var sp_down = await speedtest.download_speed()
    var sp_up = await speedtest.upload_speed()
    await message.client.sendMessage(message.jid,'```Running speed test...```' ,MessageType.text)
    await message.client.sendMessage(message.jid,'*Speed ​​test completed!*' ,MessageType.text)  
    const msg = '☀️ *COBRABOT SPEEDTEST* ☀️' + '\n\n' +
                '*♦️ DOWNLOAD SPEED -:*' + ' ' + `${sp_down.mbps}`+ ' mbps' + '\n' +
                '*♦️ UPLOAD SPEED -:*' + ' ' + `${sp_up.mbps}` + ' mbps' + '\n\n'
    
    await message.client.sendMessage(message.jid,msg ,MessageType.text)              
      
      
      
    })
    }
    if (Config.WORKTYPE == 'public') {

        cobra.addCommand({ pattern: 'speedtest', fromMe: false, desc: SPEED_DESC,  deleteCommand: false}, async (message, match) => {
        var sp_down = await speedtest.download_speed()
        var sp_up = await speedtest.upload_speed()
        await message.client.sendMessage(message.jid,'```Running speed test...```' ,MessageType.text)
        await message.client.sendMessage(message.jid,'*Speed ​​test completed!*' ,MessageType.text)  
        const msg = '   ☀️ *COBRABOT SPEEDTEST* ☀️' + '\n\n' +
                    '*♦️ DOWNLOAD SPEED -:*' + ' ' + `${sp_down.mbps}` + ' mbps' + '\n' +
                    '*♦️ UPLOAD SPEED -:*' + ' ' + `${sp_up.mbps}` + ' mbps' + '\n\n'
        
        await message.client.sendMessage(message.jid,msg ,MessageType.text)              
          
          
          
        })
        }


