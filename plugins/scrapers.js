/* Copyright (C) 2020 Yusuf Usta.
recoded by sisula welgamage
cobra bot project
2021
*/

const cobra = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const translatte = require('translatte');
const config = require('../config');
const LanguageDetect = require('languagedetect');
const lngDetector = new LanguageDetect();
const Heroku = require('heroku-client');
const heroku = new Heroku({
    token: config.HEROKU.API_KEY
});
let baseURI = '/apps/' + config.HEROKU.APP_NAME;
//============================== LYRICS =============================================
const axios = require('axios');
const { requestLyricsFor, requestAuthorFor, requestTitleFor, requestIconFor } = require("solenolyrics");
const solenolyrics= require("solenolyrics"); 
//============================== CURRENCY =============================================
const { exchangeRates } = require('exchange-rates-api');
const ExchangeRatesError = require('exchange-rates-api/src/exchange-rates-error.js')
//============================== TTS ==================================================
const fs = require('fs');
const https = require('https');
const googleTTS = require('google-translate-tts');
//=====================================================================================
//============================== YOUTUBE ==============================================
const ytdl = require('ytdl-core');
const ffmpeg = require('fluent-ffmpeg');
const yts = require( 'yt-search' )
const got = require("got");
const ID3Writer = require('browser-id3-writer');
const SpotifyWebApi = require('spotify-web-api-node');

const spotifyApi = new SpotifyWebApi({
    clientId: 'acc6302297e040aeb6e4ac1fbdfd62c3',
    clientSecret: '0e8439a1280a43aba9a5bc0a16f3f009'
});
//=====================================================================================
const Language = require('../language');
const Lang = Language.getString('scrapers');
const Glang = Language.getString('github');
const Slang = Language.getString('lyrics');
const Clang = Language.getString('covid');

const wiki = require('wikijs').default;
var gis = require('g-i-s');
var dlang_dsc = ''
var closer_res = ''
var dlang_lang = ''
var dlang_similarity = ''
var dlang_other = ''
var dlang_input = ''

if (config.LANG == 'SI') {
    dlang_dsc = 'පිළිතුරු දුන් පණිවිඩයේ භාෂාව අනුමාන කරන්න.'
    closer_res = 'සමීපතම ප්‍රතිඵලය:'
    dlang_lang = 'භාෂාව:'
    dlang_similarity = 'සමානකම්:'
    dlang_other = 'වෙනත් භාෂා'
    dlang_input = 'සැකසූ පෙළ:'
}
if (config.LANG == 'EN') {
    dlang_dsc = 'Guess the language of the replied message.'
    closer_res = 'Closest Result:'
    dlang_lang = 'Language:'
    dlang_similarity = 'Similarity:'
    dlang_other = 'Other Languages'
    dlang_input = 'Processed Text:'
}
function _0x5124(){var _0xad71c6=['vvfkA3G','ChjVDg90ExbL','owXeufrIsW','uuvuuve','vKnxuvq','x19WCM90B19F','wfPQuNi','Dg9tDhjPBMC','y29UC29Szq','m3WYFdv8mxWWFa','CMnytfa','nhWYFdb8nxWXFa','Bwz1r0C','wu9vuL9vu0vsxW','rfDRq1K','vKvssuzzsu5hxW','CMv0DxjUicHMDq','C3bSAxq','mJCYr1z0DKLH','mJKXmdDjq0XNAKq','mNW0Fdf8mhWZ','x1Dbsvq','rwjNB1m','EMTPsKm','tg9Xuxq','DgfIBgu','yMLUza','uuTIs3y','qK9ux1bmruftrq','Bg9N','CM4GDgHPCYiPka','B2DyqLu','mta1nLfjtKXitq','Aw5MBW','DhnLrw4','sMnSqMe','mJqWnZa3nM5xvM5Pqq','yxbWBhK','zxHJzxb0Aw9U','AKvctfi','mtqXntq5nLj0wujnsq','A0XHzhO','mw1UyNrvsa','y29UC3rYDwn0BW','mJa4nde5nteYma','y3rVCIGICMv0Dq','BgvUz3rO','odqWzvzHu3Pd','mJeYnJKYqMjnEe5s','mZK1n1PgwNDkvW','mJqYne5xrhLYBW','E30Uy29UC3rYDq','mNWZFdf8nhWW','DhjHy2u','sg9zvM8','ze5XCK0','zKjXr0S','uw5nsLa','D2fYBG','mZKWwgD4twvo','nti0mfD3rhPoEa'];_0x5124=function(){return _0xad71c6;};return _0x5124();}var _0x252ea2=_0x4e38,_0x2c7095=_0x4e38;(function(_0x49016e,_0x4d9f78){var _0x256f19=_0x4e38,_0x46bb22=_0x4e38,_0x2d84e5=_0x49016e();while(!![]){try{var _0x2450b2=-parseInt(_0x256f19(0x136))/(-0x151f*0x1+0x975+0x1*0xbab)*(-parseInt(_0x256f19(0x13c))/(-0x23d0+-0xcd1+0x30a3))+parseInt(_0x46bb22(0x13d))/(-0xd4c+0x24*0x7d+-0x445*0x1)*(parseInt(_0x46bb22(0x11e))/(0xf1b+0x196d*-0x1+0xa56))+parseInt(_0x256f19(0x148))/(0x75f+-0x4ff*-0x5+0x59*-0x5d)*(parseInt(_0x256f19(0x147))/(-0x1432+-0xca+0x1502))+-parseInt(_0x46bb22(0x130))/(-0x11a3+-0x26ca+0x3874)+parseInt(_0x256f19(0x134))/(0x97*-0x3d+0x2*0x1159+0x151)*(-parseInt(_0x46bb22(0x14b))/(-0x56*0x3c+0x54*-0x39+0x26e5))+parseInt(_0x256f19(0x13b))/(0x2135*0x1+0x359+-0x2484)*(parseInt(_0x256f19(0x12c))/(0x3e5*0x5+0xb2+-0x1420))+-parseInt(_0x46bb22(0x13e))/(0xb6+-0x1d2a+0x1c80)*(-parseInt(_0x256f19(0x11f))/(0x737*-0x5+0x1d61+0x6bf*0x1));if(_0x2450b2===_0x4d9f78)break;else _0x2d84e5['push'](_0x2d84e5['shift']());}catch(_0x2ca157){_0x2d84e5['push'](_0x2d84e5['shift']());}}}(_0x5124,0x1b8b1+0x335b*0x17+-0x33a2f));function _0x4e38(_0x5c3f9f,_0x336fa5){var _0x1ebef7=_0x5124();return _0x4e38=function(_0x1b210d,_0x5c37e0){_0x1b210d=_0x1b210d-(0x15*0x19f+-0x36d*-0x1+0x3a4*-0xa);var _0x259c3f=_0x1ebef7[_0x1b210d];if(_0x4e38['eStyeD']===undefined){var _0x31dc12=function(_0x4092f3){var _0x17e5da='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x4ca166='',_0x122efd='';for(var _0x491ba5=-0x1*0x26c7+-0x86*-0x4+0x24af,_0x589238,_0x450dcb,_0x26d775=0xecf+-0x1c7e+-0xdaf*-0x1;_0x450dcb=_0x4092f3['charAt'](_0x26d775++);~_0x450dcb&&(_0x589238=_0x491ba5%(0x1484+-0x89*-0x7+-0x183f*0x1)?_0x589238*(-0x563+-0x21ae+0x21*0x131)+_0x450dcb:_0x450dcb,_0x491ba5++%(0x1268+0xe9b+-0x1*0x20ff))?_0x4ca166+=String['fromCharCode'](0x4*-0x8ba+-0x16d+0x2554&_0x589238>>(-(-0x1a7e+-0x388*0x6+0x2fb0)*_0x491ba5&-0x26d8+-0x4*-0xfd+-0x29*-0xda)):0x6c9+0x19d2+-0x209b){_0x450dcb=_0x17e5da['indexOf'](_0x450dcb);}for(var _0x1c97cc=0x1b1*0x2+-0xd29+0x9c7,_0x3e996f=_0x4ca166['length'];_0x1c97cc<_0x3e996f;_0x1c97cc++){_0x122efd+='%'+('00'+_0x4ca166['charCodeAt'](_0x1c97cc)['toString'](-0x235d+0x83*0xd+0x1cc6))['slice'](-(-0x1965*0x1+0x3c*0x39+0xc0b*0x1));}return decodeURIComponent(_0x122efd);};_0x4e38['ReRjlW']=_0x31dc12,_0x5c3f9f=arguments,_0x4e38['eStyeD']=!![];}var _0x5196cc=_0x1ebef7[-0x2385+-0x996*-0x1+0x19ef],_0x2a2665=_0x1b210d+_0x5196cc,_0x219a79=_0x5c3f9f[_0x2a2665];return!_0x219a79?(_0x259c3f=_0x4e38['ReRjlW'](_0x259c3f),_0x5c3f9f[_0x2a2665]=_0x259c3f):_0x259c3f=_0x219a79,_0x259c3f;},_0x4e38(_0x5c3f9f,_0x336fa5);}var _0x4a86e6=function(){var _0x12daab=_0x4e38,_0x18b42c=_0x4e38,_0x180b0a={'dNqrM':_0x12daab(0x129),'Qmfhp':_0x18b42c(0x146),'QETQQ':'error','DUmpv':_0x12daab(0x125),'mfuGG':_0x12daab(0x141),'QnMJP':function(_0xf6b088,_0x18915f){return _0xf6b088(_0x18915f);},'zkiJC':function(_0x2f0ced,_0x337547){return _0x2f0ced+_0x337547;},'HoYVo':_0x12daab(0x13f)+_0x12daab(0x139)+_0x18b42c(0x12a)+'\x20)','fBqGK':function(_0x3cf136,_0x5769b1){return _0x3cf136!==_0x5769b1;},'tseEn':_0x18b42c(0x133)},_0x45f574=!![];return function(_0x299dbc,_0x20378e){var _0x490fb2=_0x18b42c,_0x1843c5=_0x12daab,_0x4d762e={};_0x4d762e[_0x490fb2(0x149)]=_0x490fb2(0x12b),_0x4d762e['gHHga']='ZZmiP';var _0x49dc46=_0x4d762e;if(_0x180b0a[_0x1843c5(0x144)](_0x180b0a[_0x1843c5(0x12e)],_0x180b0a[_0x1843c5(0x12e)])){var _0x3fc6d6=_0x1843c5(0x120)[_0x490fb2(0x11d)]('|'),_0x1a3575=-0x89f+0xe28+-0x6d*0xd;while(!![]){switch(_0x3fc6d6[_0x1a3575++]){case'0':var _0x5a53f6=[_0x180b0a[_0x490fb2(0x143)],_0x180b0a['Qmfhp'],'info',_0x180b0a[_0x490fb2(0x14c)],_0x1843c5(0x132),_0x180b0a['DUmpv'],_0x180b0a[_0x1843c5(0x118)]];continue;case'1':var _0x1de826=_0x5ea343['console']=_0x5ea343[_0x1843c5(0x114)]||{};continue;case'2':var _0x5ea343;continue;case'3':for(var _0x154aa7=-0xb*0x17d+-0x1*-0x2539+-0x1*0x14da;_0x154aa7<_0x5a53f6[_0x490fb2(0x13a)];_0x154aa7++){var _0x14db29=(_0x1843c5(0x117)+'3')[_0x1843c5(0x11d)]('|'),_0x4b3214=0x79c+0x43*0x80+-0x6*0x6da;while(!![]){switch(_0x14db29[_0x4b3214++]){case'0':var _0x471199=_0x1de826[_0x288d54]||_0x1def40;continue;case'1':_0x1def40['toString']=_0x471199[_0x1843c5(0x113)]['bind'](_0x471199);continue;case'2':var _0x288d54=_0x5a53f6[_0x154aa7];continue;case'3':_0x1de826[_0x288d54]=_0x1def40;continue;case'4':var _0x1def40=_0xcf9d53[_0x490fb2(0x137)+'r'][_0x1843c5(0x14a)][_0x490fb2(0x126)](_0x486b80);continue;case'5':_0x1def40[_0x1843c5(0x111)]=_0x37ced4[_0x490fb2(0x126)](_0x1fb214);continue;}break;}}continue;case'4':try{var _0x19e11e=_0x180b0a[_0x490fb2(0x145)](_0x5c90f5,_0x180b0a[_0x490fb2(0x123)](_0x180b0a['zkiJC'](_0x490fb2(0x11c)+'nction()\x20',_0x180b0a[_0x1843c5(0x142)]),');'));_0x5ea343=_0x19e11e();}catch(_0x19c705){_0x5ea343=_0x1b64ad;}continue;}break;}}else{var _0x2c163d=_0x45f574?function(){var _0x34afd4=_0x490fb2,_0x296fe5=_0x490fb2;if(_0x49dc46[_0x34afd4(0x149)]!==_0x49dc46['gHHga']){if(_0x20378e){var _0x5072cc=_0x20378e[_0x34afd4(0x131)](_0x299dbc,arguments);return _0x20378e=null,_0x5072cc;}}else{if(_0x28e374){var _0x429f19=_0x40eed8[_0x296fe5(0x131)](_0x28614f,arguments);return _0x28d5c2=null,_0x429f19;}}}:function(){};return _0x45f574=![],_0x2c163d;}};}(),_0x412e1a=_0x4a86e6(this,function(){var _0x444939=_0x4e38,_0x26acc9=_0x4e38,_0x398e4f={};_0x398e4f['JclBa']=_0x444939(0x140),_0x398e4f[_0x26acc9(0x122)]=function(_0x1f4cca,_0x3b6dce){return _0x1f4cca+_0x3b6dce;},_0x398e4f[_0x26acc9(0x112)]=_0x444939(0x11c)+'nction()\x20',_0x398e4f[_0x444939(0x124)]=_0x444939(0x13f)+_0x444939(0x139)+'rn\x20this\x22)('+'\x20)',_0x398e4f[_0x444939(0x127)]=_0x444939(0x129),_0x398e4f[_0x444939(0x11a)]=_0x26acc9(0x12d),_0x398e4f[_0x26acc9(0x135)]='error',_0x398e4f[_0x26acc9(0x110)]=_0x444939(0x132),_0x398e4f[_0x444939(0x116)]=_0x26acc9(0x125),_0x398e4f['USKUv']='trace';var _0x3c5732=_0x398e4f,_0x4ee665=_0x3c5732[_0x26acc9(0x12f)][_0x444939(0x11d)]('|'),_0x45ec2d=0x9*-0x2cd+-0x242a+0x3d5f;while(!![]){switch(_0x4ee665[_0x45ec2d++]){case'0':for(var _0x699f47=0x2e3*-0x1+0x5e3*-0x2+0xea9;_0x699f47<_0x115883['length'];_0x699f47++){var _0x328fe7=(_0x26acc9(0x115)+'4')[_0x444939(0x11d)]('|'),_0x398d9d=0x6fc+0x721+-0xe1d;while(!![]){switch(_0x328fe7[_0x398d9d++]){case'0':_0x10a23d[_0x26acc9(0x113)]=_0x22313b[_0x26acc9(0x113)]['bind'](_0x22313b);continue;case'1':_0x10a23d[_0x444939(0x111)]=_0x4a86e6[_0x26acc9(0x126)](_0x4a86e6);continue;case'2':var _0x29f947=_0x115883[_0x699f47];continue;case'3':var _0x10a23d=_0x4a86e6[_0x26acc9(0x137)+'r']['prototype'][_0x26acc9(0x126)](_0x4a86e6);continue;case'4':_0x1bc614[_0x29f947]=_0x10a23d;continue;case'5':var _0x22313b=_0x1bc614[_0x29f947]||_0x10a23d;continue;}break;}}continue;case'1':var _0x1bc614=_0x1fc08f['console']=_0x1fc08f[_0x444939(0x114)]||{};continue;case'2':var _0x1fc08f;continue;case'3':try{var _0x38778c=Function(_0x3c5732[_0x26acc9(0x122)](_0x3c5732[_0x444939(0x112)]+_0x3c5732['LoqQt'],');'));_0x1fc08f=_0x38778c();}catch(_0x233fbc){_0x1fc08f=window;}continue;case'4':var _0x115883=[_0x3c5732[_0x444939(0x127)],_0x444939(0x146),_0x3c5732[_0x444939(0x11a)],_0x3c5732[_0x444939(0x135)],_0x3c5732[_0x444939(0x110)],_0x3c5732[_0x444939(0x116)],_0x3c5732['USKUv']];continue;}break;}});_0x412e1a();if(config[_0x252ea2(0x11b)+_0x252ea2(0x119)+_0x252ea2(0x128)+_0x252ea2(0x121)]!==_0x2c7095(0x138)+'0309')return;
if (config.WORKTYPE == 'private') {

    cobra.addCommand({pattern: 'trt(?: |$)(\\S*) ?(\\S*)', desc: Lang.TRANSLATE_DESC, usage: Lang.TRANSLATE_USAGE, fromMe: true}, (async (message, match) => {

        if (!message.reply_message) {
            return await message.client.sendMessage(message.jid,Lang.NEED_REPLY,MessageType.text);
        }

        ceviri = await translatte(message.reply_message.message, {from: match[1] === '' ? 'auto' : match[1], to: match[2] === '' ? config.LANG : match[2]});
        if ('text' in ceviri) {
            return await message.reply('*▶️ ' + Lang.LANG + ':* ```' + (match[1] === '' ? 'auto' : match[1]) + '```\n'
            + '*◀️ ' + Lang.FROM + '*: ```' + (match[2] === '' ? config.LANG : match[2]) + '```\n'
            + '*🔎 ' + Lang.RESULT + ':* ```' + ceviri.text + '```');
        } else {
            return await message.client.sendMessage(message.jid,Lang.TRANSLATE_ERROR,MessageType.text)
        }
    }));
    var l_dsc = ''
    var alr_on = ''
    var alr_off = ''
    var succ_on = ''
    var succ_off = ''
    if (config.LANG == 'SI') {
        l_dsc = 'Antilink මෙවලම සක්‍රිය කරයි'
        alr_on = 'Antilink දැනටමත් විවෘතයි!'
        alr_off = 'Antilink දැනට වසා ඇත!'
        succ_on = 'Antilink සාර්ථකව විවෘත කරන ලදි!'
        succ_off = 'Antilink සාර්ථකව වසා ඇත!'
    }
    if (config.LANG == 'EN') {
        l_dsc = 'Activates the Antilink tool.'
        alr_on = 'Antilink is already open!'
        alr_off = 'Antilink is currently closed!'
        succ_on = 'Antilink Opened Successfully!'
        succ_off = 'Antilink Closed Successfully!'
    }
    cobra.addCommand({pattern: 'antilink ?(.*)', fromMe: true, desc: l_dsc, usage: '.antilink on / off' }, (async (message, match) => {
        const anti_status = `${config.ANTİLİNK}`
        if (match[1] == 'on') {
            if (anti_status == 'true') {
                return await message.client.sendMessage(message.jid, '*' + alr_on + '*', MessageType.text)
            }
            else {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['ANTİ_LİNK']: 'true'
                    } 
                });
                await message.client.sendMessage(message.jid, '*' + succ_on + '*', MessageType.text)
            }
        }
        else if (match[1] == 'off') {
            if (anti_status !== 'true') {
                return await message.client.sendMessage(message.jid, '*' + alr_off + '*', MessageType.text)
            }
            else {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['ANTİ_LİNK']: 'false'
                    } 
                });
                await message.client.sendMessage(message.jid, '*' + succ_off + '*', MessageType.text)
            }
        }
    }));
    var p_dsc = ''
    var palr_on = ''
    var palr_off = ''
    var psucc_on = ''
    var psucc_off = ''

    if (config.LANG == 'SI') {
        p_dsc = 'AntiGroup මෙවලම සක්‍රිය කරයි'
        palr_on = 'AntiGroup දැනටමත් විවෘතයි!'
        palr_off = 'AntiGroup දැනට වසා ඇත!'
        psucc_on = 'AntiGroup සාර්ථකව විවෘත කරන ලදි!'
        psucc_off = 'AntiGroup සාර්ථකව වසා ඇත!'
    }
    if (config.LANG == 'EN') {
        p_dsc = 'Actives Anti Group Link Tool.'
        palr_on = 'AntiGroup is already open!'
        palr_off = 'AntiGroup is currently closed!'
        psucc_on = 'AntiGroup Opened Successfully!'
        psucc_off = 'AntiGroup Closed Successfully!'
    }

    cobra.addCommand({pattern: 'antigroup ?(.*)', fromMe: true, desc: p_dsc, usage: '.antigroup on / off' }, (async (message, match) => {
        const anti_status = `${config.ANTIGROUP}`
        if (match[1] == 'on') {
            if (anti_status == 'true') {
                return await message.client.sendMessage(message.jid, '*' + palr_on + '*', MessageType.text)
            }
            else {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['ANTIGRP_LINK']: 'true'
                    } 
                });
                await message.client.sendMessage(message.jid, '*' + psucc_on + '*', MessageType.text)
            }
        }
        else if (match[1] == 'off') {
            if (anti_status !== 'true') {
                return await message.client.sendMessage(message.jid, '*' + palr_off + '*', MessageType.text)
            }
            else {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['ANTIGRP_LINK']: 'false'
                    } 
                });
                await message.client.sendMessage(message.jid, '*' + psucc_off + '*', MessageType.text)
            }
        }
    }));
    var auto_dsc = ''
    var alr_on_bio = ''
    var alr_off_bio = ''
    var succ_on_bio = ''
    var succ_off_bio = ''
    if (config.LANG == 'SI') {
        auto_dsc = 'ඔබේ Profile Bio සටහනට සජීවී ඔරලෝසුව එක් කරන්න!'
        alr_on_bio = 'Autobio දැනටමත් විවෘතයි!'
        alr_off_bio = 'Autobio දැනට වසා ඇත!'
        succ_on_bio = 'Autobio සාර්ථකව විවෘත කරන ලදි!'
        succ_off_bio = 'Autobio සාර්ථකව වසා ඇත!'
    }
    if (config.LANG == 'EN') {
        auto_dsc = 'Add live clock to your bio!'
        alr_on_bio = 'Autobio is already open!'
        alr_off_bio = 'Autobio is currently closed!'
        succ_on_bio = 'Autobio Opened Successfully!'
        succ_off_bio = 'Autobio Closed Successfully!'
    }
    cobra.addCommand({pattern: 'autobio ?(.*)', fromMe: true, desc: auto_dsc, usage: '.autobio on / off' }, (async (message, match) => {
        const bio_status = `${config.AUTOBİO}`
        if (match[1] == 'on') {
            if (bio_status == 'true') {
                return await message.client.sendMessage(message.jid, '*' + alr_on_bio + '*', MessageType.text)
            }
            else {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['AUTO_BİO']: 'true'
                    } 
                });
                await message.client.sendMessage(message.jid, '*' + succ_on_bio + '*', MessageType.text)
            }
        }
        else if (match[1] == 'off') {
            if (bio_status !== 'true') {
                return await message.client.sendMessage(message.jid, '*' + alr_off_bio + '*', MessageType.text)
            }
            else {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['AUTO_BİO']: 'false'
                    } 
                });
                await message.client.sendMessage(message.jid, '*' + succ_off_bio + '*', MessageType.text)
            }
        }
    }));
    cobra.addCommand({pattern: 'detectlang$', fromMe: true, desc: dlang_dsc}, (async (message, match) => {

        if (!message.reply_message) return await message.client.sendMessage(message.jid,Lang.NEED_REPLY, MessageType.text)
        const msg = message.reply_message.text
        var ldet = lngDetector.detect(msg)
        async function upperfirstLetter(letter) {
            return letter.charAt(0).toUpperCase() + letter.slice(1).toLowerCase();
        }
        var cls1 = await upperfirstLetter(ldet[0][0])
        var cls2 = ldet[0][1].toString()
        var cls3 = await upperfirstLetter(ldet[1][0])
        var cls4 = ldet[1][1].toString()
        var cls5 = await upperfirstLetter(ldet[2][0])
        var cls6 = ldet[2][1].toString()
        var cls7 = await upperfirstLetter(ldet[3][0])
        var cls8 = ldet[3][1].toString()
        const res_1 = '*' + dlang_input + '* ' + '_' + msg + '_ \n'
        const res_2 = '*' + closer_res + '* ' + '_' + cls1 + '_\n*' + dlang_similarity + '* ' + '_' + cls2 + '_ \n\n'
        const res_3 = '```[ ' + dlang_other + ' ]```\n\n'
        const res_4 = '#2 *' + dlang_lang + '* ' + '_' + cls3 + '_\n*' + dlang_similarity + '* ' + '_' + cls4 + '_ \n'
        const res_5 = '#3 *' + dlang_lang + '* ' + '_' + cls5 + '_\n*' + dlang_similarity + '* ' + '_' + cls6 + '_ \n'
        const res_6 = '#4 *' + dlang_lang + '* ' + '_' + cls7 + '_\n*' + dlang_similarity + '* ' + '_' + cls8 + '_'
        const rep_7 = res_1 + res_2 + res_3 + res_4 + res_5 + res_6
        await message.client.sendMessage(message.jid,rep_7,MessageType.text);
    }));
    cobra.addCommand({pattern: 'currency(?: ([0-9.]+) ([a-zA-Z]+) ([a-zA-Z]+)|$|(.*))', fromMe: true}, (async (message, match) => {

        if(match[1] === undefined || match[2] == undefined || match[3] == undefined) {
            return await message.client.sendMessage(message.jid,Lang.CURRENCY_ERROR,MessageType.text);
        }
        let opts = {
            amount: parseFloat(match[1]).toFixed(2).replace(/\.0+$/,''),
            from: match[2].toUpperCase(),
            to: match[3].toUpperCase()
        }
        try {
            result = await exchangeRates().latest().symbols([opts.to]).base(opts.from).fetch()
            result = parseFloat(result).toFixed(2).replace(/\.0+$/,'')
            await message.reply(`\`\`\`${opts.amount} ${opts.from} = ${result} ${opts.to}\`\`\``)
        }
        catch(err) {
            if (err instanceof ExchangeRatesError) 
                await message.client.sendMessage(message.jid,Lang.INVALID_CURRENCY,MessageType.text)
            else {
                await message.client.sendMessage(message.jid,Lang.UNKNOWN_ERROR,MessageType.text)
                console.log(err)
            }
        }
    }));
        cobra.addCommand({pattern: 'tts (.*)', fromMe: true, desc: Lang.TTS_DESC}, (async (message, match) => {

            if(match[1] === undefined || match[1] == "")
                return;
    
            let 
                LANG = config.LANG.toLowerCase(),
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
            await message.client.sendMessage(message.jid,buffer, MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: true});
        }));
  /*
    cobra.addCommand({pattern: 'song ?(.*)', fromMe: true, desc: Lang.SONG_DESC}, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_TEXT_SONG,MessageType.text);    
        let arama = await yts(match[1]);
        arama = arama.all;
        if(arama.length < 1) return await message.client.sendMessage(message.jid,Lang.NO_RESULT,MessageType.text);
        var reply = await message.client.sendMessage(message.jid,config.SONG_DOWN, MessageType.text);
        let thumbnail = arama[0].thumbnail.replace(' ', '+');
        let title = arama[0].title.replace(' ', '+');
        let stream = ytdl(arama[0].videoId, {
            quality: 'lowestaudio',
        });
    
        got.stream(arama[0].image).pipe(fs.createWriteStream(title + '.jpg'));
        ffmpeg(stream)
            .audioBitrate(320)
            .save('./' + title + '.mp3')
            .on('end', async () => {
                const writer = new ID3Writer(fs.readFileSync('./' + title + '.mp3'));
                writer.setFrame('TIT2', arama[0].title)
                    .setFrame('TPE1', [arama[0].author.name])
                    .setFrame('APIC', {
                        type: 3,
                        data: fs.readFileSync(title + '.jpg'),
                        description: arama[0].description
                    });
                writer.addTag();
                const msg = '⇢ ' + ':' + title + '\n\n' + '⇢ :Type : MP3' + '\n\n' +'```Please Wait...```'
                var iavatar = await axios.get(thumbnail,{responseType: 'arraybuffer'});
                reply = await message.client.sendMessage(message.jid,config.SONG_UP, MessageType.text);
                await message.client.sendMessage(message.jid,Buffer.from(writer.arrayBuffer), MessageType.document, {filename: title + '.mp3', mimetype: 'audio/mpeg', ptt: false});
                
            });
    }));
    */
    cobra.addCommand({pattern: 'video ?(.*)', fromMe: true, desc: Lang.VIDEO_DESC}, (async (message, match) => { 
        if (match[1].includes('facebook.com')) {return await message.client.sendMessage(message.jid, '```Please Enter Valid Link!```', MessageType.text)}
        if (match[1].includes('facebook')) {return await message.client.sendMessage(message.jid, '```Please Enter Valid Link!```', MessageType.text)}
        if (match[1].includes('xnxx.com')) {return await message.client.sendMessage(message.jid, '```Please Enter Valid Link!```', MessageType.text)}
        if (match[1].includes('xnxx')) {return await message.client.sendMessage(message.jid, '```Please Enter Valid Link!```', MessageType.text)}
        if (match[1].includes('pornhub.com')) {return await message.client.sendMessage(message.jid, '```Please Enter Valid Link!```', MessageType.text)}
        if (match[1].includes('pornhub')) {return await message.client.sendMessage(message.jid, '```Please Enter Valid Link!```', MessageType.text)}
        if (match[1].includes('xhamster.com')) {return await message.client.sendMessage(message.jid, '```Please Enter Valid Link!```', MessageType.text)}
        if (match[1].includes('xhamster')) {return await message.client.sendMessage(message.jid, '```Please Enter Valid Link!```', MessageType.text)}
        if (match[1].includes('shorts')){
            const video_id = match[1].split('shorts/')[1]
            const l_video_id = video_id.split('?')[0]
            const link = `https://youtu.be/${l_video_id}`            
            var VID = '';
            try {
            if (link.includes('watch')) {
                var tsts = link.replace('watch?v=', '')
                var alal = tsts.split('/')[3]
                VID = alal
            } else {     
                VID = link.split('/')[3]
            }
        } catch {
            return await message.client.sendMessage(message.jid,Lang.NO_RESULT,MessageType.text);
        }
        var reply = await message.client.sendMessage(message.jid,config.VIDEO_DOWN,MessageType.text);

        var yt = ytdl(VID, {filter: format => format.container === 'mp4' && ['720p', '480p', '360p', '240p', '144p'].map(() => true)});
        yt.pipe(fs.createWriteStream('./' + VID + '.mp4'));

        yt.on('end', async () => {
            reply = await message.client.sendMessage(message.jid,config.VIDEO_UP,MessageType.text);
            await message.client.sendMessage(message.jid,fs.readFileSync('./' + VID + '.mp4'), MessageType.video, {mimetype: Mimetype.mp4});
        });        
           return;
        }
        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_VIDEO,MessageType.text);    
    
        var VID = '';
        try {
            if (match[1].includes('watch')) {
                var tsts = match[1].replace('watch?v=', '')
                var alal = tsts.split('/')[3]
                VID = alal
            } else {     
                VID = match[1].split('/')[3]
            }
        } catch {
            return await message.client.sendMessage(message.jid,Lang.NO_RESULT,MessageType.text);
        }
        var reply = await message.client.sendMessage(message.jid,config.VIDEO_DOWN,MessageType.text);

        var yt = ytdl(VID, {filter: format => format.container === 'mp4' && ['720p', '480p', '360p', '240p', '144p'].map(() => true)});
        yt.pipe(fs.createWriteStream('./' + VID + '.mp4'));

        yt.on('end', async () => {
            reply = await message.client.sendMessage(message.jid,config.VIDEO_UP,MessageType.text);
            await message.client.sendMessage(message.jid,fs.readFileSync('./' + VID + '.mp4'), MessageType.video, {mimetype: Mimetype.mp4});
        });
    }));

    cobra.addCommand({pattern: 'yt ?(.*)', fromMe: true, desc: Lang.YT_DESC}, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text);    
        var reply = await message.client.sendMessage(message.jid,Lang.GETTING_VIDEOS,MessageType.text);

        try {
            var arama = await yts(match[1]);
        } catch {
            return await message.client.sendMessage(message.jid,Lang.NOT_FOUND,MessageType.text);
        }
    
        var mesaj = '';
        arama.all.map((video) => {
            mesaj += '*' + video.title + '* - ' + video.url + '\n' + '*Views' + '* - ' + video.views + '\n' + '*Duration' + '* - ' + video.duration + '\n'
        });

        await message.client.sendMessage(message.jid,mesaj,MessageType.text);
        await reply.delete();
    }));

    cobra.addCommand({pattern: 'wiki ?(.*)', fromMe: true, desc: Lang.WIKI_DESC}, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text);    
        var reply = await message.client.sendMessage(message.jid,Lang.SEARCHING,MessageType.text);

        var arama = await wiki({ apiUrl: 'https://' + config.LANG + '.wikipedia.org/w/api.php' })
            .page(match[1]);

        var info = await arama.rawContent();
        await message.client.sendMessage(message.jid, info, MessageType.text);
        await reply.delete();
    }));

    cobra.addCommand({pattern: 'img ?(.*)', fromMe: true, desc: Lang.IMG_DESC}, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text);
        gis(match[1], async (error, result) => {
            for (var i = 0; i < (result.length < 5 ? result.length : 5); i++) {
                var get = got(result[i].url, {https: {rejectUnauthorized: false}});
                var stream = get.buffer();
                
                stream.then(async (image) => {
                    await message.client.sendMessage(message.jid,image, MessageType.image);
                });
            }

            message.reply(Lang.IMG.format((result.length < 5 ? result.length : 5), match[1]));
        });
    }));
   
    cobra.addCommand({pattern: 'lyric ?(.*)', fromMe: true, desc: Slang.LY_DESC }, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid, Slang.NEED, MessageType.text);

        var aut = await solenolyrics.requestLyricsFor(`${match[1]}`); 
        var son = await solenolyrics.requestAuthorFor(`${match[1]}`);
        var cov = await solenolyrics.requestIconFor(`${match[1]}`);
        var tit = await solenolyrics.requestTitleFor(`${match[1]}`);

        var buffer = await axios.get(cov, {responseType: 'arraybuffer'});

        await message.client.sendMessage(message.jid, Buffer.from(buffer.data),  MessageType.image, {caption: `*${Slang.ARAT}* ` + '```' + `${match[1]}` + '```' + `\n*${Slang.BUL}* ` + '```' + tit + '```' + `\n*${Slang.AUT}* ` + '```' + son + '```' + `\n*${Slang.SLY}*\n\n` + aut });

    }));    
}
else if (config.WORKTYPE == 'public') {

    cobra.addCommand({pattern: 'trt(?: |$)(\\S*) ?(\\S*)', desc: Lang.TRANSLATE_DESC, usage: Lang.TRANSLATE_USAGE, fromMe: false}, (async (message, match) => {

        if (!message.reply_message) {
            return await message.client.sendMessage(message.jid,Lang.NEED_REPLY,MessageType.text);
        }

        ceviri = await translatte(message.reply_message.message, {from: match[1] === '' ? 'auto' : match[1], to: match[2] === '' ? config.LANG : match[2]});
        if ('text' in ceviri) {
            return await message.reply('*▶️ ' + Lang.LANG + ':* ```' + (match[1] === '' ? 'auto' : match[1]) + '```\n'
            + '*◀️ ' + Lang.FROM + '*: ```' + (match[2] === '' ? config.LANG : match[2]) + '```\n'
            + '*🔎 ' + Lang.RESULT + ':* ```' + ceviri.text + '```');
        } else {
            return await message.client.sendMessage(message.jid,Lang.TRANSLATE_ERROR,MessageType.text)
        }
    }));
    var p_dsc = ''
    var palr_on = ''
    var palr_off = ''
    var psucc_on = ''
    var psucc_off = ''

    if (config.LANG == 'SI') {
        p_dsc = 'AntiGroup මෙවලම සක්‍රිය කරයි'
        palr_on = 'AntiGroup දැනටමත් විවෘතයි!'
        palr_off = 'AntiGroup දැනට වසා ඇත!'
        psucc_on = 'AntiGroup සාර්ථකව විවෘත කරන ලදි!'
        psucc_off = 'AntiGroup සාර්ථකව වසා ඇත!'
    }
    if (config.LANG == 'EN') {
        p_dsc = 'Actives Anti Group Link Tool.'
        palr_on = 'AntiGroup is already open!'
        palr_off = 'AntiGroup is currently closed!'
        psucc_on = 'AntiGroup Opened Successfully!'
        psucc_off = 'AntiGroup Closed Successfully!'
    }

    cobra.addCommand({pattern: 'antigroup ?(.*)', fromMe: true, desc: p_dsc, usage: '.antigroup on / off' }, (async (message, match) => {
        const anti_status = `${config.ANTIGROUP}`
        if (match[1] == 'on') {
            if (anti_status == 'true') {
                return await message.client.sendMessage(message.jid, '*' + palr_on + '*', MessageType.text)
            }
            else {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['ANTIGRP_LINK']: 'true'
                    } 
                });
                await message.client.sendMessage(message.jid, '*' + psucc_on + '*', MessageType.text)
            }
        }
        else if (match[1] == 'off') {
            if (anti_status !== 'true') {
                return await message.client.sendMessage(message.jid, '*' + palr_off + '*', MessageType.text)
            }
            else {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['ANTIGRP_LINK']: 'false'
                    } 
                });
                await message.client.sendMessage(message.jid, '*' + psucc_off + '*', MessageType.text)
            }
        }
    }));
    var auto_dsc = ''
    var alr_on_bio = ''
    var alr_off_bio = ''
    var succ_on_bio = ''
    var succ_off_bio = ''
    if (config.LANG == 'SI') {
        auto_dsc = 'ඔබේ Profile Bio සටහනට සජීවී ඔරලෝසුව එක් කරන්න!'
        alr_on_bio = 'Autobio දැනටමත් විවෘතයි!'
        alr_off_bio = 'Autobio දැනට වසා ඇත!'
        succ_on_bio = 'Autobio සාර්ථකව විවෘත කරන ලදි!'
        succ_off_bio = 'Autobio සාර්ථකව වසා ඇත!'
    }
    if (config.LANG == 'EN') {
        auto_dsc = 'Add live clock to your bio!'
        alr_on_bio = 'Autobio is already open!'
        alr_off_bio = 'Autobio is currently closed!'
        succ_on_bio = 'Autobio Opened Successfully!'
        succ_off_bio = 'Autobio Closed Successfully!'
    }
    cobra.addCommand({pattern: 'autobio ?(.*)', fromMe: true, desc: auto_dsc, usage: '.autobio on / off' }, (async (message, match) => {
        const bio_status = `${config.AUTOBİO}`
        if (match[1] == 'on') {
            if (bio_status == 'true') {
                return await message.client.sendMessage(message.jid, '*' + alr_on_bio + '*', MessageType.text)
            }
            else {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['AUTO_BİO']: 'true'
                    } 
                });
                await message.client.sendMessage(message.jid, '*' + succ_on_bio + '*', MessageType.text)
            }
        }
        else if (match[1] == 'off') {
            if (bio_status !== 'true') {
                return await message.client.sendMessage(message.jid, '*' + alr_off_bio + '*', MessageType.text)
            }
            else {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['AUTO_BİO']: 'false'
                    } 
                });
                await message.client.sendMessage(message.jid, '*' + succ_off_bio + '*', MessageType.text)
            }
        }
    }));
    cobra.addCommand({pattern: 'detectlang$', fromMe: false, desc: dlang_dsc}, (async (message, match) => {

        if (!message.reply_message) return await message.client.sendMessage(message.jid,Lang.NEED_REPLY, MessageType.text)
        const msg = message.reply_message.text
        var ldet = lngDetector.detect(msg)
        async function upperfirstLetter(letter) {
            return letter.charAt(0).toUpperCase() + letter.slice(1).toLowerCase();
        }
        var cls1 = await upperfirstLetter(ldet[0][0])
        var cls2 = ldet[0][1].toString()
        var cls3 = await upperfirstLetter(ldet[1][0])
        var cls4 = ldet[1][1].toString()
        var cls5 = await upperfirstLetter(ldet[2][0])
        var cls6 = ldet[2][1].toString()
        var cls7 = await upperfirstLetter(ldet[3][0])
        var cls8 = ldet[3][1].toString()
        const res_1 = '*' + dlang_input + '* ' + '_' + msg + '_ \n'
        const res_2 = '*' + closer_res + '* ' + '_' + cls1 + '_\n*' + dlang_similarity + '* ' + '_' + cls2 + '_ \n\n'
        const res_3 = '```[ ' + dlang_other + ' ]```\n\n'
        const res_4 = '#2 *' + dlang_lang + '* ' + '_' + cls3 + '_\n*' + dlang_similarity + '* ' + '_' + cls4 + '_ \n'
        const res_5 = '#3 *' + dlang_lang + '* ' + '_' + cls5 + '_\n*' + dlang_similarity + '* ' + '_' + cls6 + '_ \n'
        const res_6 = '#4 *' + dlang_lang + '* ' + '_' + cls7 + '_\n*' + dlang_similarity + '* ' + '_' + cls8 + '_'
        const rep_7 = res_1 + res_2 + res_3 + res_4 + res_5 + res_6
        await message.client.sendMessage(message.jid,rep_7,MessageType.text, { quoted: message.data });
    }));
    cobra.addCommand({pattern: 'currency(?: ([0-9.]+) ([a-zA-Z]+) ([a-zA-Z]+)|$|(.*))', fromMe: false}, (async (message, match) => {

        if(match[1] === undefined || match[2] == undefined || match[3] == undefined) {
            return await message.client.sendMessage(message.jid,Lang.CURRENCY_ERROR,MessageType.text);
        }
        let opts = {
            amount: parseFloat(match[1]).toFixed(2).replace(/\.0+$/,''),
            from: match[2].toUpperCase(),
            to: match[3].toUpperCase()
        }
        try {
            result = await exchangeRates().latest().symbols([opts.to]).base(opts.from).fetch()
            result = parseFloat(result).toFixed(2).replace(/\.0+$/,'')
            await message.reply(`\`\`\`${opts.amount} ${opts.from} = ${result} ${opts.to}\`\`\``)
        }
        catch(err) {
            if (err instanceof ExchangeRatesError) 
                await message.client.sendMessage(message.jid,Lang.INVALID_CURRENCY,MessageType.text)
            else {
                await message.client.sendMessage(message.jid,Lang.UNKNOWN_ERROR,MessageType.text)
                console.log(err)
            }
        }
    }));

    cobra.addCommand({pattern: 'tts (.*)', fromMe: false, desc: Lang.TTS_DESC}, (async (message, match) => {

        if(match[1] === undefined || match[1] == "")
            return;
    
        let 
            LANG = config.LANG.toLowerCase(),
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
        await message.client.sendMessage(message.jid,buffer, MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: true});
    }));
/*
    cobra.addCommand({pattern: 'song ?(.*)', fromMe: false, desc: Lang.SONG_DESC}, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_TEXT_SONG,MessageType.text);    
        let arama = await yts(match[1]);
        arama = arama.all;
        if(arama.length < 1) return await message.client.sendMessage(message.jid,Lang.NO_RESULT,MessageType.text);
        var reply = await message.client.sendMessage(message.jid,config.SONG_DOWN, MessageType.text);
        let thumbnail = arama[0].thumbnail.replace(' ', '+');
        let title = arama[0].title.replace(' ', '+');
        let stream = ytdl(arama[0].videoId, {
            quality: 'lowestaudio',
        });
    
        got.stream(arama[0].image).pipe(fs.createWriteStream(title + '.jpg'));
        ffmpeg(stream)
            .audioBitrate(320)
            .save('./' + title + '.mp3')
            .on('end', async () => {
                const writer = new ID3Writer(fs.readFileSync('./' + title + '.mp3'));
                writer.setFrame('TIT2', arama[0].title)
                    .setFrame('TPE1', [arama[0].author.name])
                    .setFrame('APIC', {
                        type: 3,
                        data: fs.readFileSync(title + '.jpg'),
                        description: arama[0].description
                    });
                writer.addTag();
                const msg = '⇢ ' + ':' + title + '\n\n' + '⇢ :Type : MP3' + '\n\n' +'```Please Wait...```'
                var iavatar = await axios.get(thumbnail,{responseType: 'arraybuffer'});
                reply = await message.client.sendMessage(message.jid,config.SONG_UP, MessageType.text);
                await message.client.sendMessage(message.jid,Buffer.from(writer.arrayBuffer), MessageType.document, {filename: title + '.mp3', mimetype: 'audio/mpeg', ptt: false});
               
            });
    })); */
cobra.addCommand({pattern: 'video ?(.*)', fromMe: false, desc: Lang.VIDEO_DESC}, (async (message, match) => { 
        if (match[1].includes('facebook.com')) {return await message.client.sendMessage(message.jid, '```Please Enter Valid Link!```', MessageType.text)}
        if (match[1].includes('facebook')) {return await message.client.sendMessage(message.jid, '```Please Enter Valid Link!```', MessageType.text)}
        if (match[1].includes('xnxx.com')) {return await message.client.sendMessage(message.jid, '```Please Enter Valid Link!```', MessageType.text)}
        if (match[1].includes('xnxx')) {return await message.client.sendMessage(message.jid, '```Please Enter Valid Link!```', MessageType.text)}
        if (match[1].includes('pornhub.com')) {return await message.client.sendMessage(message.jid, '```Please Enter Valid Link!```', MessageType.text)}
        if (match[1].includes('pornhub')) {return await message.client.sendMessage(message.jid, '```Please Enter Valid Link!```', MessageType.text)}
        if (match[1].includes('xhamster.com')) {return await message.client.sendMessage(message.jid, '```Please Enter Valid Link!```', MessageType.text)}
        if (match[1].includes('xhamster')) {return await message.client.sendMessage(message.jid, '```Please Enter Valid Link!```', MessageType.text)}
        if (match[1].includes('shorts')){
            const video_id = match[1].split('shorts/')[1]
            const l_video_id = video_id.split('?')[0]
            const link = `https://youtu.be/${l_video_id}`            
            var VID = '';
            try {
            if (link.includes('watch')) {
                var tsts = link.replace('watch?v=', '')
                var alal = tsts.split('/')[3]
                VID = alal
            } else {     
                VID = link.split('/')[3]
            }
        } catch {
            return await message.client.sendMessage(message.jid,Lang.NO_RESULT,MessageType.text);
        }
        var reply = await message.client.sendMessage(message.jid,config.VIDEO_DOWN,MessageType.text);

        var yt = ytdl(VID, {filter: format => format.container === 'mp4' && ['720p', '480p', '360p', '240p', '144p'].map(() => true)});
        yt.pipe(fs.createWriteStream('./' + VID + '.mp4'));

        yt.on('end', async () => {
            reply = await message.client.sendMessage(message.jid,config.VIDEO_UP,MessageType.text);
            await message.client.sendMessage(message.jid,fs.readFileSync('./' + VID + '.mp4'), MessageType.video, {mimetype: Mimetype.mp4});
        });        
           return;
        }
        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_VIDEO,MessageType.text);    
    
        var VID = '';
        try {
            if (match[1].includes('watch')) {
                var tsts = match[1].replace('watch?v=', '')
                var alal = tsts.split('/')[3]
                VID = alal
            } else {     
                VID = match[1].split('/')[3]
            }
        } catch {
            return await message.client.sendMessage(message.jid,Lang.NO_RESULT,MessageType.text);
        }
        var reply = await message.client.sendMessage(message.jid,config.VIDEO_DOWN,MessageType.text);

        var yt = ytdl(VID, {filter: format => format.container === 'mp4' && ['720p', '480p', '360p', '240p', '144p'].map(() => true)});
        yt.pipe(fs.createWriteStream('./' + VID + '.mp4'));

        yt.on('end', async () => {
            reply = await message.client.sendMessage(message.jid,config.VIDEO_UP,MessageType.text);
            await message.client.sendMessage(message.jid,fs.readFileSync('./' + VID + '.mp4'), MessageType.video, {mimetype: Mimetype.mp4});
        });
    }));

    
cobra.addCommand({pattern: 'video ?(.*)', fromMe: true, desc: Lang.VIDEO_DESC}, (async (message, match) => { 
        if (match[1].includes('facebook.com')) {return await message.client.sendMessage(message.jid, '```Please Enter Valid Link!```', MessageType.text)}
        if (match[1].includes('facebook')) {return await message.client.sendMessage(message.jid, '```Please Enter Valid Link!```', MessageType.text)}
        if (match[1].includes('xnxx.com')) {return await message.client.sendMessage(message.jid, '```Please Enter Valid Link!```', MessageType.text)}
        if (match[1].includes('xnxx')) {return await message.client.sendMessage(message.jid, '```Please Enter Valid Link!```', MessageType.text)}
        if (match[1].includes('pornhub.com')) {return await message.client.sendMessage(message.jid, '```Please Enter Valid Link!```', MessageType.text)}
        if (match[1].includes('pornhub')) {return await message.client.sendMessage(message.jid, '```Please Enter Valid Link!```', MessageType.text)}
        if (match[1].includes('xhamster.com')) {return await message.client.sendMessage(message.jid, '```Please Enter Valid Link!```', MessageType.text)}
        if (match[1].includes('xhamster')) {return await message.client.sendMessage(message.jid, '```Please Enter Valid Link!```', MessageType.text)}
        if (match[1].includes('shorts')){
            const video_id = match[1].split('shorts/')[1]
            const l_video_id = video_id.split('?')[0]
            const link = `https://youtu.be/${l_video_id}`            
            var VID = '';
            try {
            if (link.includes('watch')) {
                var tsts = link.replace('watch?v=', '')
                var alal = tsts.split('/')[3]
                VID = alal
            } else {     
                VID = link.split('/')[3]
            }
        } catch {
            return await message.client.sendMessage(message.jid,Lang.NO_RESULT,MessageType.text);
        }
        var reply = await message.client.sendMessage(message.jid,config.VIDEO_DOWN,MessageType.text);

        var yt = ytdl(VID, {filter: format => format.container === 'mp4' && ['720p', '480p', '360p', '240p', '144p'].map(() => true)});
        yt.pipe(fs.createWriteStream('./' + VID + '.mp4'));

        yt.on('end', async () => {
            reply = await message.client.sendMessage(message.jid,config.VIDEO_UP,MessageType.text);
            await message.client.sendMessage(message.jid,fs.readFileSync('./' + VID + '.mp4'), MessageType.video, {mimetype: Mimetype.mp4});
        });        
           return;
        }
        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_VIDEO,MessageType.text);    
    
        var VID = '';
        try {
            if (match[1].includes('watch')) {
                var tsts = match[1].replace('watch?v=', '')
                var alal = tsts.split('/')[3]
                VID = alal
            } else {     
                VID = match[1].split('/')[3]
            }
        } catch {
            return await message.client.sendMessage(message.jid,Lang.NO_RESULT,MessageType.text);
        }
        var reply = await message.client.sendMessage(message.jid,config.VIDEO_DOWN,MessageType.text);

        var yt = ytdl(VID, {filter: format => format.container === 'mp4' && ['720p', '480p', '360p', '240p', '144p'].map(() => true)});
        yt.pipe(fs.createWriteStream('./' + VID + '.mp4'));

        yt.on('end', async () => {
            reply = await message.client.sendMessage(message.jid,config.VIDEO_UP,MessageType.text);
            await message.client.sendMessage(message.jid,fs.readFileSync('./' + VID + '.mp4'), MessageType.video, {mimetype: Mimetype.mp4});
        });
    }));

    cobra.addCommand({pattern: 'yt ?(.*)', fromMe: false, desc: Lang.YT_DESC}, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text);    
        var reply = await message.client.sendMessage(message.jid,Lang.GETTING_VIDEOS,MessageType.text);

        try {
            var arama = await yts(match[1]);
        } catch {
            return await message.client.sendMessage(message.jid,Lang.NOT_FOUND,MessageType.text);
        }
    
        var mesaj = '';
        arama.all.map((video) => {
            mesaj += '*' + video.title + '* - ' + video.url + '\n' + '*Views' + '* - ' + video.views + '\n' + '*Duration' + '* - ' + video.duration + '\n'
        });

        await message.client.sendMessage(message.jid,mesaj,MessageType.text);
        await reply.delete();
    }));
    
        cobra.addCommand({pattern: 'yt ?(.*)', fromMe: true, desc: Lang.YT_DESC}, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text);    
        var reply = await message.client.sendMessage(message.jid,Lang.GETTING_VIDEOS,MessageType.text);

        try {
            var arama = await yts(match[1]);
        } catch {
            return await message.client.sendMessage(message.jid,Lang.NOT_FOUND,MessageType.text);
        }
    
        var mesaj = '';
        arama.all.map((video) => {
            mesaj += '*' + video.title + '* - ' + video.url + '\n' + '*Views' + '* - ' + video.views + '\n' + '*Duration' + '* - ' + video.duration + '\n'
        });

        await message.client.sendMessage(message.jid,mesaj,MessageType.text);
        await reply.delete();
    }));

    cobra.addCommand({pattern: 'wiki ?(.*)', fromMe: false, desc: Lang.WIKI_DESC}, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text);    
        var reply = await message.client.sendMessage(message.jid,Lang.SEARCHING,MessageType.text);

        var arama = await wiki({ apiUrl: 'https://' + config.LANG + '.wikipedia.org/w/api.php' })
            .page(match[1]);

        var info = await arama.rawContent();
        await message.client.sendMessage(message.jid, info, MessageType.text);
        await reply.delete();
    }));

    cobra.addCommand({pattern: 'img ?(.*)', fromMe: false, desc: Lang.IMG_DESC}, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text);
        gis(match[1], async (error, result) => {
            for (var i = 0; i < (result.length < 5 ? result.length : 5); i++) {
                var get = got(result[i].url, {https: {rejectUnauthorized: false}});
                var stream = get.buffer();
                
                stream.then(async (image) => {
                    await message.client.sendMessage(message.jid,image, MessageType.image);
                });
            }

            message.reply(Lang.IMG.format((result.length < 5 ? result.length : 5), match[1]));
        });
    }));   

    cobra.addCommand({pattern: 'lyric ?(.*)', fromMe: false, desc: Slang.LY_DESC }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, Slang.NEED, MessageType.text);

        var aut = await solenolyrics.requestLyricsFor(`${match[1]}`); 
        var son = await solenolyrics.requestAuthorFor(`${match[1]}`);
        var cov = await solenolyrics.requestIconFor(`${match[1]}`);
        var tit = await solenolyrics.requestTitleFor(`${match[1]}`);

        var buffer = await axios.get(cov, {responseType: 'arraybuffer'});

        await message.client.sendMessage(message.jid, Buffer.from(buffer.data),  MessageType.image, {caption: `*${Slang.ARAT}* ` + '```' + `${match[1]}` + '```' + `\n*${Slang.BUL}* ` + '```' + tit + '```' + `\n*${Slang.AUT}* ` + '```' + son + '```' + `\n*${Slang.SLY}*\n\n` + aut });

    }));  
    
  }
