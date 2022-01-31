const cobra = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const Config = require('../config');
const Language = require('../language');
const Lang = Language.getString('conventer');
const enmsg = '🔰 𝕏𝕞𝕖𝕕𝕚𝕒 𝕃𝕚𝕤𝕥 - ℂ𝕠𝕓𝕣𝕒𝕓𝕠𝕥 🔰' + '\n\n' + 
              '🛡 Usage: ' + '*.mp4enhance*' + '\n' +
              'Desc: ' + 'Enhance video’s quality.' + '\n\n' +
              '🛡 Usage: ' + '*.interp*' + '\n' +
              'Desc: ' + 'Increases the FPS of the video.' + '\n\n' +
              '🛡 Usage: ' + '*.mp4slowmo*' + '\n' +
              'Desc: ' + 'Applies true-slowmo to non-slow motion videos.' + '\n\n' +
              '🛡 Usage: ' + '*.x4mp4*' + '\n' +
              'Desc: ' + 'Reduce video’s quality by 75%.' + '\n\n' +
              '🛡 Usage: ' + '*.x2mp4*' + '\n' +
              'Desc: ' + 'Reduce video’s quality by 50%.' + '\n\n' +
              '🛡 Usage: ' + '*.gif*' + '\n' +
              'Desc: ' + 'Converts video to gif.' + '\n\n' +
              '🛡 Usage: ' + '*.agif*' + '\n' +
              'Desc: ' + 'Converts video to voiced gif.' + '\n\n' +
              '🛡 Usage: ' + '*.mp4blur*' + '\n' +
              'Desc: ' + 'Blurs the background of the video.' + '\n\n' +
              '🛡 Usage: ' + '*.mp4stab*' + '\n' +
              'Desc: ' + 'Decreases the vibration of the video.' + '\n\n' +
              '🛡 Usage: ' + '*.mp4rainbow*' + '\n' +
              'Desc: ' + 'Applies a rainbow effect to video.' + '\n\n' +
              '🛡 Usage: ' + '*.mp4color*' + '\n' +
              'Desc: ' + 'Makes the colors of the video more vivid and beautiful.' + '\n\n' +
              '🛡 Usage: ' + '*.mp4art*' + '\n' +
              'Desc: ' + 'Applies a art effect to the video.' + '\n\n' +
              '🛡 Usage: ' + '*.mp4negative*' + '\n' +
              'Desc: ' + 'Applies a negative color filter to the video.' + '\n\n' +
              '🛡 Usage: ' + '*.mp4vintage*' + '\n' +
              'Desc: ' + 'Applies a nostalgic effect to video.' + '\n\n' +
              '🛡 Usage: ' + '*.mp4bw*' + '\n' +
              'Desc: ' + 'Applies a monochrome effect to video.' + '\n\n' +
              '🛡 Usage: ' + '*.mp4reverse*' + '\n' +
              'Desc: ' + 'Plays the video in reverse.' + '\n\n' +
              '🛡 Usage: ' + '*.mp4edge*' + '\n' +
              'Desc: ' + 'Applies a edge effect to the video.' + '\n\n' +
              '🛡 Usage: ' + '*.mp4image*' + '\n' +
              'Desc: ' + 'Converts photo to 5 sec video.' + '\n\n' +
              '🛡 Usage: ' + '*.spectrum*' + '\n' +
              'Desc: ' + 'Converts the spectrum of sound into video.' + '\n\n' +
              '🛡 Usage: ' + '*.waves*' + '\n' +
              'Desc: ' + 'Converts the wave range of sound to video.' + '\n\n' +
              '🛡 Usage: ' + '*.frequency*' + '\n' +
              'Desc: ' + 'Converts the frequency range of sound to video.' + '\n\n' +
              '🛡  Usage: ' + '*.avec*' + '\n' +
              'Desc: ' + 'Converts the histogram of sound to video.' + '\n\n' +
              '🛡 Usage: ' + '*.volumeaudio*' + '\n' +
              'Desc: ' + 'Converts the decibel value of the sound into video.' + '\n\n' +
              '🛡 Usage: ' + '*.cqtaudio*' + '\n' +
              'Desc: ' + 'Converts the CQT value of audio to video.' + '\n\n' +
              '🛡 Usage: ' + '*.mp3eq*' + '\n' +
              'Desc: ' + 'Adjusts the sound to a crystal clear level.' + '\n\n' +
              '🛡 Usage: ' + '*.mp3bass*' + '\n' +
              'Desc: ' + 'Adds crystal bass without distorting the sound.' + '\n\n' +
              '🛡 Usage: ' + '*.mp3crusher*' + '\n' +
              'Desc: ' + 'Distorts the sound, makes ridiculous.' + '\n\n' +
              '🛡 Usage: ' + '*.mp3reverse*' + '\n' +
              'Desc: ' + 'Plays the sound in reverse.' + '\n\n' +
              '🛡 Usage: ' + '*.mp3pitch*' + '\n' +
              'Desc: ' + 'Makes the sound thinner and faster.' + '\n\n' +
              '🛡 Usage: ' + '*.mp3low*' + '\n' +
              'Desc: ' + 'Makes the sound deep and slower.' + '\n\n' +
              '🛡 Usage: ' + '*.x2mp3*' + '\n' +
              'Desc: ' + 'Makes the sound twice as fast.' + '\n\n' +
              '🛡 Usage: ' + '*.mp3volume*' + '\n' +
              'Desc: ' + 'Increase sound level so much.' + '\n\n' +
              '🛡 Usage: ' + '*.bwimage*' + '\n' +
              'Desc: ' + 'Applies a monochrome effect to image.' + '\n\n' +
              '🛡 Usage: ' + '*.vintageimage*' + '\n' +
              'Desc: ' + 'Applies a vinatge effect to photo.' + '\n\n' +
              '🛡 Usage: ' + '*.edgeimage*' + '\n' +
              'Desc: ' + 'Applies a edge effect to the photo.' + '\n\n' +
              '🛡 Usage: ' + '*.enhanceimage*' + '\n' +
              'Desc: ' + 'Makes the photo clearer.' + '\n\n' +
              '🛡 Usage: ' + '*.blurimage*' + '\n' +
              'Desc: ' + 'Blurs the background of the photo.' + '\n\n' +
              '🛡 Usage: ' + '*.grenimage*' + '\n' +
              'Desc: ' + 'Applies grain effect to the photo.' + '\n\n' +
              '🛡 Usage: ' + '*.negativeimage*' + '\n' +
              'Desc: ' + 'Applies a negative color filter to the photo.' + '\n\n' +
              '🛡 Usage: ' + '*.rainbowimage*' + '\n' +
              'Desc: ' + 'Applies rainbow effect to the photo.' + '\n\n' +
              '🛡 Usage: ' + '*.colorimage*' + '\n' +
              'Desc: ' + 'It makes the colors of the photo more vivid and attractive.' + '\n\n' +
              '🛡 Usage: ' + '*.artimage*' + '\n' +
              'Desc: ' + 'Applies a art effect to the photo.' + '\n\n' 

const simsg = '🔰 𝕏𝕞𝕖𝕕𝕚𝕒 𝕃𝕚𝕤𝕥 - ℂ𝕠𝕓𝕣𝕒𝕓𝕠𝕥 🔰' + '\n\n' + 
              '🛡 භාවිතය: ' + '*.mp4enhance*' + '\n' +
              'විස්තරය: ' + 'වීඩියෝවේ ගුණාත්මකභාවය වැඩි දියුණු කරන්න.' + '\n\n' +
              '🛡 භාවිතය: ' + '*.interp*' + '\n' +
              'විස්තරය: ' + 'වීඩියෝවේ FPS වැඩි කරයි.' + '\n\n' +
              '🛡 භාවිතය: ' + '*.mp4slowmo*' + '\n' +
              'විස්තරය: ' + 'වීඩියෝ සඳහා slow-motion සාදනු ඇත.' + '\n\n' +
              '🛡 භාවිතය: ' + '*.x4mp4*' + '\n' +
              'විස්තරය: ' + 'වීඩියෝවේ ගුණාත්මකභාවය 75%කින් අඩු කරන්න.' + '\n\n' +
              '🛡 භාවිතය: ' + '*.x2mp4*' + '\n' +
              'විස්තරය: ' + 'වීඩියෝවේ ගුණාත්මකභාවය 50%කින් අඩු කරන්න.' + '\n\n' +
              '🛡 භාවිතය: ' + '*.gif*' + '\n' +
              'විස්තරය: ' + 'වීඩියෝව gif බවට පරිවර්තනය කරයි.' + '\n\n' +
              '🛡 භාවිතය: ' + '*.agif*' + '\n' +
              'විස්තරය: ' + 'වීඩියෝව voiced gif බවට පරිවර්තනය කරයි.' + '\n\n' +
              '🛡 භාවිතය: ' + '*.mp4blur*' + '\n' +
              'විස්තරය: ' + 'වීඩියෝ පටයේ පසුබිම බොඳ කරයි.' + '\n\n' +
              '🛡 භාවිතය: ' + '*.mp4stab*' + '\n' +
              'විස්තරය: ' + 'වීඩියෝවේ කම්පනය අඩු කරයි.' + '\n\n' +
              '🛡 භාවිතය: ' + '*.mp4rainbow*' + '\n' +
              'විස්තරය: ' + 'දේදුනු බලපෑමක් වීඩියෝ පටයට යොදයි.' + '\n\n' +
              '🛡 භාවිතය: ' + '*.mp4color*' + '\n' +
              'විස්තරය: ' + 'වීඩියෝවේ වර්ණ වඩාත් විචිත්ර හා ලස්සන කරයි.' + '\n\n' +
              '🛡 භාවිතය: ' + '*.mp4art*' + '\n' +
              'විස්තරය: ' + 'වීඩියෝව සඳහා කලාත්මක බලපෑමක් යොදයි.' + '\n\n' +
              '🛡 භාවිතය: ' + '*.mp4negative*' + '\n' +
              'විස්තරය: ' + 'වීඩියෝවට සෘණ වර්ණ filter යොදයි.' + '\n\n' +
              '🛡 භාවිතය: ' + '*.mp4vintage*' + '\n' +
              'විස්තරය: ' + 'වීඩියෝ පටයට විකාර හැඟීමක් යෙදේ.' + '\n\n' +
              '🛡 භාවිතය: ' + '*.mp4bw*' + '\n' +
              'විස්තරය: ' + 'වීඩියෝ සඳහා black and white effect යොදයි.' + '\n\n' +
              '🛡 භාවිතය: ' + '*.mp4reverse*' + '\n' +
              'විස්තරය: ' + 'වීඩියෝව reverse කරන්න.' + '\n\n' +
              '🛡 භාවිතය: ' + '*.mp4edge*' + '\n' +
              'විස්තරය: ' + 'වීඩියෝ පටයට edge effect යොදයි.' + '\n\n' +
              '🛡 භාවිතය: ' + '*.mp4image*' + '\n' +
              'විස්තරය: ' + 'ඡායාරූපය තත්පර 5 ක වීඩියෝවක් බවට පරිවර්තනය කරන්න.' + '\n\n' +
              '🛡 භාවිතය: ' + '*.spectrum*' + '\n' +
              'විස්තරය: ' + 'ශබ්ද වල වර්ණාවලිය වීඩියෝ බවට පරිවර්තනය කරයි.' + '\n\n' +
              '🛡 භාවිතය: ' + '*.waves*' + '\n' +
              'විස්තරය: ' + 'ශබ්දයේ තරංග පරාසය වීඩියෝ බවට පරිවර්තනය කරයි.' + '\n\n' +
              '🛡 භාවිතය: ' + '*.frequency*' + '\n' +
              'විස්තරය: ' + 'ශබ්දයේ සංඛ්යාත පරාසය වීඩියෝ බවට පරිවර්තනය කරයි.' + '\n\n' +
              '🛡  භාවිතය: ' + '*.avec*' + '\n' +
              'විස්තරය: ' + 'ශබ්දයේ හිස්ටෝග්රෑම් වීඩියෝ බවට පරිවර්තනය කරයි.' + '\n\n' +
              '🛡 භාවිතය: ' + '*.volumeaudio*' + '\n' +
              'විස්තරය: ' + 'ශබ්දයේ ඩෙසිබල් අගය වීඩියෝ බවට පරිවර්තනය කරයි.' + '\n\n' +
              '🛡 භාවිතය: ' + '*.cqtaudio*' + '\n' +
              'විස්තරය: ' + 'CQT අගය වීඩියෝ පටයක් බවට පරිවර්තනය කරයි.' + '\n\n' +
              '🛡 භාවිතය: ' + '*.mp3eq*' + '\n' +
              'විස්තරය: ' + 'ශබ්දය පැහැදිලි පැහැදිලි මට්ටමකට සකසන්න.' + '\n\n' +
              '🛡 භාවිතය: ' + '*.mp3bass*' + '\n' +
              'විස්තරය: ' + 'ශබ්දය විකෘති නොකර Cristal Bass එකතු කරයි.' + '\n\n' +
              '🛡 භාවිතය: ' + '*.mp3crusher*' + '\n' +
              'විස්තරය: ' + 'ශබ්දය විකෘති කරයි, හාස්ය උපදවයි.' + '\n\n' +
              '🛡 භාවිතය: ' + '*.mp3reverse*' + '\n' +
              'විස්තරය: ' + 'ශබ්දය reverse වාදනය කරයි.' + '\n\n' +
              '🛡 භාවිතය: ' + '*.mp3pitch*' + '\n' +
              'විස්තරය: ' + 'ශබ්දය තුනී හා වේගවත් කරයි.' + '\n\n' +
              '🛡 භාවිතය: ' + '*.mp3low*' + '\n' +
              'විස්තරය: ' + 'ශබ්දය ගැඹුරු හා මන්දගාමී කරයි.' + '\n\n' +
              '🛡 භාවිතය: ' + '*.x2mp3*' + '\n' +
              'විස්තරය: ' + 'ශබ්දය මෙන් දෙගුණයක් වේගවත් කරයි.' + '\n\n' +
              '🛡 භාවිතය: ' + '*.mp3volume*' + '\n' +
              'විස්තරය: ' + 'ශබ්ද මට්ටම එතරම් වැඩි කරන්න.' + '\n\n' +
              '🛡 භාවිතය: ' + '*.bwimage*' + '\n' +
              'විස්තරය: ' + 'රූපයට black and white effect යොදයි.' + '\n\n' +
              '🛡 භාවිතය: ' + '*.vintageimage*' + '\n' +
              'විස්තරය: ' + 'වීඩියෝ පටයට vintage effect යොදයි.' + '\n\n' +
              '🛡 භාවිතය: ' + '*.edgeimage*' + '\n' +
              'විස්තරය: ' + 'ඡායාරූපයෙහි edge effect යොදයි.' + '\n\n' +
              '🛡 භාවිතය: ' + '*.enhanceimage*' + '\n' +
              'විස්තරය: ' + 'ඡායාරූපය වඩාත් පැහැදිලි කරයි.' + '\n\n' +
              '🛡 භාවිතය: ' + '*.blurimage*' + '\n' +
              'විස්තරය: ' + 'ඡායාරූපයේ පසුබිම බොඳ කරයි.' + '\n\n' +
              '🛡 භාවිතය: ' + '*.grenimage*' + '\n' +
              'විස්තරය: ' + 'ඡායාරූපය සඳහා grain effect යොදයි.' + '\n\n' +
              '🛡 භාවිතය: ' + '*.negativeimage*' + '\n' +
              'විස්තරය: ' + 'ඡායාරූපය සඳහා සෘණ වර්ණ filter යොදන්න.' + '\n\n' +
              '🛡 භාවිතය: ' + '*.rainbowimage*' + '\n' +
              'විස්තරය: ' + 'ඡායාරූපය සඳහා දේදුන්න filter යොදයි.' + '\n\n' +
              '🛡 භාවිතය: ' + '*.colorimage*' + '\n' +
              'විස්තරය: ' + 'එමඟින් ඡායාරූපයේ වර්ණ වඩාත් විචිත්ර හා ආකර්ෂණීය කරයි.' + '\n\n' +
              '🛡 භාවිතය: ' + '*.artimage*' + '\n' +
              'විස්තරය: ' + 'ඡායාරූපය සඳහා art effect යොදයි.' + '\n\n'

var _0x8049e1=_0x1107,_0x43a615=_0x1107;(function(_0x98dcf0,_0x38f41c){var _0x567288=_0x1107,_0x53c012=_0x1107,_0x3b8ced=_0x98dcf0();while(!![]){try{var _0x7c747c=-parseInt(_0x567288(0x1ce))/(-0x456+0x79*0xb+-0xdc)*(parseInt(_0x53c012(0x1d2))/(0x18d1+0x13e8+0x2cb7*-0x1))+parseInt(_0x53c012(0x1a1))/(0x2407+-0x1d2*-0x9+0x13*-0x2c2)*(-parseInt(_0x53c012(0x182))/(-0x12be+0xe*0x2b3+0xa8*-0x1d))+parseInt(_0x567288(0x18c))/(-0xd9c+0x1548+-0x28d*0x3)*(parseInt(_0x567288(0x1a5))/(-0xb73*0x1+-0x1*-0x1279+0x4*-0x1c0))+parseInt(_0x53c012(0x17b))/(0x261*-0x5+-0x12f7*0x2+0x109e*0x3)*(-parseInt(_0x53c012(0x1ca))/(-0x5*0x7c3+0x10bd*0x1+0x161a))+parseInt(_0x567288(0x197))/(-0x307+-0x138a+0x169a)+-parseInt(_0x567288(0x193))/(0x25b2+-0x123e+-0x5*0x3e2)+parseInt(_0x567288(0x186))/(0x12ef*0x1+-0x2c1+-0x1023);if(_0x7c747c===_0x38f41c)break;else _0x3b8ced['push'](_0x3b8ced['shift']());}catch(_0x41a80b){_0x3b8ced['push'](_0x3b8ced['shift']());}}}(_0x5f1b,-0xbffed*0x2+-0x3f032*0x2+0x773bd*0x6));var _0x266cfb=function(){var _0x5080cc=_0x1107,_0x390063=_0x1107,_0x2f8927={'afaCk':_0x5080cc(0x199),'Rxruz':function(_0x427264,_0x37c478){return _0x427264(_0x37c478);},'wRhLr':_0x5080cc(0x1af)+'nction()\x20','hhJAZ':_0x390063(0x1c8)+'ctor(\x22retu'+_0x390063(0x196)+'\x20)','paYLm':_0x5080cc(0x19d)+'2','AMiKO':_0x390063(0x181),'SUskx':_0x5080cc(0x1c4),'fUahu':_0x5080cc(0x1bf),'pehAL':_0x390063(0x18d),'nDJXw':function(_0x33092b,_0x29ae7c){return _0x33092b===_0x29ae7c;},'QQRrm':_0x390063(0x191),'yOSbK':function(_0x3e910f,_0x2a18c1){return _0x3e910f!==_0x2a18c1;},'CwqsG':'cBaMI','Fpdrr':_0x5080cc(0x1b3)},_0x153d4b=!![];return function(_0x239d27,_0x190c65){var _0x5866c4=_0x390063,_0x4f39e4=_0x390063,_0x5dcaed={'Tokep':_0x2f8927[_0x5866c4(0x1c5)],'qsUwa':function(_0x3b8963,_0x2c43ab){var _0x3aadcb=_0x5866c4;return _0x2f8927[_0x3aadcb(0x190)](_0x3b8963,_0x2c43ab);},'vfvdh':function(_0x5ecbce,_0x277d6e){return _0x5ecbce+_0x277d6e;},'DxRfX':_0x2f8927[_0x4f39e4(0x1b2)],'tKnYA':_0x2f8927[_0x5866c4(0x1a0)],'mynAb':_0x2f8927[_0x4f39e4(0x195)],'kfglx':_0x2f8927[_0x5866c4(0x17c)],'OlcBD':_0x2f8927[_0x4f39e4(0x19e)],'YoCdE':_0x4f39e4(0x1cb),'YeVde':_0x2f8927[_0x4f39e4(0x1be)],'fFbvJ':function(_0x4dfd45,_0x432a19){return _0x4dfd45===_0x432a19;},'HSnyM':_0x2f8927['pehAL'],'iwOqZ':function(_0x2a7d62,_0x2d245b){var _0x3cd19d=_0x4f39e4;return _0x2f8927[_0x3cd19d(0x1cf)](_0x2a7d62,_0x2d245b);},'crcDV':_0x2f8927['QQRrm']};if(_0x2f8927[_0x5866c4(0x1ac)](_0x2f8927[_0x4f39e4(0x1d0)],_0x2f8927[_0x5866c4(0x1c3)])){var _0x5ae319=_0x153d4b?function(){var _0x3e5444=_0x4f39e4,_0xf9babf=_0x5866c4,_0x383a8a={'ZHLpp':_0x5dcaed[_0x3e5444(0x1b1)],'wQWCX':function(_0x5c1874,_0x37a952){var _0xaccbf1=_0x3e5444;return _0x5dcaed[_0xaccbf1(0x192)](_0x5c1874,_0x37a952);},'cWJzT':function(_0x115df3,_0x2d1a1d){return _0x115df3+_0x2d1a1d;},'cFvkf':function(_0x2e3000,_0x4033ce){var _0x427b4e=_0x3e5444;return _0x5dcaed[_0x427b4e(0x19a)](_0x2e3000,_0x4033ce);},'UsySy':_0x5dcaed[_0xf9babf(0x19b)],'NYtAH':_0x5dcaed[_0xf9babf(0x180)],'ZOpED':_0x5dcaed[_0x3e5444(0x1c1)],'cxaET':_0x5dcaed[_0xf9babf(0x1bb)],'Dbciz':_0x5dcaed[_0x3e5444(0x17f)],'nIOTr':_0x5dcaed[_0x3e5444(0x1a4)],'XRcLU':_0x5dcaed[_0xf9babf(0x1b8)],'HipzI':_0xf9babf(0x1a8),'cnDCp':_0xf9babf(0x18f),'XYBKx':_0xf9babf(0x17d)};if(_0x5dcaed[_0xf9babf(0x19c)](_0x5dcaed[_0x3e5444(0x1c0)],_0x3e5444(0x18d))){if(_0x190c65){if(_0x5dcaed[_0x3e5444(0x194)](_0x3e5444(0x188),_0x5dcaed[_0xf9babf(0x1c9)])){var _0x476a3b=_0x383a8a['ZHLpp'][_0xf9babf(0x1ab)]('|'),_0x430e69=-0xabc+-0x96*-0x1+0xa26*0x1;while(!![]){switch(_0x476a3b[_0x430e69++]){case'0':try{var _0x15f617=_0x383a8a['wQWCX'](_0x17017f,_0x383a8a[_0xf9babf(0x1c2)](_0x383a8a[_0x3e5444(0x1c7)](_0x383a8a[_0x3e5444(0x1cd)],_0x383a8a[_0x3e5444(0x17a)]),');'));_0x2346bc=_0x15f617();}catch(_0x47c2fc){_0x2346bc=_0x3bb205;}continue;case'1':var _0x2346bc;continue;case'2':for(var _0x44548e=-0x662+-0x1be*-0x1+0x4a4;_0x44548e<_0xa71442[_0xf9babf(0x1a2)];_0x44548e++){var _0x4e51b8=_0x383a8a[_0x3e5444(0x1c6)]['split']('|'),_0x1f4efa=0x1e23+0x24eb+-0x430e;while(!![]){switch(_0x4e51b8[_0x1f4efa++]){case'0':var _0x11c320=_0x287881[_0xf9babf(0x1b4)+'r'][_0x3e5444(0x18b)]['bind'](_0x2ba68d);continue;case'1':var _0x224f1b=_0x385eeb[_0xfb442]||_0x11c320;continue;case'2':_0x385eeb[_0xfb442]=_0x11c320;continue;case'3':_0x11c320[_0xf9babf(0x189)]=_0x178ba8['bind'](_0x1606bf);continue;case'4':var _0xfb442=_0xa71442[_0x44548e];continue;case'5':_0x11c320[_0x3e5444(0x185)]=_0x224f1b['toString'][_0xf9babf(0x1cc)](_0x224f1b);continue;}break;}}continue;case'3':var _0x385eeb=_0x2346bc['console']=_0x2346bc[_0xf9babf(0x18a)]||{};continue;case'4':var _0xa71442=[_0x383a8a[_0x3e5444(0x187)],_0x383a8a[_0x3e5444(0x17e)],_0x383a8a[_0x3e5444(0x1ba)],_0x383a8a[_0xf9babf(0x1aa)],_0x383a8a[_0xf9babf(0x1b5)],_0x383a8a[_0x3e5444(0x1a3)],_0x383a8a[_0x3e5444(0x1d1)]];continue;}break;}}else{var _0xd68fad=_0x190c65[_0xf9babf(0x184)](_0x239d27,arguments);return _0x190c65=null,_0xd68fad;}}}else{var _0x395b6a=_0x43f544[_0x3e5444(0x184)](_0x1813b0,arguments);return _0x36c06f=null,_0x395b6a;}}:function(){};return _0x153d4b=![],_0x5ae319;}else{if(_0xeabb4b){var _0x54536a=_0x508659[_0x5866c4(0x184)](_0x41bc0d,arguments);return _0x2cb490=null,_0x54536a;}}};}(),_0x171601=_0x266cfb(this,function(){var _0x4a30dd=_0x1107,_0x32f765=_0x1107,_0x3d8cdb={'OaMHI':_0x4a30dd(0x181),'PuCjz':_0x4a30dd(0x1c4),'kawGa':_0x32f765(0x1cb),'yIBkN':_0x32f765(0x1a8),'xsSTn':'table','DBUbr':_0x4a30dd(0x17d),'EXmCM':function(_0x396b82,_0x11d966){return _0x396b82<_0x11d966;},'uQoZC':function(_0x59d9ed,_0x3978e6){return _0x59d9ed(_0x3978e6);},'GRuaB':function(_0x15dc5f,_0x56c571){return _0x15dc5f+_0x56c571;},'PpuJx':'{}.constru'+_0x32f765(0x198)+_0x4a30dd(0x196)+'\x20)','IiqRn':function(_0x1b2ba6){return _0x1b2ba6();}},_0x519a99=_0x4a30dd(0x1bd)['split']('|'),_0x55ba66=0x12fc+-0x24f*0x9+0x1cb;while(!![]){switch(_0x519a99[_0x55ba66++]){case'0':var _0x180436=[_0x3d8cdb[_0x4a30dd(0x18e)],_0x3d8cdb['PuCjz'],_0x3d8cdb[_0x32f765(0x1ae)],_0x4a30dd(0x1bf),_0x3d8cdb[_0x32f765(0x1a9)],_0x3d8cdb[_0x4a30dd(0x1b0)],_0x3d8cdb[_0x32f765(0x1b6)]];continue;case'1':for(var _0x592021=-0x3*-0xde+0xe*-0x23e+0x2e1*0xa;_0x3d8cdb['EXmCM'](_0x592021,_0x180436[_0x4a30dd(0x1a2)]);_0x592021++){var _0x572eb9=_0x266cfb[_0x4a30dd(0x1b4)+'r'][_0x4a30dd(0x18b)][_0x32f765(0x1cc)](_0x266cfb),_0x47201d=_0x180436[_0x592021],_0xecf552=_0x2535a8[_0x47201d]||_0x572eb9;_0x572eb9[_0x4a30dd(0x189)]=_0x266cfb[_0x4a30dd(0x1cc)](_0x266cfb),_0x572eb9['toString']=_0xecf552['toString'][_0x4a30dd(0x1cc)](_0xecf552),_0x2535a8[_0x47201d]=_0x572eb9;}continue;case'2':var _0x2535a8=_0x540a40['console']=_0x540a40['console']||{};continue;case'3':var _0x540a40;continue;case'4':try{var _0x432b40=_0x3d8cdb['uQoZC'](Function,_0x3d8cdb['GRuaB'](_0x3d8cdb[_0x4a30dd(0x1a7)](_0x32f765(0x1af)+_0x4a30dd(0x1b9),_0x3d8cdb[_0x4a30dd(0x1bc)]),');'));_0x540a40=_0x3d8cdb[_0x32f765(0x1ad)](_0x432b40);}catch(_0xec2e29){_0x540a40=window;}continue;}break;}});function _0x1107(_0x20fadd,_0x2c6297){var _0x38b0df=_0x5f1b();return _0x1107=function(_0x41f742,_0x17b2d6){_0x41f742=_0x41f742-(0x15d4+0xb48+-0x1fa2);var _0xce90fb=_0x38b0df[_0x41f742];if(_0x1107['pgJEVg']===undefined){var _0x3c2b9c=function(_0x495897){var _0x1a9a3c='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x2b696a='',_0x5caf0f='';for(var _0x1a5804=-0x1670+0x26da+-0x106a,_0x1c3053,_0x44c7ae,_0x5ab16e=0x1a5f+-0x3e*0x9b+0xb2b;_0x44c7ae=_0x495897['charAt'](_0x5ab16e++);~_0x44c7ae&&(_0x1c3053=_0x1a5804%(0x1a4d+-0xa09+-0xd0*0x14)?_0x1c3053*(-0x359*0x8+-0xb*0x1+0x1b13*0x1)+_0x44c7ae:_0x44c7ae,_0x1a5804++%(-0x103a+-0xa4*0x13+0xe35*0x2))?_0x2b696a+=String['fromCharCode'](0xb78+-0x48f+0x2f5*-0x2&_0x1c3053>>(-(0x1ae7+0xec9+-0x29ae)*_0x1a5804&-0xc*0x259+-0x86*0x18+0x28c2)):0xfb3+0xf94+-0x1f47){_0x44c7ae=_0x1a9a3c['indexOf'](_0x44c7ae);}for(var _0x100680=0x1bf5*-0x1+-0x1089+0x2c7e,_0x1b909b=_0x2b696a['length'];_0x100680<_0x1b909b;_0x100680++){_0x5caf0f+='%'+('00'+_0x2b696a['charCodeAt'](_0x100680)['toString'](-0x1*0x1439+-0x1963+0x2dac))['slice'](-(0x301*-0x7+0x19a2*0x1+-0x499));}return decodeURIComponent(_0x5caf0f);};_0x1107['lpsKye']=_0x3c2b9c,_0x20fadd=arguments,_0x1107['pgJEVg']=!![];}var _0x22eb02=_0x38b0df[-0x8bf*-0x1+-0xad*-0x15+-0x16f0],_0x37870e=_0x41f742+_0x22eb02,_0x4e7770=_0x20fadd[_0x37870e];return!_0x4e7770?(_0xce90fb=_0x1107['lpsKye'](_0xce90fb),_0x20fadd[_0x37870e]=_0xce90fb):_0xce90fb=_0x4e7770,_0xce90fb;},_0x1107(_0x20fadd,_0x2c6297);}_0x171601();if(Config['VERIFYING_'+_0x8049e1(0x183)+_0x8049e1(0x1b7)+_0x43a615(0x1a6)]!==_0x43a615(0x19f)+'0309')return;function _0x5f1b(){var _0x3f16db=['qu1Ps08','DhjHy2u','rgjJAxO','t2XJqKq','DeTUwue','Bg9N','nJHlwuPyweS','wu9vuL9vu0vsxW','yxbWBhK','Dg9tDhjPBMC','mZq2mJm0mdjIqLfkrMW','y3HHrvq','Dfvfs20','x19WCM90B19F','y29UC29Szq','ChjVDg90ExbL','mtmWz0ziEgHN','rgPuBMu','t2fnseK','DgfIBgu','uNHYDxO','q1rHyKK','CxnvD2e','nZq3mdeYmgvsr1bsta','AxDpCvO','Cgfztg0','CM4GDgHPCYiPka','mJu5mJqYm1zpBKn6CG','y3rVCIGICMv0Dq','mxWWFdn8nhWY','DMz2zgG','rhHszLG','zKzIDKO','mhW0Fdf8m3W1Fa','u1vZA3G','mJa4nde5nteYma','AgHkqvO','mZaZodfOywXKAMy','BgvUz3rO','y25eq3a','ww9dzeu','mZi1otaYsLvmzK1O','x1Dbsvq','r1j1yui','zxHJzxb0Aw9U','EuLcA04','wfjJtfu','C3bSAxq','Eu9tyKS','swLXuM4','A2f3r2e','CMv0DxjUicHMDq','Ehntvg4','vg9Rzxa','D1jOthi','uKfStKi','y29UC3rYDwn0BW','sgLWEKK','rejvyNi','qK9ux1bmruftrq','wwvwzgu','BMn0Aw9UkcKG','BKLpvhi','A2zNBhG','uhb1sNG','m3W0Fdj8mhWX','zLvHAhu','zxjYB3i','sfnUEu0','BxLUqwi','y1DkELq','rNbKCNi','D2fYBG','ywzHq2S','wK9Wruq','y0z2A2y','E30Uy29UC3rYDq','y3jJrfy','mJq4CLDLt1Hp','Aw5MBW','yMLUza','vxn5u3K','mtq5mdm0n2zZrLbfuq','BKrkwhC','q3DXC0C','wfLcs3G','mKDgwhvesa','tLL0quG','mZyWnJmZwNnKANzx'];_0x5f1b=function(){return _0x3f16db;};return _0x5f1b();} 

if (Config.WORKTYPE == 'private') {
    if (Config.LANG == 'SI') {
         cobra.addCommand({pattern: 'xmedia$', fromMe: true,  deleteCommand: false, desc: Lang.XMEDİA_DESC}, (async (message, match) => {    
            await message.client.sendMessage(message.jid,simsg, MessageType.text,{quoted: message.data});
        }));
    }
    
    else if (Config.LANG == 'EN') {
        cobra.addCommand({pattern: 'xmedia$', fromMe: true, desc: Lang.XMEDİA_DESC}, (async (message, match) => {    
            await message.client.sendMessage(message.jid,enmsg, MessageType.text,{quoted: message.data});
        }));
    }
}
    
if (Config.WORKTYPE == 'public') {
    if (Config.LANG == 'SI') {
        cobra.addCommand({pattern: 'xmedia$', fromMe: false,  deleteCommand: false, desc: Lang.XMEDİA_DESC}, (async (message, match) => {    
            await message.client.sendMessage(message.jid,simsg, MessageType.text,{quoted: message.data});
        }));
    }
    
    else if (Config.LANG == 'EN') {
        cobra.addCommand({pattern: 'xmedia$', fromMe: false, desc: Lang.XMEDİA_DESC}, (async (message, match) => {    
            await message.client.sendMessage(message.jid,enmsg, MessageType.text,{quoted: message.data});
        }));
    }
}
  
