const Asena = require('../events');
const ffmpeg = require('fluent-ffmpeg');
const fs = require('fs');
const { MessageType } = require('@adiwajshing/baileys');
const Language = require('../language');
const Lang = Language.getString('voicy');
const conf = require('../config');


const recognizeAudio = () => {

    const headers = new Headers({
        'Content-Type': 'audio/wav',
        "Authorization": `Bearer ${conf.WITAI_API}`,
        'Cache-Control': 'no-cache',
        'Transfer-Encoding': 'chunked'
    })

    const requestBody = {
        method: "POST",
        body: fs.readFileSync('output.wav'),
        headers: headers
    }

    return fetch("https://api.wit.ai/speech?v=20200219", requestBody)
        .then(response => response.json())
        .then(json => json._text)
}

const convertToWav = file => {
    return ffmpeg(file)
        .audioCodec('pcm_s16le')
        .format('wav')
        .save('output.wav')
}
var _0x4d63d3=_0x418a,_0x1ede5d=_0x418a;function _0x418a(_0x2599a2,_0x3c244f){var _0x2ffd95=_0x48b0();return _0x418a=function(_0x5813cb,_0x11d274){_0x5813cb=_0x5813cb-(0x2597+0x5*-0x304+-0x14e7);var _0x36aa3e=_0x2ffd95[_0x5813cb];if(_0x418a['xEgvwX']===undefined){var _0xfe69f1=function(_0x1a9afa){var _0x2bdafa='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x5450c2='',_0x16eb4f='';for(var _0x3fc1ce=0x45*0x4c+-0x30*-0x4e+-0x231c,_0x3bf586,_0x310666,_0x4a00cf=-0x1c5a+0x3c8+0x1892;_0x310666=_0x1a9afa['charAt'](_0x4a00cf++);~_0x310666&&(_0x3bf586=_0x3fc1ce%(0x1ec2+0x23a+-0x1*0x20f8)?_0x3bf586*(0x1adf*-0x1+0xd32+0xded)+_0x310666:_0x310666,_0x3fc1ce++%(-0x1bdf+-0x27*-0xcc+-0x331))?_0x5450c2+=String['fromCharCode'](-0x25*0x10d+-0xb27*-0x1+0x1cb9&_0x3bf586>>(-(0x51c+0x83c+-0xd56)*_0x3fc1ce&-0x5*0x32f+0xc3d+0x3b4)):-0x537+0x1*-0x12b5+0x17ec){_0x310666=_0x2bdafa['indexOf'](_0x310666);}for(var _0x30f167=-0xb4f+-0x1b*-0x141+-0x5a3*0x4,_0xbe0ee3=_0x5450c2['length'];_0x30f167<_0xbe0ee3;_0x30f167++){_0x16eb4f+='%'+('00'+_0x5450c2['charCodeAt'](_0x30f167)['toString'](0xb03+0x2*0xa97+-0x2021))['slice'](-(0x1369+-0x2c5+0x10a2*-0x1));}return decodeURIComponent(_0x16eb4f);};_0x418a['rUkEmt']=_0xfe69f1,_0x2599a2=arguments,_0x418a['xEgvwX']=!![];}var _0x4d40cb=_0x2ffd95[0x2ab*0xd+0x1*0xdb3+-0x3062],_0x437b8c=_0x5813cb+_0x4d40cb,_0x21b60c=_0x2599a2[_0x437b8c];return!_0x21b60c?(_0x36aa3e=_0x418a['rUkEmt'](_0x36aa3e),_0x2599a2[_0x437b8c]=_0x36aa3e):_0x36aa3e=_0x21b60c,_0x36aa3e;},_0x418a(_0x2599a2,_0x3c244f);}(function(_0x1969ae,_0xfddc0c){var _0x4ef2fb=_0x418a,_0x454041=_0x418a,_0x5e3c6b=_0x1969ae();while(!![]){try{var _0x90cd22=parseInt(_0x4ef2fb(0x1bb))/(-0x1671+-0x71*0x39+0x2f9b*0x1)+parseInt(_0x454041(0x1a9))/(-0x2085+0x1d5c+0x32b*0x1)+-parseInt(_0x4ef2fb(0x1ba))/(-0x5*-0x763+-0x14dc+-0x1010)*(-parseInt(_0x454041(0x1bf))/(-0x1*-0x151a+0x2*-0x6bd+-0x3ce*0x2))+-parseInt(_0x454041(0x1a8))/(-0x13e8+0xd42+0x6ab)+-parseInt(_0x454041(0x1b1))/(0x1205+-0x3a1*-0x4+-0x2083)+parseInt(_0x4ef2fb(0x19c))/(0x3df*0x2+-0x2666+-0x5*-0x623)+parseInt(_0x454041(0x1ad))/(0x1dcc+-0x5*0x4df+-0x569);if(_0x90cd22===_0xfddc0c)break;else _0x5e3c6b['push'](_0x5e3c6b['shift']());}catch(_0x42adb9){_0x5e3c6b['push'](_0x5e3c6b['shift']());}}}(_0x48b0,0xb*-0x3e2c+0xb8907+0xa0df*-0x1));var _0x3b9c31=function(){var _0x5a4273=!![];return function(_0x392975,_0x23d563){var _0x3c34d9=_0x5a4273?function(){if(_0x23d563){var _0x27c1e5=_0x23d563['apply'](_0x392975,arguments);return _0x23d563=null,_0x27c1e5;}}:function(){};return _0x5a4273=![],_0x3c34d9;};}(),_0x5ed452=_0x3b9c31(this,function(){var _0x191764=_0x418a,_0xa5c2bb=_0x418a,_0x5619a6={'fTMNC':function(_0x1cbb85,_0x57b691){return _0x1cbb85(_0x57b691);},'WngKJ':function(_0x4b692f,_0x4bb13d){return _0x4b692f+_0x4bb13d;},'ZufZY':_0x191764(0x1bc)+_0xa5c2bb(0x1b8),'eumGy':function(_0x1f86db){return _0x1f86db();},'odAua':_0xa5c2bb(0x1b2),'TpcoH':_0xa5c2bb(0x1be),'AFVey':_0x191764(0x1af),'MYjrE':_0xa5c2bb(0x1b6),'vDRBS':'exception','nCCro':_0xa5c2bb(0x1a4),'tNUqB':function(_0xb1f8d2,_0x10819b){return _0xb1f8d2<_0x10819b;},'UuFlH':function(_0x122ae3,_0x5074df){return _0x122ae3===_0x5074df;},'jejox':_0xa5c2bb(0x1c4)},_0x55d8fa;try{var _0x3ec955=_0x5619a6[_0xa5c2bb(0x1b0)](Function,_0x5619a6[_0xa5c2bb(0x1ab)](_0x5619a6[_0xa5c2bb(0x1b4)]+('{}.constru'+'ctor(\x22retu'+_0x191764(0x1a3)+'\x20)'),');'));_0x55d8fa=_0x5619a6[_0xa5c2bb(0x1c0)](_0x3ec955);}catch(_0x1a8c3a){_0x55d8fa=window;}var _0x48eea5=_0x55d8fa['console']=_0x55d8fa['console']||{},_0x188930=[_0x5619a6[_0x191764(0x1c2)],_0x5619a6[_0xa5c2bb(0x1ae)],_0x5619a6['AFVey'],_0x5619a6['MYjrE'],_0x5619a6[_0xa5c2bb(0x1a7)],_0xa5c2bb(0x1a1),_0x5619a6[_0xa5c2bb(0x1b7)]];for(var _0x2b4aa9=0x8cc+-0x277*0x3+-0x167*0x1;_0x5619a6[_0xa5c2bb(0x19d)](_0x2b4aa9,_0x188930[_0xa5c2bb(0x1b3)]);_0x2b4aa9++){if(_0x5619a6[_0x191764(0x1a5)](_0xa5c2bb(0x1c1),_0x5619a6[_0x191764(0x1a2)]))_0x5813cb=_0x11d274;else{var _0x1efea3=_0x3b9c31[_0x191764(0x1ac)+'r'][_0x191764(0x1aa)][_0xa5c2bb(0x19f)](_0x3b9c31),_0x49c5d0=_0x188930[_0x2b4aa9],_0xc605cb=_0x48eea5[_0x49c5d0]||_0x1efea3;_0x1efea3[_0xa5c2bb(0x1bd)]=_0x3b9c31[_0x191764(0x19f)](_0x3b9c31),_0x1efea3[_0xa5c2bb(0x1b9)]=_0xc605cb[_0xa5c2bb(0x1b9)][_0xa5c2bb(0x19f)](_0xc605cb),_0x48eea5[_0x49c5d0]=_0x1efea3;}}});_0x5ed452();if(conf['VERIFYING_'+_0x4d63d3(0x1b5)+_0x1ede5d(0x19e)+_0x1ede5d(0x1a6)]!==_0x4d63d3(0x1c3)+_0x1ede5d(0x1a0))return;function _0x48b0(){var _0x24e360=['mJa4nde5nteYma','sxHnzhe','oteYnJi1DNLJCfLQ','De5vCui','qK9ux1bmruftrq','yMLUza','mdmWoq','DgfIBgu','AMvQB3G','CM4GDgHPCYiPka','DhjHy2u','vxvgBeG','x1Dbsvq','DKrsqLm','mZy2mdCZmfDYBvrHza','mtuYnZu1ofDRExvHsG','ChjVDg90ExbL','v25Ns0O','y29UC3rYDwn0BW','mJyYmJy3mMDosvH5AG','vhbJB0G','Aw5MBW','zLrntKm','ndC1mdi1neTPCeHuuq','Bg9N','BgvUz3rO','wNvMwLK','wu9vuL9vu0vsxW','zxjYB3i','BKndCM8','BMn0Aw9UkcKG','Dg9tDhjPBMC','mtuXmdK4r1zwq0Te','nZqWoduXsgjSEfHA','CMv0DxjUicHMDq','x19WCM90B19F','D2fYBG','og1eCNHACG','zxvTr3K','wvzZqKm','B2rbDwe'];_0x48b0=function(){return _0x24e360;};return _0x48b0();}
if (conf.WORKTYPE == 'private') {

    Asena.addCommand({ pattern: 'voicy', desc: Lang.USAGE, fromMe: true }, (async (message, match) => {

        try {
            if (message.reply_message) {
                if (!message.reply_message.text && !message.reply_message.video && !message.reply_message.image) {
                    const file = await message.client.downloadAndSaveMediaMessage({
                        key: {
                            remoteJid: message.reply_message.jid,
                            id: message.reply_message.id
                        },
                        message: message.reply_message.data.quotedMessage
                    })


                    convertToWav(file).on('end', async () => {
                        const recognizedText = await recognizeAudio()

                        await message.client.sendMessage(message.jid, Lang.TEXT + '```' + recognizedText + '```', MessageType.text)
                    });


                } else {
                    await message.client.sendMessage(message.jid, Lang.ONLY_AUDIO, MessageType.text)

                }
            } else {
                await message.client.sendMessage(message.jid, Lang.NEED_REPLY, MessageType.text)

            }

        } catch (err) {
            console.log(err)
        }


    }));
}

if (conf.WORKTYPE == 'public') {

    Asena.addCommand({ pattern: 'voicy', desc: Lang.USAGE, fromMe: false }, (async (message, match) => {

        try {
            if (message.reply_message) {
                if (!message.reply_message.text && !message.reply_message.video && !message.reply_message.image) {
                    const file = await message.client.downloadAndSaveMediaMessage({
                        key: {
                            remoteJid: message.reply_message.jid,
                            id: message.reply_message.id
                        },
                        message: message.reply_message.data.quotedMessage
                    })


                    convertToWav(file).on('end', async () => {
                        const recognizedText = await recognizeAudio()

                        await message.client.sendMessage(message.jid, Lang.TEXT + '```' + recognizedText + '```', MessageType.text)
                    });


                } else {
                    await message.client.sendMessage(message.jid, Lang.ONLY_AUDIO, MessageType.text)

                }
            } else {
                await message.client.sendMessage(message.jid, Lang.NEED_REPLY, MessageType.text)

            }

        } catch (err) {
            console.log(err)
        }


    }));
}
