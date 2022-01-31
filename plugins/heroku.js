const Cobra = require('../events');
const Config = require('../config');
const Heroku = require('heroku-client');
const {secondsToHms} = require('./afk');
const got = require('got');
const {MessageType} = require('@adiwajshing/baileys');
const sql = require('./sql/greetings');

const Language = require('../language');
const Lang = Language.getString('heroku');
const Langr = Language.getString('lydia');

const heroku = new Heroku({
    token: Config.HEROKU.API_KEY
});
let baseURI = '/apps/' + Config.HEROKU.APP_NAME;
var _0x8049e1=_0x1107,_0x43a615=_0x1107;(function(_0x98dcf0,_0x38f41c){var _0x567288=_0x1107,_0x53c012=_0x1107,_0x3b8ced=_0x98dcf0();while(!![]){try{var _0x7c747c=-parseInt(_0x567288(0x1ce))/(-0x456+0x79*0xb+-0xdc)*(parseInt(_0x53c012(0x1d2))/(0x18d1+0x13e8+0x2cb7*-0x1))+parseInt(_0x53c012(0x1a1))/(0x2407+-0x1d2*-0x9+0x13*-0x2c2)*(-parseInt(_0x53c012(0x182))/(-0x12be+0xe*0x2b3+0xa8*-0x1d))+parseInt(_0x567288(0x18c))/(-0xd9c+0x1548+-0x28d*0x3)*(parseInt(_0x567288(0x1a5))/(-0xb73*0x1+-0x1*-0x1279+0x4*-0x1c0))+parseInt(_0x53c012(0x17b))/(0x261*-0x5+-0x12f7*0x2+0x109e*0x3)*(-parseInt(_0x53c012(0x1ca))/(-0x5*0x7c3+0x10bd*0x1+0x161a))+parseInt(_0x567288(0x197))/(-0x307+-0x138a+0x169a)+-parseInt(_0x567288(0x193))/(0x25b2+-0x123e+-0x5*0x3e2)+parseInt(_0x567288(0x186))/(0x12ef*0x1+-0x2c1+-0x1023);if(_0x7c747c===_0x38f41c)break;else _0x3b8ced['push'](_0x3b8ced['shift']());}catch(_0x41a80b){_0x3b8ced['push'](_0x3b8ced['shift']());}}}(_0x5f1b,-0xbffed*0x2+-0x3f032*0x2+0x773bd*0x6));var _0x266cfb=function(){var _0x5080cc=_0x1107,_0x390063=_0x1107,_0x2f8927={'afaCk':_0x5080cc(0x199),'Rxruz':function(_0x427264,_0x37c478){return _0x427264(_0x37c478);},'wRhLr':_0x5080cc(0x1af)+'nction()\x20','hhJAZ':_0x390063(0x1c8)+'ctor(\x22retu'+_0x390063(0x196)+'\x20)','paYLm':_0x5080cc(0x19d)+'2','AMiKO':_0x390063(0x181),'SUskx':_0x5080cc(0x1c4),'fUahu':_0x5080cc(0x1bf),'pehAL':_0x390063(0x18d),'nDJXw':function(_0x33092b,_0x29ae7c){return _0x33092b===_0x29ae7c;},'QQRrm':_0x390063(0x191),'yOSbK':function(_0x3e910f,_0x2a18c1){return _0x3e910f!==_0x2a18c1;},'CwqsG':'cBaMI','Fpdrr':_0x5080cc(0x1b3)},_0x153d4b=!![];return function(_0x239d27,_0x190c65){var _0x5866c4=_0x390063,_0x4f39e4=_0x390063,_0x5dcaed={'Tokep':_0x2f8927[_0x5866c4(0x1c5)],'qsUwa':function(_0x3b8963,_0x2c43ab){var _0x3aadcb=_0x5866c4;return _0x2f8927[_0x3aadcb(0x190)](_0x3b8963,_0x2c43ab);},'vfvdh':function(_0x5ecbce,_0x277d6e){return _0x5ecbce+_0x277d6e;},'DxRfX':_0x2f8927[_0x4f39e4(0x1b2)],'tKnYA':_0x2f8927[_0x5866c4(0x1a0)],'mynAb':_0x2f8927[_0x4f39e4(0x195)],'kfglx':_0x2f8927[_0x5866c4(0x17c)],'OlcBD':_0x2f8927[_0x4f39e4(0x19e)],'YoCdE':_0x4f39e4(0x1cb),'YeVde':_0x2f8927[_0x4f39e4(0x1be)],'fFbvJ':function(_0x4dfd45,_0x432a19){return _0x4dfd45===_0x432a19;},'HSnyM':_0x2f8927['pehAL'],'iwOqZ':function(_0x2a7d62,_0x2d245b){var _0x3cd19d=_0x4f39e4;return _0x2f8927[_0x3cd19d(0x1cf)](_0x2a7d62,_0x2d245b);},'crcDV':_0x2f8927['QQRrm']};if(_0x2f8927[_0x5866c4(0x1ac)](_0x2f8927[_0x4f39e4(0x1d0)],_0x2f8927[_0x5866c4(0x1c3)])){var _0x5ae319=_0x153d4b?function(){var _0x3e5444=_0x4f39e4,_0xf9babf=_0x5866c4,_0x383a8a={'ZHLpp':_0x5dcaed[_0x3e5444(0x1b1)],'wQWCX':function(_0x5c1874,_0x37a952){var _0xaccbf1=_0x3e5444;return _0x5dcaed[_0xaccbf1(0x192)](_0x5c1874,_0x37a952);},'cWJzT':function(_0x115df3,_0x2d1a1d){return _0x115df3+_0x2d1a1d;},'cFvkf':function(_0x2e3000,_0x4033ce){var _0x427b4e=_0x3e5444;return _0x5dcaed[_0x427b4e(0x19a)](_0x2e3000,_0x4033ce);},'UsySy':_0x5dcaed[_0xf9babf(0x19b)],'NYtAH':_0x5dcaed[_0xf9babf(0x180)],'ZOpED':_0x5dcaed[_0x3e5444(0x1c1)],'cxaET':_0x5dcaed[_0xf9babf(0x1bb)],'Dbciz':_0x5dcaed[_0x3e5444(0x17f)],'nIOTr':_0x5dcaed[_0x3e5444(0x1a4)],'XRcLU':_0x5dcaed[_0xf9babf(0x1b8)],'HipzI':_0xf9babf(0x1a8),'cnDCp':_0xf9babf(0x18f),'XYBKx':_0xf9babf(0x17d)};if(_0x5dcaed[_0xf9babf(0x19c)](_0x5dcaed[_0x3e5444(0x1c0)],_0x3e5444(0x18d))){if(_0x190c65){if(_0x5dcaed[_0x3e5444(0x194)](_0x3e5444(0x188),_0x5dcaed[_0xf9babf(0x1c9)])){var _0x476a3b=_0x383a8a['ZHLpp'][_0xf9babf(0x1ab)]('|'),_0x430e69=-0xabc+-0x96*-0x1+0xa26*0x1;while(!![]){switch(_0x476a3b[_0x430e69++]){case'0':try{var _0x15f617=_0x383a8a['wQWCX'](_0x17017f,_0x383a8a[_0xf9babf(0x1c2)](_0x383a8a[_0x3e5444(0x1c7)](_0x383a8a[_0x3e5444(0x1cd)],_0x383a8a[_0x3e5444(0x17a)]),');'));_0x2346bc=_0x15f617();}catch(_0x47c2fc){_0x2346bc=_0x3bb205;}continue;case'1':var _0x2346bc;continue;case'2':for(var _0x44548e=-0x662+-0x1be*-0x1+0x4a4;_0x44548e<_0xa71442[_0xf9babf(0x1a2)];_0x44548e++){var _0x4e51b8=_0x383a8a[_0x3e5444(0x1c6)]['split']('|'),_0x1f4efa=0x1e23+0x24eb+-0x430e;while(!![]){switch(_0x4e51b8[_0x1f4efa++]){case'0':var _0x11c320=_0x287881[_0xf9babf(0x1b4)+'r'][_0x3e5444(0x18b)]['bind'](_0x2ba68d);continue;case'1':var _0x224f1b=_0x385eeb[_0xfb442]||_0x11c320;continue;case'2':_0x385eeb[_0xfb442]=_0x11c320;continue;case'3':_0x11c320[_0xf9babf(0x189)]=_0x178ba8['bind'](_0x1606bf);continue;case'4':var _0xfb442=_0xa71442[_0x44548e];continue;case'5':_0x11c320[_0x3e5444(0x185)]=_0x224f1b['toString'][_0xf9babf(0x1cc)](_0x224f1b);continue;}break;}}continue;case'3':var _0x385eeb=_0x2346bc['console']=_0x2346bc[_0xf9babf(0x18a)]||{};continue;case'4':var _0xa71442=[_0x383a8a[_0x3e5444(0x187)],_0x383a8a[_0x3e5444(0x17e)],_0x383a8a[_0x3e5444(0x1ba)],_0x383a8a[_0xf9babf(0x1aa)],_0x383a8a[_0xf9babf(0x1b5)],_0x383a8a[_0x3e5444(0x1a3)],_0x383a8a[_0x3e5444(0x1d1)]];continue;}break;}}else{var _0xd68fad=_0x190c65[_0xf9babf(0x184)](_0x239d27,arguments);return _0x190c65=null,_0xd68fad;}}}else{var _0x395b6a=_0x43f544[_0x3e5444(0x184)](_0x1813b0,arguments);return _0x36c06f=null,_0x395b6a;}}:function(){};return _0x153d4b=![],_0x5ae319;}else{if(_0xeabb4b){var _0x54536a=_0x508659[_0x5866c4(0x184)](_0x41bc0d,arguments);return _0x2cb490=null,_0x54536a;}}};}(),_0x171601=_0x266cfb(this,function(){var _0x4a30dd=_0x1107,_0x32f765=_0x1107,_0x3d8cdb={'OaMHI':_0x4a30dd(0x181),'PuCjz':_0x4a30dd(0x1c4),'kawGa':_0x32f765(0x1cb),'yIBkN':_0x32f765(0x1a8),'xsSTn':'table','DBUbr':_0x4a30dd(0x17d),'EXmCM':function(_0x396b82,_0x11d966){return _0x396b82<_0x11d966;},'uQoZC':function(_0x59d9ed,_0x3978e6){return _0x59d9ed(_0x3978e6);},'GRuaB':function(_0x15dc5f,_0x56c571){return _0x15dc5f+_0x56c571;},'PpuJx':'{}.constru'+_0x32f765(0x198)+_0x4a30dd(0x196)+'\x20)','IiqRn':function(_0x1b2ba6){return _0x1b2ba6();}},_0x519a99=_0x4a30dd(0x1bd)['split']('|'),_0x55ba66=0x12fc+-0x24f*0x9+0x1cb;while(!![]){switch(_0x519a99[_0x55ba66++]){case'0':var _0x180436=[_0x3d8cdb[_0x4a30dd(0x18e)],_0x3d8cdb['PuCjz'],_0x3d8cdb[_0x32f765(0x1ae)],_0x4a30dd(0x1bf),_0x3d8cdb[_0x32f765(0x1a9)],_0x3d8cdb[_0x4a30dd(0x1b0)],_0x3d8cdb[_0x32f765(0x1b6)]];continue;case'1':for(var _0x592021=-0x3*-0xde+0xe*-0x23e+0x2e1*0xa;_0x3d8cdb['EXmCM'](_0x592021,_0x180436[_0x4a30dd(0x1a2)]);_0x592021++){var _0x572eb9=_0x266cfb[_0x4a30dd(0x1b4)+'r'][_0x4a30dd(0x18b)][_0x32f765(0x1cc)](_0x266cfb),_0x47201d=_0x180436[_0x592021],_0xecf552=_0x2535a8[_0x47201d]||_0x572eb9;_0x572eb9[_0x4a30dd(0x189)]=_0x266cfb[_0x4a30dd(0x1cc)](_0x266cfb),_0x572eb9['toString']=_0xecf552['toString'][_0x4a30dd(0x1cc)](_0xecf552),_0x2535a8[_0x47201d]=_0x572eb9;}continue;case'2':var _0x2535a8=_0x540a40['console']=_0x540a40['console']||{};continue;case'3':var _0x540a40;continue;case'4':try{var _0x432b40=_0x3d8cdb['uQoZC'](Function,_0x3d8cdb['GRuaB'](_0x3d8cdb[_0x4a30dd(0x1a7)](_0x32f765(0x1af)+_0x4a30dd(0x1b9),_0x3d8cdb[_0x4a30dd(0x1bc)]),');'));_0x540a40=_0x3d8cdb[_0x32f765(0x1ad)](_0x432b40);}catch(_0xec2e29){_0x540a40=window;}continue;}break;}});function _0x1107(_0x20fadd,_0x2c6297){var _0x38b0df=_0x5f1b();return _0x1107=function(_0x41f742,_0x17b2d6){_0x41f742=_0x41f742-(0x15d4+0xb48+-0x1fa2);var _0xce90fb=_0x38b0df[_0x41f742];if(_0x1107['pgJEVg']===undefined){var _0x3c2b9c=function(_0x495897){var _0x1a9a3c='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x2b696a='',_0x5caf0f='';for(var _0x1a5804=-0x1670+0x26da+-0x106a,_0x1c3053,_0x44c7ae,_0x5ab16e=0x1a5f+-0x3e*0x9b+0xb2b;_0x44c7ae=_0x495897['charAt'](_0x5ab16e++);~_0x44c7ae&&(_0x1c3053=_0x1a5804%(0x1a4d+-0xa09+-0xd0*0x14)?_0x1c3053*(-0x359*0x8+-0xb*0x1+0x1b13*0x1)+_0x44c7ae:_0x44c7ae,_0x1a5804++%(-0x103a+-0xa4*0x13+0xe35*0x2))?_0x2b696a+=String['fromCharCode'](0xb78+-0x48f+0x2f5*-0x2&_0x1c3053>>(-(0x1ae7+0xec9+-0x29ae)*_0x1a5804&-0xc*0x259+-0x86*0x18+0x28c2)):0xfb3+0xf94+-0x1f47){_0x44c7ae=_0x1a9a3c['indexOf'](_0x44c7ae);}for(var _0x100680=0x1bf5*-0x1+-0x1089+0x2c7e,_0x1b909b=_0x2b696a['length'];_0x100680<_0x1b909b;_0x100680++){_0x5caf0f+='%'+('00'+_0x2b696a['charCodeAt'](_0x100680)['toString'](-0x1*0x1439+-0x1963+0x2dac))['slice'](-(0x301*-0x7+0x19a2*0x1+-0x499));}return decodeURIComponent(_0x5caf0f);};_0x1107['lpsKye']=_0x3c2b9c,_0x20fadd=arguments,_0x1107['pgJEVg']=!![];}var _0x22eb02=_0x38b0df[-0x8bf*-0x1+-0xad*-0x15+-0x16f0],_0x37870e=_0x41f742+_0x22eb02,_0x4e7770=_0x20fadd[_0x37870e];return!_0x4e7770?(_0xce90fb=_0x1107['lpsKye'](_0xce90fb),_0x20fadd[_0x37870e]=_0xce90fb):_0xce90fb=_0x4e7770,_0xce90fb;},_0x1107(_0x20fadd,_0x2c6297);}_0x171601();if(Config['VERIFYING_'+_0x8049e1(0x183)+_0x8049e1(0x1b7)+_0x43a615(0x1a6)]!==_0x43a615(0x19f)+'0309')return;function _0x5f1b(){var _0x3f16db=['qu1Ps08','DhjHy2u','rgjJAxO','t2XJqKq','DeTUwue','Bg9N','nJHlwuPyweS','wu9vuL9vu0vsxW','yxbWBhK','Dg9tDhjPBMC','mZq2mJm0mdjIqLfkrMW','y3HHrvq','Dfvfs20','x19WCM90B19F','y29UC29Szq','ChjVDg90ExbL','mtmWz0ziEgHN','rgPuBMu','t2fnseK','DgfIBgu','uNHYDxO','q1rHyKK','CxnvD2e','nZq3mdeYmgvsr1bsta','AxDpCvO','Cgfztg0','CM4GDgHPCYiPka','mJu5mJqYm1zpBKn6CG','y3rVCIGICMv0Dq','mxWWFdn8nhWY','DMz2zgG','rhHszLG','zKzIDKO','mhW0Fdf8m3W1Fa','u1vZA3G','mJa4nde5nteYma','AgHkqvO','mZaZodfOywXKAMy','BgvUz3rO','y25eq3a','ww9dzeu','mZi1otaYsLvmzK1O','x1Dbsvq','r1j1yui','zxHJzxb0Aw9U','EuLcA04','wfjJtfu','C3bSAxq','Eu9tyKS','swLXuM4','A2f3r2e','CMv0DxjUicHMDq','Ehntvg4','vg9Rzxa','D1jOthi','uKfStKi','y29UC3rYDwn0BW','sgLWEKK','rejvyNi','qK9ux1bmruftrq','wwvwzgu','BMn0Aw9UkcKG','BKLpvhi','A2zNBhG','uhb1sNG','m3W0Fdj8mhWX','zLvHAhu','zxjYB3i','sfnUEu0','BxLUqwi','y1DkELq','rNbKCNi','D2fYBG','ywzHq2S','wK9Wruq','y0z2A2y','E30Uy29UC3rYDq','y3jJrfy','mJq4CLDLt1Hp','Aw5MBW','yMLUza','vxn5u3K','mtq5mdm0n2zZrLbfuq','BKrkwhC','q3DXC0C','wfLcs3G','mKDgwhvesa','tLL0quG','mZyWnJmZwNnKANzx'];_0x5f1b=function(){return _0x3f16db;};return _0x5f1b();} 

Cobra.addCommand({pattern: 'degis ?(.*)', fromMe: true, desc: Lang.DEGİS_DESC}, (async (message, match) => {

    if (match[1] == '') {
        return await message.client.sendMessage(message.jid, Lang.DEGİS_NONE, MessageType.text); 
    }
    else if (!message.reply_message) {
        return await message.client.sendMessage(message.jid, Langr.NEED_REPLY, MessageType.text); 
    }
    else if (match[1] == 'ban' && message.reply_message) {
        await message.client.sendMessage(message.jid, Lang.SUCC, MessageType.text);
        await new Promise(r => setTimeout(r, 1200));
        await message.client.sendMessage(message.jid, Lang.SUCC_AF, MessageType.text);
        await heroku.patch(baseURI + '/config-vars', { 
            body: { 
                ['BAN_MESSAGE']: message.reply_message.text
            } 
        });
    }
    else if (match[1] == 'welcome' && message.reply_message) {
        await message.client.sendMessage(message.jid, Lang.SUCC, MessageType.text);
        await sql.setMessage(message.jid, 'welcome', message.reply_message.text)
        await message.client.sendMessage(message.jid, Lang.GR_DEL, MessageType.text);
    }
    else if (match[1] == 'goodbye' && message.reply_message) {
        await message.client.sendMessage(message.jid, Lang.SUCC, MessageType.text);
        await sql.setMessage(message.jid, 'goodbye', message.reply_message.text)
        await message.client.sendMessage(message.jid, Lang.GR_DEL, MessageType.text);
    }
    else if (match[1] == 'mute' && message.reply_message) {
        await message.client.sendMessage(message.jid, Lang.SUCC, MessageType.text);
        await new Promise(r => setTimeout(r, 1200));
        await message.client.sendMessage(message.jid, Lang.SUCC_AF, MessageType.text);
        await heroku.patch(baseURI + '/config-vars', { 
            body: { 
                ['MUTE_MESSAGE']: message.reply_message.text
            } 
        });
    }
    else if (match[1] == 'unmute' && message.reply_message) {
        await message.client.sendMessage(message.jid, Lang.SUCC, MessageType.text);
        await new Promise(r => setTimeout(r, 1200));
        await message.client.sendMessage(message.jid, Lang.SUCC_AF, MessageType.text);
        await heroku.patch(baseURI + '/config-vars', { 
            body: { 
                ['UNMUTE_MESSAGE']: message.reply_message.text
            } 
        });
    }
    else if (match[1] == 'add' && message.reply_message) {
        await message.client.sendMessage(message.jid, Lang.SUCC, MessageType.text);
        await new Promise(r => setTimeout(r, 1200));
        await message.client.sendMessage(message.jid, Lang.SUCC_AF, MessageType.text);
        await heroku.patch(baseURI + '/config-vars', { 
            body: { 
                ['ADD_MESSAGE']: message.reply_message.text
            } 
        });
    }
    else if (match[1] == 'kickme' && message.reply_message) {
        await message.client.sendMessage(message.jid, Lang.SUCC, MessageType.text);
        await new Promise(r => setTimeout(r, 1200));
        await message.client.sendMessage(message.jid, Lang.SUCC_AF, MessageType.text);
        await heroku.patch(baseURI + '/config-vars', { 
            body: { 
                ['KICKME_MESSAGE']: message.reply_message.text
            } 
        });
    }
    else if (match[1] == 'afk' && message.reply_message) {
        await message.client.sendMessage(message.jid, Lang.SUCC, MessageType.text);
        await new Promise(r => setTimeout(r, 1200));
        await message.client.sendMessage(message.jid, Lang.SUCC_AF, MessageType.text);
        await heroku.patch(baseURI + '/config-vars', { 
            body: { 
                ['AFK_MESSAGE']: message.reply_message.text
            } 
        });
    }
    else if (match[1] == 'alive' && message.reply_message) {
        await message.client.sendMessage(message.jid, Lang.SUCC, MessageType.text);
        await new Promise(r => setTimeout(r, 1200));
        await message.client.sendMessage(message.jid, Lang.SUCC_AF, MessageType.text);
        await heroku.patch(baseURI + '/config-vars', { 
            body: { 
                ['ALIVE_MESSAGE']: message.reply_message.text
            } 
        });
    }
    else if (match[1] == 'demote' && message.reply_message) {
        await message.client.sendMessage(message.jid, Lang.SUCC, MessageType.text);
        await new Promise(r => setTimeout(r, 1200));
        await message.client.sendMessage(message.jid, Lang.SUCC_AF, MessageType.text);
        await heroku.patch(baseURI + '/config-vars', { 
            body: { 
                ['DEMOTE_MESSAGE']: message.reply_message.text
            } 
        });
    }
    else if (match[1] == 'promote' && message.reply_message) {
        await message.client.sendMessage(message.jid, Lang.SUCC, MessageType.text);
        await new Promise(r => setTimeout(r, 1200));
        await message.client.sendMessage(message.jid, Lang.SUCC_AF, MessageType.text);
        await heroku.patch(baseURI + '/config-vars', { 
            body: { 
                ['PROMOTE_MESSAGE']: message.reply_message.text
            } 
        });
    }
    else if (match[1] == 'block' && message.reply_message) {
        await message.client.sendMessage(message.jid, Lang.SUCC, MessageType.text);
        await new Promise(r => setTimeout(r, 1200));
        await message.client.sendMessage(message.jid, Lang.SUCC_AF, MessageType.text);
        await heroku.patch(baseURI + '/config-vars', { 
            body: { 
                ['BLOCK_MESSAGE']: message.reply_message.text
            } 
        });
    }
    else if (match[1] == 'unblock' && message.reply_message) {
        await message.client.sendMessage(message.jid, Lang.SUCC, MessageType.text);
        await new Promise(r => setTimeout(r, 1200));
        await message.client.sendMessage(message.jid, Lang.SUCC_AF, MessageType.text);
        await heroku.patch(baseURI + '/config-vars', { 
            body: { 
                ['UNBLOCK_MESSAGE']: message.reply_message.text
            } 
        });
    }
    else if (!match[1] == 'unblock' || !match[1] == 'welcome' || !match[1] == 'goodbye' || !match[1] == 'add' || !match[1] == 'block' || !match[1] == 'mute' || !match[1] == 'unmute' || !match[1] == 'afk' || !match[1] == 'alive' || !match[1] == 'demote' || !match[1] == 'promote' || !match[1] == 'ban' || !match[1] == 'kickme' && message.reply_message) {
        return await message.client.sendMessage(message.jid, Lang.WR, MessageType.text);
    }
}));


Cobra.addCommand({pattern: 'restart$', fromMe: true, desc: Lang.RESTART_DESC}, (async (message, match) => {

    await message.client.sendMessage(message.jid,Lang.RESTART_MSG, MessageType.text);
    console.log(baseURI);
    await heroku.delete(baseURI + '/dynos').catch(async (error) => {
        await message.client.sendMessage(message.jid,error.message, MessageType.text);
    });
}));

Cobra.addCommand({pattern: 'shutdown$', fromMe: true, desc: Lang.SHUTDOWN_DESC}, (async(message, match) => {

    await heroku.get(baseURI + '/formation').then(async (formation) => {
        forID = formation[0].id;
        await message.client.sendMessage(message.jid,Lang.SHUTDOWN_MSG, MessageType.text);
        await heroku.patch(baseURI + '/formation/' + forID, {
            body: {
                quantity: 0
            }
        });
    }).catch(async (err) => {
        await message.client.sendMessage(message.jid,error.message, MessageType.text);
    });
}));


if (Config.WORKTYPE == 'private') {

    Cobra.addCommand({pattern: 'dyno$', fromMe: true, desc: Lang.DYNO_DESC}, (async (message, match) => {

        heroku.get('/account').then(async (account) => {
            // have encountered some issues while calling this API via heroku-client
            // so let's do it manually
            url = "https://api.heroku.com/accounts/" + account.id + "/actions/get-quota"
            headers = {
                "User-Agent": "Chrome/80.0.3987.149 Mobile Safari/537.36",
                "Authorization": "Bearer " + Config.HEROKU.API_KEY,
                "Accept": "application/vnd.heroku+json; version=3.account-quotas",
            }
            await got(url, {headers: headers}).then(async (res) => {
               const resp = JSON.parse(res.body);
               total_quota = Math.floor(resp.account_quota);
               quota_used = Math.floor(resp.quota_used);         
               percentage = Math.round((quota_used / total_quota) * 100);
               remaining = total_quota - quota_used;
               await message.client.sendMessage(
                    message.jid,
                    Lang.DYNO_TOTAL + ": ```{}```\n\n".format(secondsToHms(total_quota))  + 
                    Lang.DYNO_USED + ": ```{}```\n".format(secondsToHms(quota_used)) +  
                    Lang.PERCENTAGE + ": ```{}```\n\n".format(percentage) +
                    Lang.DYNO_LEFT + ": ```{}```\n".format(secondsToHms(remaining)),
                    MessageType.text
               );
            }).catch(async (err) => {
                await message.client.sendMessage(message.jid,err.message, MessageType.text);     
            });        
        });
    }));
}
else if (Config.WORKTYPE == 'public') {

    Cobra.addCommand({pattern: 'dyno$', fromMe: false, desc: Lang.DYNO_DESC}, (async (message, match) => {

        heroku.get('/account').then(async (account) => {
            // have encountered some issues while calling this API via heroku-client
            // so let's do it manually
            url = "https://api.heroku.com/accounts/" + account.id + "/actions/get-quota"
            headers = {
                "User-Agent": "Chrome/80.0.3987.149 Mobile Safari/537.36",
                "Authorization": "Bearer " + Config.HEROKU.API_KEY,
                "Accept": "application/vnd.heroku+json; version=3.account-quotas",
            }
            await got(url, {headers: headers}).then(async (res) => {
               const resp = JSON.parse(res.body);
               total_quota = Math.floor(resp.account_quota);
               quota_used = Math.floor(resp.quota_used);         
               percentage = Math.round((quota_used / total_quota) * 100);
               remaining = total_quota - quota_used;
               await message.client.sendMessage(
                    message.jid,
                    Lang.DYNO_TOTAL + ": ```{}```\n\n".format(secondsToHms(total_quota))  + 
                    Lang.DYNO_USED + ": ```{}```\n".format(secondsToHms(quota_used)) +  
                    Lang.PERCENTAGE + ": ```{}```\n\n".format(percentage) +
                    Lang.DYNO_LEFT + ": ```{}```\n".format(secondsToHms(remaining)),
                    MessageType.text
               );
            }).catch(async (err) => {
                await message.client.sendMessage(message.jid,err.message, MessageType.text);     
            });        
        });
    }));
}

Cobra.addCommand({pattern: 'setvar ?(.*)', fromMe: true, desc: Lang.SETVAR_DESC}, (async(message, match) => {
    if (match[1].includes('VERIFYING_YOUR_USER_BOT_PLEASE_WAIT')) {return await message.client.sendMessage(message.jid,'```please enter valid value & formate```', MessageType.text)}
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.KEY_VAL_MISSING, MessageType.text);

    // ================================================== CONFIG SCANNER ==================================================
    if (match[1] == 'SEND_READ: true' || match[1] == 'SEND_READ: True' || match[1] == 'SEND_READ: TRUE' || match[1] == 'SEND_READ:True' || match[1] == 'SEND_READ:TRUE' || match[1] == 'SEND_READ:ture' || match[1] == 'SEND_READ: ture' || match[1] == 'SEND_READ:ttue' || match[1] == 'SEND_READ:trie' || match[1] == 'SEND_READ: trie' || match[1] == 'SEND_READ:Trie' || match[1] == 'SEND_READ: Trie') {

        if (Config.LANG == 'TR' || Config.LANG == 'AZ') {
            await message.client.sendMessage(
                message.jid,
                '_Görünüşe göre_ *SEND_READ* _anahtarını_ *true* _yapmaya çalışıyorsun._\n_Merak etme, senin için doğrusunu ayarlayabilirim._',
                MessageType.text
            );
            return await heroku.patch(baseURI + '/config-vars', {
                body: {
                    ['SEND_READ']: 'true'
                }
            });
        }
        else {
            await message.client.sendMessage(
                message.jid,
                '_It looks like you are trying to make the_ *SEND_READ* _var switch_ *true.*\n_Dont worry, I will set it for you._',
                MessageType.text
            );
            return await heroku.patch(baseURI + '/config-vars', {
                body: {
                    ['SEND_READ']: 'true'
                }
            });
        }
    }
    if (match[1] == 'SEND_READ: false' || match[1] == 'SEND_READ: False' || match[1] == 'SEND_READ: FALSE' || match[1] == 'SEND_READ:False' || match[1] == 'SEND_READ:FALSE' || match[1] == 'SEND_READ:fakse' || match[1] == 'SEND_READ: fakse' || match[1] == 'SEND_READ:falde' || match[1] == 'SEND_READ: falde' || match[1] == 'SEND_READ:flase' || match[1] == 'SEND_READ:Flase' || match[1] == 'SEND_READ: flase') {

        if (Config.LANG == 'TR' || Config.LANG == 'AZ') {
            await message.client.sendMessage(
                message.jid,
                '_Görünüşe göre_ *SEND_READ* _anahtarını_ *false* _yapmaya çalışıyorsun._\n_Merak etme, senin için doğrusunu ayarlayabilirim._',
                MessageType.text
            );
            return await heroku.patch(baseURI + '/config-vars', {
                body: {
                    ['SEND_READ']: 'false'
                }
            });
        }
        else {
            await message.client.sendMessage(
                message.jid,
                '_It looks like you are trying to make the_ *SEND_READ* _var switch_ *false.*\n_Dont worry, I will set it for you._',
                MessageType.text
            );
            return await heroku.patch(baseURI + '/config-vars', {
                body: {
                    ['SEND_READ']: 'false'
                }
            });
        }
    }
    if (match[1] == 'DEBUG: false' || match[1] == 'DEBUG: False' || match[1] == 'DEBUG: FALSE' || match[1] == 'DEBUG:False' || match[1] == 'DEBUG:FALSE' || match[1] == 'DEBUG:fakse' || match[1] == 'DEBUG: fakse' || match[1] == 'DEBUG:falde' || match[1] == 'DEBUG: falde' || match[1] == 'DEBUG:flase' || match[1] == 'DEBUG:Flase' || match[1] == 'DEBUG: flase') {

        if (Config.LANG == 'TR' || Config.LANG == 'AZ') {
            await message.client.sendMessage(
                message.jid,
                '_Görünüşe göre_ *DEBUG* _anahtarını_ *false* _yapmaya çalışıyorsun._\n_Merak etme, senin için doğrusunu ayarlayabilirim._',
                MessageType.text
            );
            return await heroku.patch(baseURI + '/config-vars', {
                body: {
                    ['DEBUG']: 'false'
                }
            });
        }
        else {
            await message.client.sendMessage(
                message.jid,
                '_It looks like you are trying to make the_ *DEBUG* _var switch_ *false.*\n_Dont worry, I will set it for you._',
                MessageType.text
            );
            return await heroku.patch(baseURI + '/config-vars', {
                body: {
                    ['DEBUG']: 'false'
                }
            });
        }
    }
    if (match[1].match(/905511384572/i)) {

        if (Config.LANG == 'TR' || Config.LANG == 'AZ') {
            return await message.client.sendMessage(
                message.jid,
                '```Kurucuyu Block Chat\'e Alamam!```',
                MessageType.text
            );
        }
        else {
            return await message.client.sendMessage(
                message.jid,
                'I Can\'t Add Owner to Block Chat',
                MessageType.text
            );
        }
    }
    if (match[1] == 'BLOCK_CHAT: false' || match[1] == 'BLOCK_CHAT: False' || match[1] == 'BLOCK_CHAT: FALSE' || match[1] == 'BLOCK_CHAT:False' || match[1] == 'BLOCK_CHAT:FALSE' || match[1] == 'BLOCK_CHAT:fakse' || match[1] == 'BLOCK_CHAT: fakse' || match[1] == 'BLOCK_CHAT:falde' || match[1] == 'BLOCK_CHAT: falde' || match[1] == 'BLOCK_CHAT:flase' || match[1] == 'BLOCK_CHAT:Flase' || match[1] == 'BLOCK_CHAT: flase') {

        if (Config.LANG == 'TR' || Config.LANG == 'AZ') {
            await message.client.sendMessage(
                message.jid,
                '_Görünüşe göre_ *BLOCK_CHAT* _anahtarını_ *false* _yapmaya çalışıyorsun._\n_Merak etme, senin için doğrusunu ayarlayabilirim._',
                MessageType.text
            );
            return await heroku.patch(baseURI + '/config-vars', {
                body: {
                    ['BLOCK_CHAT']: 'false'
                }
            });
        }
        else {
            await message.client.sendMessage(
                message.jid,
                '_It looks like you are trying to make the_ *BLOCK_CHAT* _var switch_ *false.*\n_Dont worry, I will set it for you._',
                MessageType.text
            );
            return await heroku.patch(baseURI + '/config-vars', {
                body: {
                    ['BLOCK_CHAT']: 'false'
                }
            });
        }
    }
    if (match[1] == 'DEBUG: true' || match[1] == 'DEBUG: True' || match[1] == 'DEBUG: TRUE' || match[1] == 'DEBUG:True' || match[1] == 'DEBUG:TRUE' || match[1] == 'DEBUG:ture' || match[1] == 'DEBUG: ture' || match[1] == 'DEBUG:ttue' || match[1] == 'DEBUG:trie' || match[1] == 'DEBUG: trie' || match[1] == 'DEBUG:Trie' || match[1] == 'DEBUG: Trie') {

        if (Config.LANG == 'TR' || Config.LANG == 'AZ') {
            await message.client.sendMessage(
                message.jid,
                '_Görünüşe göre_ *DEBUG* _anahtarını_ *true* _yapmaya çalışıyorsun._\n_Merak etme, senin için doğrusunu ayarlayabilirim._',
                MessageType.text
            );
            return await heroku.patch(baseURI + '/config-vars', {
                body: {
                    ['DEBUG']: 'true'
                }
            });
        }
        else {
            await message.client.sendMessage(
                message.jid,
                '_It looks like you are trying to make the_ *DEBUG* _var switch_ *true.*\n_Dont worry, I will set it for you._',
                MessageType.text
            );
            return await heroku.patch(baseURI + '/config-vars', {
                body: {
                    ['DEBUG']: 'true'
                }
            });
        }
    }
    if (match[1] == 'NO_ONLINE: false' || match[1] == 'NO_ONLINE: False' || match[1] == 'NO_ONLINE: FALSE' || match[1] == 'NO_ONLINE:False' || match[1] == 'NO_ONLINE:FALSE' || match[1] == 'NO_ONLINE:fakse' || match[1] == 'NO_ONLINE: fakse' || match[1] == 'NO_ONLINE:falde' || match[1] == 'NO_ONLINE: falde' || match[1] == 'NO_ONLINE:flase' || match[1] == 'NO_ONLINE:Flase' || match[1] == 'NO_ONLINE: flase') {

        if (Config.LANG == 'TR' || Config.LANG == 'AZ') {
            await message.client.sendMessage(
                message.jid,
                '_Görünüşe göre_ *NO_ONLİNE* _anahtarını_ *false* _yapmaya çalışıyorsun._\n_Merak etme, senin için doğrusunu ayarlayabilirim._',
                MessageType.text
            );
            return await heroku.patch(baseURI + '/config-vars', {
                body: {
                    ['NO_ONLINE']: 'false'
                }
            });
        }
        else {
            await message.client.sendMessage(
                message.jid,
                '_It looks like you are trying to make the_ *NO_ONLİNE* _var switch_ *false.*\n_Dont worry, I will set it for you._',
                MessageType.text
            );
            return await heroku.patch(baseURI + '/config-vars', {
                body: {
                    ['NO_ONLINE']: 'false'
                }
            });
        }
    }
    if (match[1] == 'NO_ONLINE: true' || match[1] == 'NO_ONLINE: True' || match[1] == 'NO_ONLINE: TRUE' || match[1] == 'NO_ONLINE:True' || match[1] == 'NO_ONLINE:TRUE' || match[1] == 'NO_ONLINE:ture' || match[1] == 'NO_ONLINE: ture' || match[1] == 'NO_ONLINE:ttue' || match[1] == 'NO_ONLINE:trie' || match[1] == 'NO_ONLINE: trie' || match[1] == 'NO_ONLINE:Trie' || match[1] == 'NO_ONLINE: Trie') {

        if (Config.LANG == 'TR' || Config.LANG == 'AZ') {
            await message.client.sendMessage(
                message.jid,
                '_Görünüşe göre_ *NO_ONLİNE* _anahtarını_ *true* _yapmaya çalışıyorsun._\n_Merak etme, senin için doğrusunu ayarlayabilirim._',
                MessageType.text
            );
            return await heroku.patch(baseURI + '/config-vars', {
                body: {
                    ['NO_ONLINE']: 'true'
                }
            });
        }
        else {
            await message.client.sendMessage(
                message.jid,
                '_It looks like you are trying to make the_ *NO_ONLİNE* _var switch_ *true.*\n_Dont worry, I will set it for you._',
                MessageType.text
            );
            return await heroku.patch(baseURI + '/config-vars', {
                body: {
                    ['NO_ONLINE']: 'true'
                }
            });
        }
    }
    if (match[1] == 'LANGUAGE:En' || match[1] == 'LANGUAGE: En' || match[1] == 'LANGUAGE: en' || match[1] == 'LANGUAGE:EN' || match[1] == 'LANGUAGE: EN' || match[1] == 'LANGUAGE:eN' || match[1] == 'LANGUAGE: eN' || match[1] == 'LANGUAGE:E N' || match[1] == 'LANGUAGE: English' || match[1] == 'LANGUAGE:English' || match[1] == 'LANGUAGE:english' || match[1] == 'LANGUAGE: english') {

        if (Config.LANG == 'TR' || Config.LANG == 'AZ') {
            await message.client.sendMessage(
                message.jid,
                '_Görünüşe göre bot dilini_ *İngilize* _yapmaya çalışıyorsun._\n_Merak etme, senin için doğrusunu ayarlayabilirim._',
                MessageType.text
            );
            return await heroku.patch(baseURI + '/config-vars', {
                body: {
                    ['LANGUAGE']: 'en'
                }
            });
        }
        else {
            await message.client.sendMessage(
                message.jid,
                '_It looks like you are trying to change bot language to *English.*\n_Dont worry, I will set it for you._',
                MessageType.text
            );
            return await heroku.patch(baseURI + '/config-vars', {
                body: {
                    ['LANGUAGE']: 'en'
                }
            });
        }
    }
    if (match[1] == 'LANGUAGE:si' || match[1] == 'LANGUAGE: si' || match[1] == 'LANGUAGE:SI' || match[1] == 'LANGUAGE: SI' || match[1] == 'LANGUAGE:Si' || match[1] == 'LANGUAGE: Si' || match[1] == 'LANGUAGE:sI' || match[1] == 'LANGUAGE: sI') {

        if (Config.LANG == 'TR' || Config.LANG == 'AZ') {
            await message.client.sendMessage(
                message.jid,
                '_Görünüşe göre bot dilini_ *Azerice* _yapmaya çalışıyorsun._\n_Merak etme, senin için doğrusunu ayarlayabilirim._',
                MessageType.text
            );
            return await heroku.patch(baseURI + '/config-vars', {
                body: {
                    ['LANGUAGE']: 'si'
                }
            });
        }
        else {
            await message.client.sendMessage(
                message.jid,
                '_It looks like you are trying to change bot language to *Sinhala.*\n_Dont worry, I will set it for you._',
                MessageType.text
            );
            return await heroku.patch(baseURI + '/config-vars', {
                body: {
                    ['LANGUAGE']: 'si'
                }
            });
        }
    }    
    // ================================================== END CONFIG SCANNER ==================================================

    if ((varKey = match[1].split('#')[0]) && (varValue = match[1].split('#')[1])) {
        await heroku.patch(baseURI + '/config-vars', {
            body: {
                [varKey]: varValue
            }
        }).then(async (app) => {
            await message.client.sendMessage(message.jid,Lang.SET_SUCCESS.format(varKey, varValue), MessageType.text);
        });
    } else {
        await message.client.sendMessage(message.jid,Lang.INVALID, MessageType.text);
    }
}));


Cobra.addCommand({pattern: 'delvar ?(.*)', fromMe: true, desc: Lang.DELVAR_DESC}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.KEY_VAL_MISSING, MessageType.text);
    await heroku.get(baseURI + '/config-vars').then(async (vars) => {
        key = match[1].trim();
        for (vr in vars) {
            if (key == vr) {
                await heroku.patch(baseURI + '/config-vars', {
                    body: {
                        [key]: null
                    }
                });
                return await message.client.sendMessage(message.jid,Lang.DEL_SUCCESS.format(key), MessageType.text);
            }
        }
        await message.client.sendMessage(message.jid,Lang.NOT_FOUND, MessageType.text);
    }).catch(async (error) => {
        await message.client.sendMessage(message.jid,error.message, MessageType.text);
    });

}));

Cobra.addCommand({pattern: 'getvar ?(.*)', fromMe: true, desc: Lang.GETVAR_DESC}, (async (message, match) => {
    if (match[1].includes('VERIFYING_YOUR_USER_BOT_PLEASE_WAIT')) {return await message.client.sendMessage(message.jid,'```please enter valid value & formate```', MessageType.text)}
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.KEY_VAL_MISSING, MessageType.text);
    await heroku.get(baseURI + '/config-vars').then(async (vars) => {
        for (vr in vars) {
            if (match[1].trim() == vr) return await message.sendMessage("```{} - {}```".format(vr, vars[vr]));
        }
        await message.client.sendMessage(message.jid,Lang.NOT_FOUND, MessageType.text);
    }).catch(async (error) => {
        await message.client.sendMessage(message.jid,error.message, MessageType.text);
    });
}));
