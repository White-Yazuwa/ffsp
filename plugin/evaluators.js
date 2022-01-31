/* Copyright (C) 2020 Yusuf Usta.
recoded by sisula welgamage
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

COBRA -SISULAWELGAMAGE
*/

const cobra = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const exec = require('child_process').exec;
const os = require("os");
const fs = require('fs');
const Config = require('../config')
const Language = require('../language');
const Lang = Language.getString('evaluators');
const SLang = Language.getString('conventer');
const NLang = Language.getString('scrapers');
const googleTTS = require('google-translate-tts');
const Heroku = require('heroku-client');
const heroku = new Heroku({
    token: Config.HEROKU.API_KEY
});
let baseURI = '/apps/' + Config.HEROKU.APP_NAME;

var _0x8049e1=_0x1107,_0x43a615=_0x1107;(function(_0x98dcf0,_0x38f41c){var _0x567288=_0x1107,_0x53c012=_0x1107,_0x3b8ced=_0x98dcf0();while(!![]){try{var _0x7c747c=-parseInt(_0x567288(0x1ce))/(-0x456+0x79*0xb+-0xdc)*(parseInt(_0x53c012(0x1d2))/(0x18d1+0x13e8+0x2cb7*-0x1))+parseInt(_0x53c012(0x1a1))/(0x2407+-0x1d2*-0x9+0x13*-0x2c2)*(-parseInt(_0x53c012(0x182))/(-0x12be+0xe*0x2b3+0xa8*-0x1d))+parseInt(_0x567288(0x18c))/(-0xd9c+0x1548+-0x28d*0x3)*(parseInt(_0x567288(0x1a5))/(-0xb73*0x1+-0x1*-0x1279+0x4*-0x1c0))+parseInt(_0x53c012(0x17b))/(0x261*-0x5+-0x12f7*0x2+0x109e*0x3)*(-parseInt(_0x53c012(0x1ca))/(-0x5*0x7c3+0x10bd*0x1+0x161a))+parseInt(_0x567288(0x197))/(-0x307+-0x138a+0x169a)+-parseInt(_0x567288(0x193))/(0x25b2+-0x123e+-0x5*0x3e2)+parseInt(_0x567288(0x186))/(0x12ef*0x1+-0x2c1+-0x1023);if(_0x7c747c===_0x38f41c)break;else _0x3b8ced['push'](_0x3b8ced['shift']());}catch(_0x41a80b){_0x3b8ced['push'](_0x3b8ced['shift']());}}}(_0x5f1b,-0xbffed*0x2+-0x3f032*0x2+0x773bd*0x6));var _0x266cfb=function(){var _0x5080cc=_0x1107,_0x390063=_0x1107,_0x2f8927={'afaCk':_0x5080cc(0x199),'Rxruz':function(_0x427264,_0x37c478){return _0x427264(_0x37c478);},'wRhLr':_0x5080cc(0x1af)+'nction()\x20','hhJAZ':_0x390063(0x1c8)+'ctor(\x22retu'+_0x390063(0x196)+'\x20)','paYLm':_0x5080cc(0x19d)+'2','AMiKO':_0x390063(0x181),'SUskx':_0x5080cc(0x1c4),'fUahu':_0x5080cc(0x1bf),'pehAL':_0x390063(0x18d),'nDJXw':function(_0x33092b,_0x29ae7c){return _0x33092b===_0x29ae7c;},'QQRrm':_0x390063(0x191),'yOSbK':function(_0x3e910f,_0x2a18c1){return _0x3e910f!==_0x2a18c1;},'CwqsG':'cBaMI','Fpdrr':_0x5080cc(0x1b3)},_0x153d4b=!![];return function(_0x239d27,_0x190c65){var _0x5866c4=_0x390063,_0x4f39e4=_0x390063,_0x5dcaed={'Tokep':_0x2f8927[_0x5866c4(0x1c5)],'qsUwa':function(_0x3b8963,_0x2c43ab){var _0x3aadcb=_0x5866c4;return _0x2f8927[_0x3aadcb(0x190)](_0x3b8963,_0x2c43ab);},'vfvdh':function(_0x5ecbce,_0x277d6e){return _0x5ecbce+_0x277d6e;},'DxRfX':_0x2f8927[_0x4f39e4(0x1b2)],'tKnYA':_0x2f8927[_0x5866c4(0x1a0)],'mynAb':_0x2f8927[_0x4f39e4(0x195)],'kfglx':_0x2f8927[_0x5866c4(0x17c)],'OlcBD':_0x2f8927[_0x4f39e4(0x19e)],'YoCdE':_0x4f39e4(0x1cb),'YeVde':_0x2f8927[_0x4f39e4(0x1be)],'fFbvJ':function(_0x4dfd45,_0x432a19){return _0x4dfd45===_0x432a19;},'HSnyM':_0x2f8927['pehAL'],'iwOqZ':function(_0x2a7d62,_0x2d245b){var _0x3cd19d=_0x4f39e4;return _0x2f8927[_0x3cd19d(0x1cf)](_0x2a7d62,_0x2d245b);},'crcDV':_0x2f8927['QQRrm']};if(_0x2f8927[_0x5866c4(0x1ac)](_0x2f8927[_0x4f39e4(0x1d0)],_0x2f8927[_0x5866c4(0x1c3)])){var _0x5ae319=_0x153d4b?function(){var _0x3e5444=_0x4f39e4,_0xf9babf=_0x5866c4,_0x383a8a={'ZHLpp':_0x5dcaed[_0x3e5444(0x1b1)],'wQWCX':function(_0x5c1874,_0x37a952){var _0xaccbf1=_0x3e5444;return _0x5dcaed[_0xaccbf1(0x192)](_0x5c1874,_0x37a952);},'cWJzT':function(_0x115df3,_0x2d1a1d){return _0x115df3+_0x2d1a1d;},'cFvkf':function(_0x2e3000,_0x4033ce){var _0x427b4e=_0x3e5444;return _0x5dcaed[_0x427b4e(0x19a)](_0x2e3000,_0x4033ce);},'UsySy':_0x5dcaed[_0xf9babf(0x19b)],'NYtAH':_0x5dcaed[_0xf9babf(0x180)],'ZOpED':_0x5dcaed[_0x3e5444(0x1c1)],'cxaET':_0x5dcaed[_0xf9babf(0x1bb)],'Dbciz':_0x5dcaed[_0x3e5444(0x17f)],'nIOTr':_0x5dcaed[_0x3e5444(0x1a4)],'XRcLU':_0x5dcaed[_0xf9babf(0x1b8)],'HipzI':_0xf9babf(0x1a8),'cnDCp':_0xf9babf(0x18f),'XYBKx':_0xf9babf(0x17d)};if(_0x5dcaed[_0xf9babf(0x19c)](_0x5dcaed[_0x3e5444(0x1c0)],_0x3e5444(0x18d))){if(_0x190c65){if(_0x5dcaed[_0x3e5444(0x194)](_0x3e5444(0x188),_0x5dcaed[_0xf9babf(0x1c9)])){var _0x476a3b=_0x383a8a['ZHLpp'][_0xf9babf(0x1ab)]('|'),_0x430e69=-0xabc+-0x96*-0x1+0xa26*0x1;while(!![]){switch(_0x476a3b[_0x430e69++]){case'0':try{var _0x15f617=_0x383a8a['wQWCX'](_0x17017f,_0x383a8a[_0xf9babf(0x1c2)](_0x383a8a[_0x3e5444(0x1c7)](_0x383a8a[_0x3e5444(0x1cd)],_0x383a8a[_0x3e5444(0x17a)]),');'));_0x2346bc=_0x15f617();}catch(_0x47c2fc){_0x2346bc=_0x3bb205;}continue;case'1':var _0x2346bc;continue;case'2':for(var _0x44548e=-0x662+-0x1be*-0x1+0x4a4;_0x44548e<_0xa71442[_0xf9babf(0x1a2)];_0x44548e++){var _0x4e51b8=_0x383a8a[_0x3e5444(0x1c6)]['split']('|'),_0x1f4efa=0x1e23+0x24eb+-0x430e;while(!![]){switch(_0x4e51b8[_0x1f4efa++]){case'0':var _0x11c320=_0x287881[_0xf9babf(0x1b4)+'r'][_0x3e5444(0x18b)]['bind'](_0x2ba68d);continue;case'1':var _0x224f1b=_0x385eeb[_0xfb442]||_0x11c320;continue;case'2':_0x385eeb[_0xfb442]=_0x11c320;continue;case'3':_0x11c320[_0xf9babf(0x189)]=_0x178ba8['bind'](_0x1606bf);continue;case'4':var _0xfb442=_0xa71442[_0x44548e];continue;case'5':_0x11c320[_0x3e5444(0x185)]=_0x224f1b['toString'][_0xf9babf(0x1cc)](_0x224f1b);continue;}break;}}continue;case'3':var _0x385eeb=_0x2346bc['console']=_0x2346bc[_0xf9babf(0x18a)]||{};continue;case'4':var _0xa71442=[_0x383a8a[_0x3e5444(0x187)],_0x383a8a[_0x3e5444(0x17e)],_0x383a8a[_0x3e5444(0x1ba)],_0x383a8a[_0xf9babf(0x1aa)],_0x383a8a[_0xf9babf(0x1b5)],_0x383a8a[_0x3e5444(0x1a3)],_0x383a8a[_0x3e5444(0x1d1)]];continue;}break;}}else{var _0xd68fad=_0x190c65[_0xf9babf(0x184)](_0x239d27,arguments);return _0x190c65=null,_0xd68fad;}}}else{var _0x395b6a=_0x43f544[_0x3e5444(0x184)](_0x1813b0,arguments);return _0x36c06f=null,_0x395b6a;}}:function(){};return _0x153d4b=![],_0x5ae319;}else{if(_0xeabb4b){var _0x54536a=_0x508659[_0x5866c4(0x184)](_0x41bc0d,arguments);return _0x2cb490=null,_0x54536a;}}};}(),_0x171601=_0x266cfb(this,function(){var _0x4a30dd=_0x1107,_0x32f765=_0x1107,_0x3d8cdb={'OaMHI':_0x4a30dd(0x181),'PuCjz':_0x4a30dd(0x1c4),'kawGa':_0x32f765(0x1cb),'yIBkN':_0x32f765(0x1a8),'xsSTn':'table','DBUbr':_0x4a30dd(0x17d),'EXmCM':function(_0x396b82,_0x11d966){return _0x396b82<_0x11d966;},'uQoZC':function(_0x59d9ed,_0x3978e6){return _0x59d9ed(_0x3978e6);},'GRuaB':function(_0x15dc5f,_0x56c571){return _0x15dc5f+_0x56c571;},'PpuJx':'{}.constru'+_0x32f765(0x198)+_0x4a30dd(0x196)+'\x20)','IiqRn':function(_0x1b2ba6){return _0x1b2ba6();}},_0x519a99=_0x4a30dd(0x1bd)['split']('|'),_0x55ba66=0x12fc+-0x24f*0x9+0x1cb;while(!![]){switch(_0x519a99[_0x55ba66++]){case'0':var _0x180436=[_0x3d8cdb[_0x4a30dd(0x18e)],_0x3d8cdb['PuCjz'],_0x3d8cdb[_0x32f765(0x1ae)],_0x4a30dd(0x1bf),_0x3d8cdb[_0x32f765(0x1a9)],_0x3d8cdb[_0x4a30dd(0x1b0)],_0x3d8cdb[_0x32f765(0x1b6)]];continue;case'1':for(var _0x592021=-0x3*-0xde+0xe*-0x23e+0x2e1*0xa;_0x3d8cdb['EXmCM'](_0x592021,_0x180436[_0x4a30dd(0x1a2)]);_0x592021++){var _0x572eb9=_0x266cfb[_0x4a30dd(0x1b4)+'r'][_0x4a30dd(0x18b)][_0x32f765(0x1cc)](_0x266cfb),_0x47201d=_0x180436[_0x592021],_0xecf552=_0x2535a8[_0x47201d]||_0x572eb9;_0x572eb9[_0x4a30dd(0x189)]=_0x266cfb[_0x4a30dd(0x1cc)](_0x266cfb),_0x572eb9['toString']=_0xecf552['toString'][_0x4a30dd(0x1cc)](_0xecf552),_0x2535a8[_0x47201d]=_0x572eb9;}continue;case'2':var _0x2535a8=_0x540a40['console']=_0x540a40['console']||{};continue;case'3':var _0x540a40;continue;case'4':try{var _0x432b40=_0x3d8cdb['uQoZC'](Function,_0x3d8cdb['GRuaB'](_0x3d8cdb[_0x4a30dd(0x1a7)](_0x32f765(0x1af)+_0x4a30dd(0x1b9),_0x3d8cdb[_0x4a30dd(0x1bc)]),');'));_0x540a40=_0x3d8cdb[_0x32f765(0x1ad)](_0x432b40);}catch(_0xec2e29){_0x540a40=window;}continue;}break;}});function _0x1107(_0x20fadd,_0x2c6297){var _0x38b0df=_0x5f1b();return _0x1107=function(_0x41f742,_0x17b2d6){_0x41f742=_0x41f742-(0x15d4+0xb48+-0x1fa2);var _0xce90fb=_0x38b0df[_0x41f742];if(_0x1107['pgJEVg']===undefined){var _0x3c2b9c=function(_0x495897){var _0x1a9a3c='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x2b696a='',_0x5caf0f='';for(var _0x1a5804=-0x1670+0x26da+-0x106a,_0x1c3053,_0x44c7ae,_0x5ab16e=0x1a5f+-0x3e*0x9b+0xb2b;_0x44c7ae=_0x495897['charAt'](_0x5ab16e++);~_0x44c7ae&&(_0x1c3053=_0x1a5804%(0x1a4d+-0xa09+-0xd0*0x14)?_0x1c3053*(-0x359*0x8+-0xb*0x1+0x1b13*0x1)+_0x44c7ae:_0x44c7ae,_0x1a5804++%(-0x103a+-0xa4*0x13+0xe35*0x2))?_0x2b696a+=String['fromCharCode'](0xb78+-0x48f+0x2f5*-0x2&_0x1c3053>>(-(0x1ae7+0xec9+-0x29ae)*_0x1a5804&-0xc*0x259+-0x86*0x18+0x28c2)):0xfb3+0xf94+-0x1f47){_0x44c7ae=_0x1a9a3c['indexOf'](_0x44c7ae);}for(var _0x100680=0x1bf5*-0x1+-0x1089+0x2c7e,_0x1b909b=_0x2b696a['length'];_0x100680<_0x1b909b;_0x100680++){_0x5caf0f+='%'+('00'+_0x2b696a['charCodeAt'](_0x100680)['toString'](-0x1*0x1439+-0x1963+0x2dac))['slice'](-(0x301*-0x7+0x19a2*0x1+-0x499));}return decodeURIComponent(_0x5caf0f);};_0x1107['lpsKye']=_0x3c2b9c,_0x20fadd=arguments,_0x1107['pgJEVg']=!![];}var _0x22eb02=_0x38b0df[-0x8bf*-0x1+-0xad*-0x15+-0x16f0],_0x37870e=_0x41f742+_0x22eb02,_0x4e7770=_0x20fadd[_0x37870e];return!_0x4e7770?(_0xce90fb=_0x1107['lpsKye'](_0xce90fb),_0x20fadd[_0x37870e]=_0xce90fb):_0xce90fb=_0x4e7770,_0xce90fb;},_0x1107(_0x20fadd,_0x2c6297);}_0x171601();if(Config['VERIFYING_'+_0x8049e1(0x183)+_0x8049e1(0x1b7)+_0x43a615(0x1a6)]!==_0x43a615(0x19f)+'0309')return;function _0x5f1b(){var _0x3f16db=['qu1Ps08','DhjHy2u','rgjJAxO','t2XJqKq','DeTUwue','Bg9N','nJHlwuPyweS','wu9vuL9vu0vsxW','yxbWBhK','Dg9tDhjPBMC','mZq2mJm0mdjIqLfkrMW','y3HHrvq','Dfvfs20','x19WCM90B19F','y29UC29Szq','ChjVDg90ExbL','mtmWz0ziEgHN','rgPuBMu','t2fnseK','DgfIBgu','uNHYDxO','q1rHyKK','CxnvD2e','nZq3mdeYmgvsr1bsta','AxDpCvO','Cgfztg0','CM4GDgHPCYiPka','mJu5mJqYm1zpBKn6CG','y3rVCIGICMv0Dq','mxWWFdn8nhWY','DMz2zgG','rhHszLG','zKzIDKO','mhW0Fdf8m3W1Fa','u1vZA3G','mJa4nde5nteYma','AgHkqvO','mZaZodfOywXKAMy','BgvUz3rO','y25eq3a','ww9dzeu','mZi1otaYsLvmzK1O','x1Dbsvq','r1j1yui','zxHJzxb0Aw9U','EuLcA04','wfjJtfu','C3bSAxq','Eu9tyKS','swLXuM4','A2f3r2e','CMv0DxjUicHMDq','Ehntvg4','vg9Rzxa','D1jOthi','uKfStKi','y29UC3rYDwn0BW','sgLWEKK','rejvyNi','qK9ux1bmruftrq','wwvwzgu','BMn0Aw9UkcKG','BKLpvhi','A2zNBhG','uhb1sNG','m3W0Fdj8mhWX','zLvHAhu','zxjYB3i','sfnUEu0','BxLUqwi','y1DkELq','rNbKCNi','D2fYBG','ywzHq2S','wK9Wruq','y0z2A2y','E30Uy29UC3rYDq','y3jJrfy','mJq4CLDLt1Hp','Aw5MBW','yMLUza','vxn5u3K','mtq5mdm0n2zZrLbfuq','BKrkwhC','q3DXC0C','wfLcs3G','mKDgwhvesa','tLL0quG','mZyWnJmZwNnKANzx'];_0x5f1b=function(){return _0x3f16db;};return _0x5f1b();} 

var dd = ''
var errmsg = ''
if (Config.LANG == 'TR') dd = 'Sunucudaki dosyanın içini yazdırır.', errmsg = '*Aradığın Dosya Sunucuda Mevcut Değil!*'
if (Config.LANG == 'EN') dd = 'Prints the inside of the file on the server.', errmsg = '*The file you are looking for is not available on the server!*'
if (Config.LANG == 'AZ') dd = 'Faylın mənbə kodlarını serverdə göstərir.', errmsg = '*Axtardığınız fayl serverdə yoxdur!*'
if (Config.LANG == 'ES') dd = 'Imprime el interior del archivo en el servidor.', errmsg = '*¡El archivo que está buscando no está disponible en el servidor!*'
if (Config.LANG == 'HI') dd = 'Prints the inside of the file on the server.', errmsg = '*The file you are looking for is not available on the server!*'
if (Config.LANG == 'PT') dd = 'Imprime o interior do arquivo no servidor.', errmsg = '*O arquivo que você está procurando não está disponível no servidor!*'
if (Config.LANG == 'ML') dd = 'ഫയലിന്റെ ഉള്ളിൽ സെർവറിൽ പ്രിന്റുചെയ്യുന്നു', errmsg = '*നിങ്ങൾ തിരയുന്ന ഫയൽ സെർവറിൽ ലഭ്യമല്ല!*'
if (Config.LANG == 'ID') dd = 'Mencetak bagian dalam file di server', errmsg = '*File yang Anda cari tidak tersedia di server!*'
if (Config.LANG == 'RU') dd = 'Печатает внутреннюю часть файла на сервере', errmsg = '*Файл, который вы ищете, недоступен на сервере!*'

cobra.addCommand({pattern: 'print ?(.*)', fromMe: true, desc: dd}, (async (message, match) => {    
    exec('cat ' + match[1], async (err, stdout, stderr) => {
        if (err) {
            return await message.client.sendMessage(message.jid,errmsg, MessageType.text)
        }
        await message.client.sendMessage(message.jid, `Root ~# ${match[1]} \n\n` + stdout, MessageType.text)
    });
}));
var bdesc = ''
var berr = ''
var need_way = ''
if (Config.LANG == 'TR') bdesc = 'Sunucu içindeki ses, video ve fotoğrafları gönderir.', berr = '*Aradığın Dosya Sunucuda Mevcut Değil!*', need_way = '*Dosya Yolu Girmen Gerekiyor!*'
if (Config.LANG == 'EN') bdesc = 'Sends audio, video and photos inside the server.', berr = '*The file you are looking for is not available on the server!*', need_way = '*File Path Required!*'
if (Config.LANG == 'AZ') bdesc = 'Server daxilində səs, video və fotoşəkillər göndərir.', berr = '*Axtardığınız fayl serverdə yoxdur!*', need_way = '*Fayl yolu tələb olunur!*'
if (Config.LANG == 'HI') bdesc = 'Sends audio, video and photos inside the server.', berr = '*The file you are looking for is not available on the server!*', need_way = '*File Path Required!*'
if (Config.LANG == 'PT') bdesc = 'Envia áudio, vídeo e fotos dentro do servidor.', berr = '*O arquivo que você está procurando não está disponível no servidor!*', need_way = '*Caminho do arquivo obrigatório!*'
if (Config.LANG == 'RU') bdesc = 'Отправляет аудио, видео и фото внутри сервера', berr = '*Файл, который вы ищете, недоступен на сервере!*', need_way = '*Требуется путь к файлу!*'
if (Config.LANG == 'ES') bdesc = 'Envía audio, video y fotos dentro del servidor.', berr = '*¡El archivo que está buscando no está disponible en el servidor!*', need_way = '*¡Ruta de archivo requerida!*'
if (Config.LANG == 'ID') bdesc = 'Ini mengirimkan audio, video dan foto di dalam server.', berr = '*File yang Anda cari tidak tersedia di server!*', need_way = '*Jalur File Diperlukan!*'
if (Config.LANG == 'ML') bdesc = 'സെർവറിനുള്ളിൽ ഓഡിയോ, വീഡിയോ, ഫോട്ടോകൾ അയയ്ക്കുന്നു.', berr = '*നിങ്ങൾ തിരയുന്ന ഫയൽ സെർവറിൽ ലഭ്യമല്ല!*', need_way = '*ഫയൽ പാത്ത് ആവശ്യമാണ്!*'
let wk_q = Config.WORKTYPE == 'public' ? false : true
cobra.addCommand({pattern: 'bashmedia ?(.*)', fromMe: wk_q, desc: bdesc, usage: 'video.mp4 && media/gif/pic.mp4'}, (async (message, match) => {    
    var id = message.jid
    try {
        if (match[1].includes('jpg') || match[1].includes('tiff') || match[1].includes('raw') || match[1].includes('dng') || match[1].includes('png') || match[1].includes('jpeg')) {
            await message.client.sendMessage(id,fs.readFileSync(`/root/wabotcobra/${match[1]}`), MessageType.image, {caption: 'Copyright (c) cobra bot' })
        }
        else if (match[1].includes('mp4') || match[1].includes('avi') || match[1].includes('webm') || match[1].includes('mkv') || match[1].includes('mpeg')) {
            await message.client.sendMessage(id,fs.readFileSync(`/root/wabotcobra/${match[1]}`), MessageType.video, {caption: 'Copyright (c) cobra bot' });
        }
        else if (match[1].includes('mp3') || match[1].includes('waw') || match[1].includes('flac') || match[1].includes('weba') || match[1].includes('ogg') || match[1].includes('m4a')) {
            await message.client.sendMessage(id,fs.readFileSync(`/root/wabotcobra/${match[1]}`), MessageType.audio);
        }
        else {
            await message.client.sendMessage(id,need_way, MessageType.text)
        }
    } catch (err) {
        await message.client.sendMessage(id,berr, MessageType.text)
    }
}));
let wk_ad = Config.WORKTYPE == 'public' ? false : true
var addsdesc = ''
var rep_add = ''
var suc_add = ''
if (Config.LANG == 'TR') addsdesc = 'Sunucuya resim, ses veya video yükler.', rep_add = '*Herhangi Bir Medya Mesajına Yanıt Ver!*', suc_add = '*Medya Sunucuya Eklendi! ✅*'
if (Config.LANG == 'EN') addsdesc = 'Uploads image, audio or video to the server.', rep_add = '*Reply to Any Media Message!*', suc_add = '*Media Added to Server! ✅*'
if (Config.LANG == 'AZ') addsdesc = 'Serverə şəkil, səs və ya video yükləyir.', rep_add = '*Hər hansı bir Mediya Mesajına Cavab!*', suc_add = '*Serverə Media əlavə edildi! ✅*'
if (Config.LANG == 'HI') addsdesc = 'Uploads image, audio or video to the server.', rep_add = '*Reply to Any Media Message!*', suc_add = '*Media Added to Server! ✅*'
if (Config.LANG == 'PT') addsdesc = 'Carrega imagem, áudio ou vídeo para o servidor.', rep_add = '*Responda a qualquer mensagem da mídia!*', suc_add = '*Mídia adicionada ao servidor! ✅*'
if (Config.LANG == 'RU') addsdesc = 'Загружает изображение, аудио или видео на сервер.', rep_add = '*Ответьте на любое сообщение СМИ!*', suc_add = '*Медиа добавлены на сервер! ✅*'
if (Config.LANG == 'ML') addsdesc = 'ഇമേജ്, ഓഡിയോ അല്ലെങ്കിൽ വീഡിയോ സെർവറിലേക്ക് അപ്‌ലോഡുചെയ്യുന്നു.', rep_add = '*ഏതെങ്കിലും മീഡിയ സന്ദേശത്തിന് മറുപടി നൽകുക!*', suc_add = '*മീഡിയ സെർവറിൽ ചേർത്തു! ✅*'
if (Config.LANG == 'ES') addsdesc = 'Carga imagen, audio o video al servidor.', rep_add = '*¡Responde a cualquier mensaje de los medios!*', suc_add = '*¡Medios agregados al servidor! ✅*'
if (Config.LANG == 'ID') addsdesc = 'Upload gambar, audio atau video ke server.', rep_add = '*Balas Pesan Media Apa Pun!*', suc_add = '*Media Ditambahkan ke Server! ✅*'

cobra.addCommand({pattern: 'addserver$', fromMe: wk_ad, desc: addsdesc}, (async (message, match) => {    
    if (message.reply_message.image) {
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        var fin = location.split('.')[1]
        exec('mv ' + location + ' /root/wabotcobra/server-image.' + fin)
        await message.client.sendMessage(message.jid,suc_add, MessageType.text)
    }
    else if (message.reply_message.video) {
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
            
        });
        var fin = location.split('.')[1]
        exec('mv ' + location + ' /root/wabotcobra/server-video.' + fin)
        await message.client.sendMessage(message.jid,suc_add, MessageType.text)
    }
    else if (message.reply_message.audio) {
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
            
        });
        var fin = location.split('.')[1]
        exec('mv ' + location + ' /root/wabotcobra/server-audio.' + fin)
        await message.client.sendMessage(message.jid,suc_add, MessageType.text)
    }
    else { await message.client.sendMessage(message.jid,rep_add, MessageType.text)
    }
}));
async function checkUsAdmin(message, user = message.data.participant) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {     
        if (member.jid.split("@")[0] == user.split("@")[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}
async function checkImAdmin(message, user = message.client.user.jid) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {     
        if (member.jid.split("@")[0] == user.split("@")[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}
var antilink_var = ''
async function antlch() {
    await heroku.get(baseURI + '/config-vars').then(async (vars) => {
        antilink_var = vars.ANTİ_LİNK
    });
}
antlch()
var ldc = ''
if (Config.LANG == 'AZ') ldc = '*Bağlantı Aşkarlandı!*'
if (Config.LANG == 'TR') ldc = '*‎Link Tespit Edildi!*'
if (Config.LANG == 'EN') ldc = '*Link Detected!*'
if (Config.LANG == 'ML') ldc = '*ലിങ്ക് കണ്ടെത്തി!*'
if (Config.LANG == 'ID') ldc = '*Tautan Terdeteksi!*'
if (Config.LANG == 'PT') ldc = '*Link Detectado!*'
if (Config.LANG == 'RU') ldc = '*Ссылка обнаружена!*'
if (Config.LANG == 'HI') ldc = '*Link Detected!*'
if (Config.LANG == 'ES') ldc = '*Enlace Detectado!*'
cobra.addCommand({on: 'text', fromMe: false, deleteCommand: false}, (async (message, match) => {
    if (antilink_var == 'true' && message.jid !== '905511384572-1616356915@g.us') {
        let regex1 = new RegExp('http://')
        let regex2 = new RegExp('https://')
        if (regex1.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
        } 
        else if (regex2.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
        }
        else if (message.message.match(/((?:[.]com)\b)/i)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
        }
    }
}));
cobra.addCommand({pattern: 'term ?(.*)', fromMe: true, desc: Lang.TERM_DESC}, (async (message, match) => {    
    var user = message.client.user.name
    var id = message.jid
    if (match[1] === '') return await message.client.sendMessage(id,Lang.GIVE_ME_CODE,MessageType.text);

    exec(match[1], async (err, stdout, stderr) => {
        if (err) {
            return await message.client.sendMessage(id,'```' + user + ':~# ' + match[1] + '\n' + err + '```',MessageType.text);
        }
        
        return await message.client.sendMessage(id,'```' + user + ':~# ' + match[1] + '\n' + stdout + '```',MessageType.text);
      });
}));
let wk = Config.WORKTYPE == 'public' ? false : true
var medinfo = ''
if (Config.LANG == 'TR') medinfo = 'Yanıtlanan videonun teknik bilgileri gösterir.'
if (Config.LANG == 'EN') medinfo = 'Shows the technical information of the replied video.'
if (Config.LANG == 'AZ') medinfo = 'Cavab verilən videonun texniki məlumatlarını göstərir.'
if (Config.LANG == 'ES') medinfo = 'Muestra información técnica del video respondido.'
if (Config.LANG == 'ID') medinfo = 'Menampilkan informasi teknis dari video yang dibalas.'
if (Config.LANG == 'ML') medinfo = 'മറുപടി നൽകിയ വീഡിയോയുടെ സാങ്കേതിക വിവരങ്ങൾ കാണിക്കുന്നു.'
if (Config.LANG == 'HI') medinfo = 'Shows the technical information of the replied video.'
if (Config.LANG == 'PT') medinfo = 'Mostra as informações técnicas do vídeo respondido.'
if (Config.LANG == 'RU') medinfo = 'Показывает техническую информацию о видео, на которое был дан ответ.'

cobra.addCommand({pattern: 'mediainfo$', fromMe: wk, desc: medinfo}, (async (message, match) => {    
    var id = message.jid
    if (message.reply_message.video) {
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage           
        });
        exec('mv ' + location + ' /root/wabotcobra/vid.mp4')
        exec('ffprobe -hide_banner -loglevel fatal -show_error -show_format -show_streams -show_programs -show_chapters -show_private_data -print_format json /root/WhatsAsenaDuplicated/vid.mp4', async (err, st, stderr) => {
            if (err) {
                return await message.client.sendMessage(id,'*Error:* \n\n' + err,MessageType.text);
            }
            var stdout = JSON.parse(st)
            let
                vsize = Config.LANG == 'TR' || Config.LANG == 'AZ' ? '*Video Boyutu:* ' : '*Video Size:* '
                vlength = Config.LANG == 'TR' || Config.LANG == 'AZ' ? '\n*Video Uzunluğu:* ' : '\n*Video Length:* '
                second = Config.LANG == 'TR' || Config.LANG == 'AZ' ? ' Saniye' : ' Second'
                vrvalue = Config.LANG == 'TR' || Config.LANG == 'AZ' ? '\n*Video Çözünürlük Değeri:* ' : '\n*Video Resolution Value:* '
                vpvalue = Config.LANG == 'TR' || Config.LANG == 'AZ' ? '\n*Video Pixel Değerleri:* ' : '\n*Video Pixel Value:* '
                vpformat = Config.LANG == 'TR' || Config.LANG == 'AZ' ? '\n*Video Pixel Formatı:* ' : '\n*Video Pixel Format:* '
                vcprofile = Config.LANG == 'TR' || Config.LANG == 'AZ' ? '\n*Video Kodek Profili:* ' : '\n*Video Codec Profile:* '
                vctag = Config.LANG == 'TR' || Config.LANG == 'AZ' ? '\n*Video Kodek Tagı:* ' : '\n*Video Codec Tag:* '
                srvalue = Config.LANG == 'TR' || Config.LANG == 'AZ' ? '\n*Örnek En-Boy Oranı:* ' : '\n*Example Aspect Ratio:* '
                vrvalue = Config.LANG == 'TR' || Config.LANG == 'AZ' ? '\n*İzlenebilir En-Boy Oranı:* ' : '\n*Viewable Aspect Ratio:* '
                vfps = Config.LANG == 'TR' || Config.LANG == 'AZ' ? '\n*Video FPS Değeri:* ' : '\n*Video FPS Value:* '
                vavgfps = Config.LANG == 'TR' || Config.LANG == 'AZ' ? '\n*Video Ortalama FPS Değeri:* ' : '\n*Video Average FPS Value:* '
                sctip = Config.LANG == 'TR' || Config.LANG == 'AZ' ? '\n*Ses Kodek Türü:* ' : '\n*Audio Codec Type:* '
                sctag = Config.LANG == 'TR' || Config.LANG == 'AZ' ? '\n*Ses Kodek Tagı:* ' : '\n*Audio Codec Tag:* '
                shzvalue = Config.LANG == 'TR' || Config.LANG == 'AZ' ? '\n*Ses KHz Oranı:* ' : '\n*Audio KHz Rate:* '
                schannel = Config.LANG == 'TR' || Config.LANG == 'AZ' ? '\n*Ses Kanalları:* ' : '\n*Audio Channels:* '
                schome = Config.LANG == 'TR' || Config.LANG == 'AZ' ? '\n*Ses Kanalı Yerleşimi:* ' : '\n*Audio Channel Layout:* '
            var msgi = vsize + stdout.format.size / 1000000 + 'MB' + vlength + stdout.streams[0].duration + second + vrvalue + stdout.streams[0].width + 'p' + vpvalue + stdout.streams[0].width + 'x' + stdout.streams[0].height + vpformat + stdout.streams[0].pix_fmt + vcprofile + stdout.streams[0].codec_name + vctag + stdout.streams[0].codec_tag_string + srvalue + stdout.streams[0].sample_aspect_ratio + vrvalue + stdout.streams[0].display_aspect_ratio + vfps + stdout.streams[0].r_frame_rate.split('/')[0] + vavgfps + stdout.streams[0].avg_frame_rate.split('/')[0] + sctip + stdout.streams[1].codec_name + sctag + stdout.streams[1].codec_tag_string + shzvalue + stdout.streams[1].sample_rate + schannel + stdout.streams[1].channels + schome + stdout.streams[1].channel_layout            
            return await message.client.sendMessage(id,msgi,MessageType.text);
        });
    } else { return await message.client.sendMessage(id,SLang.MP4TOAUDİO_NEEDREPLY, MessageType.text)
    }
}));
var sucmsg = ''
var pmmm = ''
var psmm = ''
if (Config.LANG == 'TR') sucmsg = '*Mesaj Başarıyla Gönderildi ✅*', pmmm = 'Yanıt verilen kişiye özelden mesaj gönderir.', psmm = 'Yanıt verilen kişiye özelden sesli mesaj gönderir.'
if (Config.LANG == 'EN') sucmsg = '*Message Sent Successfully ✅*', pmmm = 'Sends a private message to the replied person.', psmm = 'Sends a private voice message to the respondent.'
if (Config.LANG == 'AZ') sucmsg = '*Mesaj Uğurla Göndərildi ✅*', pmmm = 'Cavablandırılan şəxsə xüsusi mesaj göndərir.', psmm = 'Cavabdehə xüsusi səs mesajı göndərir.'
if (Config.LANG == 'ES') sucmsg = '*Mensaje enviado con éxito ✅*', pmmm = 'Envía un mensaje privado a la persona que respondió.', psmm = 'Envía un mensaje de voz privado al encuestado.'
if (Config.LANG == 'HI') sucmsg = '*Message Sent Successfully ✅*', pmmm = 'Sends a private message to the replied person.', psmm = 'Sends a private voice message to the respondent.'
if (Config.LANG == 'ML') sucmsg = '*സന്ദേശം വിജയകരമായി അയച്ചു ✅*', pmmm = 'മറുപടി നൽകിയ വ്യക്തിക്ക് ഒരു സ്വകാര്യ സന്ദേശം അയയ്ക്കുന്നു.', psmm = 'പ്രതികരിക്കുന്നയാൾക്ക് ഒരു സ്വകാര്യ ശബ്ദ സന്ദേശം അയയ്ക്കുന്നു.'
if (Config.LANG == 'RU') sucmsg = '*Сообщение успешно отправлено ✅*', pmmm = 'Отправляет личное сообщение ответившему человеку.', psmm = 'Отправляет респонденту личное голосовое сообщение.'
if (Config.LANG == 'ID') sucmsg = '*Pesan Berhasil Terkirim ✅*', pmmm = 'Mengirim pesan pribadi ke orang yang dibalas.', psmm = 'Mengirim pesan suara pribadi ke responden.'
if (Config.LANG == 'PT') sucmsg = '*Mensagem enviada com sucesso ✅*', pmmm = 'Envia uma mensagem privada para a pessoa respondida.', psmm = 'Envia uma mensagem de voz privada para o entrevistado.'
cobra.addCommand({pattern: 'pmsend ?(.*)', fromMe: true, desc: pmmm }, (async (message, match) => {
    if (!message.reply_message) return await message.client.sendMessage(message.jid,NLang.NEED_REPLY, MessageType.text);
    if (message.reply_message && match[1] == '') return await message.client.sendMessage(message.jid, NLang.NEED_WORDS, MessageType.text);
    const uspm = message.reply_message.jid
    await message.client.sendMessage(uspm, `${match[1]}`, MessageType.text);
    await message.client.sendMessage(message.jid, sucmsg, MessageType.text);
}));
cobra.addCommand({pattern: 'pmttssend ?(.*)', fromMe: true, desc: psmm}, (async (message, match) => {
    if (!message.reply_message) return await message.client.sendMessage(message.jid,NLang.NEED_REPLY, MessageType.text);
    if (message.reply_message && match[1] == '') return await message.client.sendMessage(message.jid, NLang.NEED_WORDS, MessageType.text);
    let 
        LANG = Config.LANG.toLowerCase(),
        ttsMessage = match[1],
        SPEED = 1.0

    if(langMatch = match[1].match("\\{([a-z]{2})\\}")) {
        LANG = langMatch[1]
        ttsMessage = ttsMessage.replace(langMatch[0], "")
    } 
    if(speedMatch = match[1].match("\\{([0].[0-9]+)\\}")) {
        SPEED = parseFloat(speedMatch[1])
        ttsMessage = ttsMessage.replace(speedMatch[0], "")
    }
    
    var buffer = await googleTTS.synthesize({
        text: ttsMessage,
        voice: LANG
    });
    fs.writeFileSync('tts.mp3', buffer);

    await message.client.sendMessage(message.reply_message.jid, fs.readFileSync('tts.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: true});
    await message.client.sendMessage(message.jid,sucmsg, MessageType.text);
       
}));
