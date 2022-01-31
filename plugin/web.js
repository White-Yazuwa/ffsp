/* Copyright (C) 2020 Yusuf Usta.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

WhatsAsena - Yusuf Usta
*/

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');

const TinyURL = require('tinyurl');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('web');
const SLang = Language.getString('webss');
/*
var LANG = { RES: '' }
if (Config.LANG == 'TR') LANG.RES == '*Komut Bulunamadı!*\n*Benzer Komut:*'
if (Config.LANG == 'EN') LANG.RES == '*Command not Found!*\n*Similar Command:*'
if (Config.LANG == 'AZ') LANG.RES == '*Komanda tapılmadı!*\n*Oxşar əmr:*'
if (Config.LANG == 'PT') LANG.RES == '*Comando não encontrado!*\n*Comando Similar:*'
if (Config.LANG == 'RU') LANG.RES == '*Команда не найдена!*\n*Аналогичная команда:*'
if (Config.LANG == 'ID') LANG.RES == '*Perintah tidak ditemukan!*\n*Perintah serupa:*'
if (Config.LANG == 'ES') LANG.RES == '*¡Comando no encontrado!*\n*Comando similar:*'
if (Config.LANG == 'ML') LANG.RES == '*විධානය හමු නොවීය! *\n* සමාන විධානය:*'
if (Config.LANG == 'HI') LANG.RES == '*यह कमांड नहीं मिला!*\n*समान कमांड:*'

function editDistance(comm, wr) {
  comm = comm.toLowerCase();
  wr = wr.toLowerCase();

  var costs = new Array();
  for (var i = 0; i <= comm.length; i++) {
    var lastValue = i;
    for (var j = 0; j <= wr.length; j++) {
      if (i == 0)
        costs[j] = j;
      else {
        if (j > 0) {
          var newValue = costs[j - 1];
          if (comm.charAt(i - 1) != wr.charAt(j - 1))
            newValue = Math.min(Math.min(newValue, lastValue),
              costs[j]) + 1;
          costs[j - 1] = lastValue;
          lastValue = newValue;
        }
      }
    }
    if (i > 0)
      costs[wr.length] = lastValue;
  }
  return costs[wr.length];
}

function similarity(comm, wr) {
  var longer = comm;
  var shorter = wr;
  if (comm.length < wr.length) {
    longer = wr;
    shorter = comm;
  }
  var longerLength = longer.length;
  if (longerLength == 0) {
    return 1.0;
  }
  return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
}

Asena.addCommand({pattern: '?(.*)', fromMe: true, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
    var HANDLER = '';
    if (/\[(\W*)\]/.test(Config.HANDLERS)) {
        HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
    } else {
        HANDLER = '.';
    }
    const id = message.jid
    var usm = HANDLER + match[1]
    var xmedia = await similarity('xmedia',HANDLER + match[1])
    var install = await similarity('install',HANDLER + match[1])
    var plugin = await similarity('plugin',HANDLER + match[1])
    var remove = await similarity('remove',HANDLER + match[1])
    // var ban = await similarity('ban',HANDLER + match[1])
    // var add = await similarity('add',HANDLER + match[1])
    var promote = await similarity('promote',HANDLER + match[1])
    var demote = await similarity('demote',HANDLER + match[1])
    // var mute = await similarity('mute',HANDLER + match[1])
    // var unmute = await similarity('unmute',HANDLER + match[1])
    var invite = await similarity('invite',HANDLER + match[1])
    // var afk = await similarity('afk',HANDLER + match[1])
    var carbon = await similarity('carbon',HANDLER + match[1])
    var mp4audio = await similarity('mp4audio',HANDLER + match[1])
    var imagesticker = await similarity('imagesticker',HANDLER + match[1])
    var deepai = await similarity('deepai',HANDLER + match[1])
    var term = await similarity('term',HANDLER + match[1])
    var ffmpeg = await similarity('ffmpeg',HANDLER + match[1])
    var filter = await similarity('filter',HANDLER + match[1])
    // var stop = await similarity('stop',HANDLER + match[1])
    var welcome = await similarity('welcome',HANDLER + match[1])
    var goodbye = await similarity('goodbye',HANDLER + match[1])
    var help = await similarity('help',HANDLER + match[1])
    var degis = await similarity('degis',HANDLER + match[1])
    var restart = await similarity('restart',HANDLER + match[1])
    var shutdown = await similarity('shutdown',HANDLER + match[1])
    var dyno = await similarity('dyno',HANDLER + match[1])
    var setvar = await similarity('setvar',HANDLER + match[1])
    var delvar = await similarity('delvar',HANDLER + match[1])
    var getvar = await similarity('getvar',HANDLER + match[1])
    var locate = await similarity('locate',HANDLER + match[1])
    // var log = await similarity('log',HANDLER + match[1])
    var meme = await similarity('meme',HANDLER + match[1])
    var neko = await similarity('neko',HANDLER + match[1])
    var notes = await similarity('notes',HANDLER + match[1])
    // var save = await similarity('save',HANDLER + match[1])
    var deleteNotes = await similarity('deleteNotes',HANDLER + match[1])
    // var ocr = await similarity('ocr',HANDLER + match[1])
    var kickme = await similarity('kickme',HANDLER + match[1])
    // var pp = await similarity('pp',HANDLER + match[1])
    // var block = await similarity('block',HANDLER + match[1])
    // var unblock = await similarity('unblock',HANDLER + match[1])
    var jid = await similarity('jid',HANDLER + match[1])
    var removebg = await similarity('removebg',HANDLER + match[1])
    var report = await similarity('report',HANDLER + match[1])
    var scam = await similarity('scam',HANDLER + match[1])
    var scan = await similarity('scan',HANDLER + match[1])
    var trt = await similarity('trt',HANDLER + match[1])
    var currency = await similarity('currency',HANDLER + match[1])
    var tts = await similarity('tts',HANDLER + match[1])
    
    var song = await similarity('song',HANDLER + match[1])
    var video = await similarity('video',HANDLER + match[1])
    // var yt = await similarity('yt',HANDLER + match[1])
    var wiki = await similarity('wiki',HANDLER + match[1])
    // var img = await similarity('img',HANDLER + match[1])
    var github = await similarity('github',HANDLER + match[1])
    var lyric = await similarity('lyric',HANDLER + match[1])
    var covid = await similarity('covid',HANDLER + match[1])
    // var ss = await similarity('ss',HANDLER + match[1])
    var insta = await similarity('insta',HANDLER + match[1])
    var animesay = await similarity('animesay',HANDLER + match[1])
    var changesay = await similarity('changesay',HANDLER + match[1])
    var trumpsay = await similarity('trumpsay',HANDLER + match[1])
    var audiospam = await similarity('audio spam',HANDLER + match[1])
    var fotospam = await similarity('foto spam',HANDLER + match[1])
    var stickerspam = await similarity('sticker spam',HANDLER + match[1])
    var vidspam = await similarity('vid spam',HANDLER + match[1])
    var killspam = await similarity('killspam',HANDLER + match[1])
    
    var spam = await similarity('spam',HANDLER + match[1])
    var sticker = await similarity('sticker',HANDLER + match[1])
    var alive = await similarity('alive',usm)
    var sysd = await similarity('sysd',HANDLER + match[1])
    var tagadmin = await similarity('tagadmin',HANDLER + match[1])
    var tagall = await similarity('tagall',HANDLER + match[1])
    var tblend = await similarity('tblend',HANDLER + match[1])
    // var ttp = await similarity('ttp',HANDLER + match[1])
    // var attp = await similarity('attp',HANDLER + match[1])
    var glowttp = await similarity('glowttp',HANDLER + match[1])
    var unvoice = await similarity('unvoice',HANDLER + match[1])
    // var update = await similarity('update',HANDLER + match[1])
    // var updatenow = await similarity('update now',HANDLER + match[1])
    var voicy = await similarity('voicy',HANDLER + match[1])
    var wallpaper = await similarity('wallpaper',HANDLER + match[1])
    var weather = await similarity('weather',HANDLER + match[1])
    var speedtest = await similarity('speedtest',HANDLER + match[1])
    var ping = await similarity('ping',HANDLER + match[1])
    var short = await similarity('short',HANDLER + match[1])
    var calc = await similarity('calc',HANDLER + match[1])
    var whois = await similarity('whois',HANDLER + match[1])
    var mp4enhance = await similarity('mp4enhance',HANDLER + match[1])
    var interp = await similarity('interp',HANDLER + match[1])
    var mp4slowmo = await similarity('mp4slowmo',HANDLER + match[1])
    var x4mp4 = await similarity('x4mp4',HANDLER + match[1])
    var x2mp4 = await similarity('x2mp4',HANDLER + match[1])
    var gif = await similarity('gif',HANDLER + match[1])
    var agif = await similarity('agif',HANDLER + match[1])
    var mp4blur = await similarity('mp4blur',HANDLER + match[1])
    var mp4stab = await similarity('mp4stab',HANDLER + match[1])
    var mp4rainbow = await similarity('mp4rainbow',HANDLER + match[1])
    var mp4color = await similarity('mp4color',HANDLER + match[1])
    var mp4art = await similarity('mp4art',HANDLER + match[1])
    var mp4negative = await similarity('mp4negative',HANDLER + match[1])
    var mp4vintage = await similarity('mp4vintage',HANDLER + match[1])
    var mp4bw = await similarity('mp4bw',HANDLER + match[1])
    var mp4reverse = await similarity('mp4reverse',HANDLER + match[1])
    var mp4edge = await similarity('mp4enge',HANDLER + match[1])
    var mp4image = await similarity('mp4image',HANDLER + match[1])
    var spectrum = await similarity('spectrum',HANDLER + match[1])
    var waves = await similarity('waves',HANDLER + match[1])
    var frequency = await similarity('frequency',HANDLER + match[1])
    var avec = await similarity('avec',HANDLER + match[1])
    var volumeaudio = await similarity('volumeaudio',HANDLER + match[1])
    var cqtaudio = await similarity('cqtaudio',HANDLER + match[1])
    var mp3eq = await similarity('mp3eq',HANDLER + match[1])
    var mp3crusher = await similarity('mp3crusher',HANDLER + match[1])
    var mp3reverse = await similarity('mp3reverse',HANDLER + match[1])
    var mp3pitch = await similarity('mp3pitch',HANDLER + match[1])
    var mp3low = await similarity('mp3low',HANDLER + match[1])
    var x2mp3 = await similarity('x2mp3',HANDLER + match[1])
    var mp3volume = await similarity('mp3volume',HANDLER + match[1])
    var bwimage = await similarity('bwimage',HANDLER + match[1])
    var vintageimage = await similarity('vintageimage',HANDLER + match[1])
    var edgeimage = await similarity('edgeimage',HANDLER + match[1])
    var enhanceimage = await similarity('enhanceimage',HANDLER + match[1])
    var blurimage = await similarity('blurimage',HANDLER + match[1])
    var grenimage = await similarity('grenimage',HANDLER + match[1])
    var negativeimage = await similarity('negativeimage',HANDLER + match[1])
    var rainbowimage = await similarity('rainbowimage',HANDLER + match[1])
    var colorimage = await similarity('colorimage',HANDLER + match[1])
    var artimage = await similarity('artimage',HANDLER + match[1])
    var moodai = await similarity('moodai',HANDLER + match[1])
    var colorai = await similarity('colorai',HANDLER + match[1])
    var superai = await similarity('superai',HANDLER + match[1])
    var waifuai = await similarity('waifuai',HANDLER + match[1])
    var dreamai = await similarity('dreamai',HANDLER + match[1])
    var neuraltalkai = await similarity('neuraltalkai',HANDLER + match[1])
    var ttiai = await similarity('ttiai',HANDLER + match[1])
    var toonai = await similarity('toonai',HANDLER + match[1])
    var textai = await similarity('textai',HANDLER + match[1])
    var nudityai = await similarity('nudityai',HANDLER + match[1])
    var ganstyle = await similarity('ganstyle',HANDLER + match[1])  
    
    if (message.message.startsWith(HANDLER)) {  
        if (xmedia > 0.6 && !match[1].includes('xmedia')) { return await message.client.sendMessage(id,LANG.RES + ' ```$xmedia```', MessageType.text) }
        // else if (install > 0.6 && !match[1].includes('install')) { return await message.client.sendMessage(id,LANG.RES + ' ```$install```', MessageType.text) }
        else if (plugin > 0.6 && !match[1].includes('plugin')) { return await message.client.sendMessage(id,LANG.RES + ' ```$plugin```', MessageType.text) }
        else if (remove > 0.6 && !match[1].includes('remove')) { return await message.client.sendMessage(id,LANG.RES + ' ```$remove```', MessageType.text) }
        // else if (ban > 0.6 && !match[1].includes('ban')) { return await message.client.sendMessage(id,LANG.RES + ' ```$ban```', MessageType.text) }
        // else if (add > 0.6 && !match[1].includes('add')) { return await message.client.sendMessage(id,LANG.RES + ' ```$add```', MessageType.text) }
        else if (promote > 0.6 && !match[1].includes('promote')) { return await message.client.sendMessage(id,LANG.RES + ' ```$promote```', MessageType.text) }
        else if (demote> 0.6 && !match[1].includes('demote')) { return await message.client.sendMessage(id,LANG.RES + ' ```$demote```', MessageType.text) }
        // else if (mute > 0.6 && !match[1].includes('mute')) { return await message.client.sendMessage(id,LANG.RES + ' ```$mute```', MessageType.text) }
        // else if (unmute > 0.6 && !match[1].includes('unmute')) { return await message.client.sendMessage(id,LANG.RES + ' ```$unmute```', MessageType.text) }
        else if (invite > 0.6 && !match[1].includes('invite')) { return await message.client.sendMessage(id,LANG.RES + ' ```$invite```', MessageType.text) }
        // else if (afk > 0.6 && !match[1].includes('afk')) { return await message.client.sendMessage(id,LANG.RES + ' ```$afk```', MessageType.text) }
        else if (carbon > 0.6 && !match[1].includes('carbon')) { return await message.client.sendMessage(id,LANG.RES + ' ```$carbon```', MessageType.text) }
        else if (mp4audio > 0.6 && !match[1].includes('mp4audio')) { return await message.client.sendMessage(id,LANG.RES + ' ```$mp4audio```', MessageType.text) }
        else if (deepai > 0.6 && !match[1].includes('deepai')) { return await message.client.sendMessage(id,LANG.RES + ' ```$deepai```', MessageType.text) }
        else if (term > 0.6 && !match[1].includes('term')) { return await message.client.sendMessage(id,LANG.RES + ' ```$term```', MessageType.text) }
        else if (ffmpeg > 0.6 && !match[1].includes('ffmpeg')) { return await message.client.sendMessage(id,LANG.RES + ' ```$ffmpeg```', MessageType.text) }
        else if (filter > 0.6 && !match[1].includes('filter')) { return await message.client.sendMessage(id,LANG.RES + ' ```$filter```', MessageType.text) }
        // else if (stop > 0.6 && !match[1].includes('stop')) { return await message.client.sendMessage(id,LANG.RES + ' ```$stop```', MessageType.text) }
        else if (welcome > 0.6 && !match[1].includes('welcome')) { return await message.client.sendMessage(id,LANG.RES + ' ```$welcome```', MessageType.text) }
        else if (goodbye > 0.6 && !match[1].includes('goodbye')) { return await message.client.sendMessage(id,LANG.RES + ' ```$goodbye```', MessageType.text) }
        else if (help> 0.6 && !match[1].includes('help')) { return await message.client.sendMessage(id,LANG.RES + ' ```$help```', MessageType.text) }
        else if (degis > 0.6 && !match[1].includes('degis')) { return await message.client.sendMessage(id,LANG.RES + ' ```$degis```', MessageType.text) }
        else if (restart > 0.6 && !match[1].includes('restart')) { return await message.client.sendMessage(id,LANG.RES + ' ```$restart```', MessageType.text) }
        else if (shutdown > 0.6 && !match[1].includes('shutdown')) { return await message.client.sendMessage(id,LANG.RES + ' ```$shutdown```', MessageType.text) }
        else if (dyno> 0.6 && !match[1].includes('dyno')) { return await message.client.sendMessage(id,LANG.RES + ' ```$dyno```', MessageType.text) }
        else if (setvar > 0.6 && !match[1].includes('setvar')) { return await message.client.sendMessage(id,LANG.RES + ' ```$setvar```', MessageType.text) }
        else if (delvar > 0.6 && !match[1].includes('delvar')) { return await message.client.sendMessage(id,LANG.RES + ' ```$delvar```', MessageType.text) }
        else if (getvar > 0.6 && !match[1].includes('getvar')) { return await message.client.sendMessage(id,LANG.RES + ' ```$getvar```', MessageType.text) }
        
        else if (locate > 0.6 && !match[1].includes('locate')) { return await message.client.sendMessage(id,LANG.RES + ' ```$locate```', MessageType.text) }
        // else if (log > 0.6 && !match[1].includes('log')) { return await message.client.sendMessage(id,LANG.RES + ' ```$log```', MessageType.text) }
        else if (meme> 0.6 && !match[1].includes('meme')) { return await message.client.sendMessage(id,LANG.RES + ' ```$meme```', MessageType.text) }
        else if (neko > 0.6 && !match[1].includes('neko')) { return await message.client.sendMessage(id,LANG.RES + ' ```$neko```', MessageType.text) }
        else if (notes > 0.6 && !match[1].includes('notes')) { return await message.client.sendMessage(id,LANG.RES + ' ```$notes```', MessageType.text) }
        // else if (save > 0.6 && !match[1].includes('save')) { return await message.client.sendMessage(id,LANG.RES + ' ```$save```', MessageType.text) }
        else if (deleteNotes > 0.6 && !match[1].includes('deleteNotes')) { return await message.client.sendMessage(id,LANG.RES + ' ```$deleteNotes```', MessageType.text) }
        // else if (ocr > 0.6 && !match[1].includes('ocr')) { return await message.client.sendMessage(id,LANG.RES + ' $ocr', MessageType.text) } 
        else if (kickme > 0.6 && !match[1].includes('kickme')) { return await message.client.sendMessage(id,LANG.RES + ' $kickme', MessageType.text) }
        // else if (pp > 0.6 && !match[1].includes('pp')) { return await message.client.sendMessage(id,LANG.RES + ' $pp', MessageType.text) }
        // else if (block > 0.6 && !match[1].includes('block')) { return await message.client.sendMessage(id,LANG.RES + ' $block', MessageType.text) }
        // else if (unblock > 0.6 && !match[1].includes('unblock')) { return await message.client.sendMessage(id,LANG.RES + ' $unblock', MessageType.text) }
        else if (jid > 0.6 && !match[1].includes('jid')) { return await message.client.sendMessage(id,LANG.RES + ' $jid', MessageType.text) }
        else if (removebg > 0.6 && !match[1].includes('removebg')) { return await message.client.sendMessage(id,LANG.RES + ' $removebg', MessageType.text) }
        else if (report > 0.6 && !match[1].includes('report')) { return await message.client.sendMessage(id,LANG.RES + ' $report', MessageType.text) }
        // else if (scam > 0.6 && !match[1].includes('scam')) { return await message.client.sendMessage(id,LANG.RES + ' $scam', MessageType.text) }
        // else if (scan > 0.6 && !match[1].includes('scan')) { return await message.client.sendMessage(id,LANG.RES + ' $scan', MessageType.text) }
        // else if (trt > 0.6 && !match[1].includes('trt')) { return await message.client.sendMessage(id,LANG.RES + ' $trt', MessageType.text) }
        // else if (currency > 0.6 && !match[1].includes('currency')) { return await message.client.sendMessage(id,LANG.RES + ' $currency', MessageType.text) }
        // else if (tts > 0.6 && !match[1].includes('tts')) { return await message.client.sendMessage(id,LANG.RES + ' $tts', MessageType.text) }
        else if (song > 0.6 && !match[1].includes('song')) { return await message.client.sendMessage(id,LANG.RES + ' $song', MessageType.text) }
        else if (video > 0.6 && !match[1].includes('video')) { return await message.client.sendMessage(id,LANG.RES + ' $video', MessageType.text) }
        // else if (yt > 0.6 && !match[1].includes('yt')) { return await message.client.sendMessage(id,LANG.RES + ' $yt', MessageType.text) }
        else if (wiki > 0.6 && !match[1].includes('wiki')) { return await message.client.sendMessage(id,LANG.RES + ' $wiki', MessageType.text) }
        // else if (img > 0.6 && !match[1].includes('img')) { return await message.client.sendMessage(id,LANG.RES + ' $img', MessageType.text) }
        else if (github > 0.6 && !match[1].includes('github')) { return await message.client.sendMessage(id,LANG.RES + ' $github', MessageType.text) }
        else if (lyric > 0.6 && !match[1].includes('lyric')) { return await message.client.sendMessage(id,LANG.RES + ' $lyric', MessageType.text) }
        else if (covid > 0.6 && !match[1].includes('covid')) { return await message.client.sendMessage(id,LANG.RES + ' $covid', MessageType.text) }
        // else if (ss > 0.6 && !match[1].includes('ss')) { return await message.client.sendMessage(id,LANG.RES + ' $ss', MessageType.text) }
        else if (insta > 0.6 && !match[1].includes('insta')) { return await message.client.sendMessage(id,LANG.RES + ' $insta', MessageType.text) }
        else if (animesay > 0.6 && !match[1].includes('animesay')) { return await message.client.sendMessage(id,LANG.RES + ' $animesay', MessageType.text) }
        else if (changesay > 0.6 && !match[1].includes('changesay')) { return await message.client.sendMessage(id,LANG.RES + ' $changesay', MessageType.text) }
        else if (trumpsay > 0.6 && !match[1].includes('trumpsay')) { return await message.client.sendMessage(id,LANG.RES + ' $trumpsay', MessageType.text) }
        else if (audiospam > 0.6 && !match[1].includes('audio spam')) { return await message.client.sendMessage(id,LANG.RES + ' $audio spam', MessageType.text) }
        else if (fotospam > 0.6 && !match[1].includes('foto spam')) { return await message.client.sendMessage(id,LANG.RES + ' $foto spam', MessageType.text) }
        else if (stickerspam > 0.6 && !match[1].includes('sticker spam')) { return await message.client.sendMessage(id,LANG.RES + ' $sticker spam', MessageType.text) }
        else if (vidspam > 0.6 && !match[1].includes('vid spam')) { return await message.client.sendMessage(id,LANG.RES + ' $vid spam', MessageType.text) }
        
        else if (killspam > 0.6 && !match[1].includes('killspam')) { return await message.client.sendMessage(id,LANG.RES + ' $killspam', MessageType.text) }
        else if (spam > 0.6 && !match[1].includes('spam')) { return await message.client.sendMessage(id,LANG.RES + ' $spam', MessageType.text) }
        else if (sticker > 0.6 && !match[1].includes('sticker')) { return await message.client.sendMessage(id,LANG.RES + ' $sticker', MessageType.text) }
        else if (alive > 0.6 && !match[1].includes('alive')) { return await message.client.sendMessage(id,LANG.RES + ' $alive', MessageType.text) }
        else if (sysd > 0.6 && !match[1].includes('sysd')) { return await message.client.sendMessage(id,LANG.RES + ' $sysd', MessageType.text) }
        else if (tagadmin > 0.6 && !match[1].includes('tagadmin')) { return await message.client.sendMessage(id,LANG.RES + ' $tagadmin', MessageType.text) }
        else if (tagall > 0.6 && !match[1].includes('tagall')) { return await message.client.sendMessage(id,LANG.RES + ' $taggall', MessageType.text) }
        else if (tblend > 0.6 && !match[1].includes('tblend')) { return await message.client.sendMessage(id,LANG.RES + ' $tblend', MessageType.text) }
        // else if (ttp > 0.6 && !match[1].includes('ttp')) { return await message.client.sendMessage(id,LANG.RES + ' $ttp', MessageType.text) }
        // else if (attp > 0.6 && !match[1].includes('attp')) { return await message.client.sendMessage(id,LANG.RES + ' $attp', MessageType.text) }
        else if (glowttp > 0.6 && !match[1].includes('glowttp')) { return await message.client.sendMessage(id,LANG.RES + ' $glowttp', MessageType.text) }
        else if (unvoice > 0.6 && !match[1].includes('unvoice')) { return await message.client.sendMessage(id,LANG.RES + ' $unvoice', MessageType.text) }
        // else if (update > 0.6 && !match[1].includes('update' && !match[1].includes('update now')) { return await message.client.sendMessage(id,LANG.RES + ' $update', MessageType.text) }
        // else if (updatenow > 0.6 && !match[1].includes('update now')) { return await message.client.sendMessage(id,LANG.RES + ' $updatenow', MessageType.text) }
        else if (voicy > 0.6 && !match[1].includes('voicy')) { return await message.client.sendMessage(id,LANG.RES + ' $voicy', MessageType.text) }
        else if (wallpaper > 0.6 && !match[1].includes('wallpaper')) { return await message.client.sendMessage(id,LANG.RES + ' $wallpaper', MessageType.text) }
        else if (weather > 0.6 && !match[1].includes('weather')) { return await message.client.sendMessage(id,LANG.RES + ' $weather', MessageType.text) }
        else if (speedtest > 0.6 && !match[1].includes('speedtest')) { return await message.client.sendMessage(id,LANG.RES + ' $speedtest', MessageType.text) }
        else if (ping > 0.6 && !match[1].includes('ping')) { return await message.client.sendMessage(id,LANG.RES + ' $ping', MessageType.text) }
        else if (short > 0.6 && !match[1].includes('short')) { return await message.client.sendMessage(id,LANG.RES + ' $short', MessageType.text) }
        else if (calc > 0.6 && !match[1].includes('calc')) { return await message.client.sendMessage(id,LANG.RES + ' $calc', MessageType.text) }
        else if (whois > 0.6 && !match[1].includes('whois')) { return await message.client.sendMessage(id,LANG.RES + ' $whois', MessageType.text) }
        /* else if (mp4enhance > 0.6 && !match[1].includes('mp4enhance')) { return await message.client.sendMessage(id,LANG.RES + ' $mp4enhance', MessageType.text) }
        else if (interp > 0.6 && !match[1].includes('interp')) { return await message.client.sendMessage(id,LANG.RES + ' $img', MessageType.text) }
        else if (mp4slowmo > 0.6 && !match[1].includes('mp4slowmo')) { return await message.client.sendMessage(id,LANG.RES + ' $mp4slowmo', MessageType.text) }
        else if (x4mp4 > 0.6 && !match[1].includes('x4mp4')) { return await message.client.sendMessage(id,LANG.RES + ' $x4mp4', MessageType.text) }
        else if (x2mp4 > 0.6 && !match[1].includes('x2mp4')) { return await message.client.sendMessage(id,LANG.RES + ' $x2mp4', MessageType.text) }
        else if (gif > 0.6 && !match[1].includes('gif')) { return await message.client.sendMessage(id,LANG.RES + ' $gif', MessageType.text) }
        else if (agif > 0.6 && !match[1].includes('agif')) { return await message.client.sendMessage(id,LANG.RES + ' $agif', MessageType.text) }
        else if (mp4blur > 0.6 && !match[1].includes('mp4blur')) { return await message.client.sendMessage(id,LANG.RES + ' $mp4blur', MessageType.text) }
        else if (mp4stab > 0.6 && !match[1].includes('mp4stab')) { return await message.client.sendMessage(id,LANG.RES + ' ```$mp4stab```', MessageType.text) }
        else if (mp4rainbow > 0.6 && !match[1].includes('mp4rainbow')) { return await message.client.sendMessage(id,LANG.RES + ' ```$mp4rainbow```', MessageType.text) }
        else if (mp4color > 0.6 && !match[1].includes('mp4color')) { return await message.client.sendMessage(id,LANG.RES + ' ```$mp4color```', MessageType.text) }
        else if (mp4art > 0.6 && !match[1].includes('mp4art')) { return await message.client.sendMessage(id,LANG.RES + ' ```$mp4art```', MessageType.text) }
        else if (mp4negative > 0.6 && !match[1].includes('mp4negative')) { return await message.client.sendMessage(id,LANG.RES + ' ```$mp4negative```', MessageType.text) }
        else if (mp4vintage > 0.6 && !match[1].includes('mp4vintage')) { return await message.client.sendMessage(id,LANG.RES + ' ```$mp4vintage```', MessageType.text) }
        else if (mp4bw > 0.6 && !match[1].includes('mp4bw')) { return await message.client.sendMessage(id,LANG.RES + ' ```$mp4bw```', MessageType.text) }
        else if (mp4reverse > 0.6 && !match[1].includes('mp4reverse')) { return await message.client.sendMessage(id,LANG.RES + ' ```$mp4reverse```', MessageType.text) }
        else if (mp4edge > 0.6 && !match[1].includes('mp4edge')) { return await message.client.sendMessage(id,LANG.RES + ' ```$mp4edge```', MessageType.text) }
        else if (mp4image > 0.6 && !match[1].includes('mp4image')) { return await message.client.sendMessage(id,LANG.RES + ' ```$mp4image```', MessageType.text) }
        else if (spectrum > 0.6 && !match[1].includes('spectrum')) { return await message.client.sendMessage(id,LANG.RES + ' ```$spectrum```', MessageType.text) }
        else if (waves > 0.6 && !match[1].includes('waves')) { return await message.client.sendMessage(id,LANG.RES + ' ```$waves```', MessageType.text) }
        else if (frequency > 0.6 && !match[1].includes('frequency')) { return await message.client.sendMessage(id,LANG.RES + ' ```$frequency```', MessageType.text) }
        else if (avec > 0.6 && !match[1].includes('avec')) { return await message.client.sendMessage(id,LANG.RES + ' ```$avec```', MessageType.text) }
        else if (volumeaudio > 0.6 && !match[1].includes('volumeaudio')) { return await message.client.sendMessage(id,LANG.RES + ' ```$volumeaudio```', MessageType.text) }
        else if (cqtaudio > 0.6 && !match[1].includes('cqtaudio')) { return await message.client.sendMessage(id,LANG.RES + ' ```$cqtaudio```', MessageType.text) }
        else if (mp3eq > 0.6 && !match[1].includes('mp3eq')) { return await message.client.sendMessage(id,LANG.RES + ' ```$mp3eq```', MessageType.text) }
        else if (mp3crusher > 0.6 && !match[1].includes('mp3crusher')) { return await message.client.sendMessage(id,LANG.RES + ' ```$mp3crusher```', MessageType.text) }
        else if (mp3reverse > 0.6 && !match[1].includes('mp3reverse')) { return await message.client.sendMessage(id,LANG.RES + ' ```$mp3reverse```', MessageType.text) }
        else if (mp3pitch > 0.6 && !match[1].includes('mp3pitch')) { return await message.client.sendMessage(id,LANG.RES + ' ```$mp3pitch```', MessageType.text) }
        else if (mp3low > 0.6 && !match[1].includes('mp3low')) { return await message.client.sendMessage(id,LANG.RES + ' ```$mp3low```', MessageType.text) }
        else if (x2mp3 > 0.6 && !match[1].includes('x2mp3')) { return await message.client.sendMessage(id,LANG.RES + ' ```$x2mp3```', MessageType.text) }
        else if (mp3volume > 0.6 && !match[1].includes('mp3volume')) { return await message.client.sendMessage(id,LANG.RES + ' ```$mp3volume```', MessageType.text) }
        else if (bwimage > 0.6 && !match[1].includes('bwimage')) { return await message.client.sendMessage(id,LANG.RES + ' ```$bwimage```', MessageType.text) }
        else if (vintageimage > 0.6 && !match[1].includes('vintageimage')) { return await message.client.sendMessage(id,LANG.RES + ' ```$vintageimage```', MessageType.text) }
        else if (edgeimage > 0.6 && !match[1].includes('edgeimage')) { return await message.client.sendMessage(id,LANG.RES + ' ```$edgeimage```', MessageType.text) }
        else if (enhanceimage > 0.6 && !match[1].includes('enhanceimage')) { return await message.client.sendMessage(id,LANG.RES + ' ```$enhanceimage```', MessageType.text) }
        else if (blurimage > 0.6 && !match[1].includes('blurimage')) { return await message.client.sendMessage(id,LANG.RES + ' ```$blurimage```', MessageType.text) }
        else if (grenimage > 0.6 && !match[1].includes('grenimage')) { return await message.client.sendMessage(id,LANG.RES + ' ```$grenimage```', MessageType.text) }
        else if (negativeimage> 0.6 && !match[1].includes('negativeimage')) { return await message.client.sendMessage(id,LANG.RES + ' ```$negativeimage```', MessageType.text) }
        else if (rainbowimage > 0.6 && !match[1].includes('rainbowimage')) { return await message.client.sendMessage(id,LANG.RES + ' ```$rainbowimage```', MessageType.text) }
        else if (colorimage > 0.6 && !match[1].includes('colorimage')) { return await message.client.sendMessage(id,LANG.RES + ' ```$colorimage```', MessageType.text) }
        else if (artimage > 0.6 && !match[1].includes('artimage')) { return await message.client.sendMessage(id,LANG.RES + ' ```$artimage```', MessageType.text) }
        else if (moodai > 0.6 && !match[1].includes('moodai')) { return await message.client.sendMessage(id,LANG.RES + ' ```$moodai```', MessageType.text) }
        else if (colorai > 0.6 && !match[1].includes('colorai')) { return await message.client.sendMessage(id,LANG.RES + ' ```$colorai```', MessageType.text) }
        else if (superai > 0.6 && !match[1].includes('superai')) { return await message.client.sendMessage(id,LANG.RES + ' ```$superai```', MessageType.text) }
        else if (waifuai > 0.6 && !match[1].includes('waifuai')) { return await message.client.sendMessage(id,LANG.RES + ' ```$waifuai```', MessageType.text) }
        else if (dreamai > 0.6 && !match[1].includes('dreamai')) { return await message.client.sendMessage(id,LANG.RES + ' ```$dreamai```', MessageType.text) }
        else if (neuraltalkai > 0.6 && !match[1].includes('neuraltalkai')) { return await message.client.sendMessage(id,LANG.RES + ' ```$neuraltalkai```', MessageType.text) }
        else if (ttiai > 0.6 && !match[1].includes('ttiai')) { return await message.client.sendMessage(id,LANG.RES + ' ```$ttiai```', MessageType.text) }
        else if (toonai > 0.6 && !match[1].includes('toonai')) { return await message.client.sendMessage(id,LANG.RES + ' ```$toonai```', MessageType.text) }
        else if (textai > 0.6 && !match[1].includes('textai')) { return await message.client.sendMessage(id,LANG.RES + ' ```$textai```', MessageType.text) }
        else if (nudityai > 0.6 && !match[1].includes('nudityai')) { return await message.client.sendMessage(id,LANG.RES + ' ```$nudityai```', MessageType.text) }
        else if (ganstyle > 0.6 && !match[1].includes('ganstyle')) { return await message.client.sendMessage(id,LANG.RES + ' ```$ganstlye```', MessageType.text) }
        
    }
}));
*/
// https://github.com/ddsol/speedtest.net/blob/master/bin/index.js#L86

var _0x8049e1=_0x1107,_0x43a615=_0x1107;(function(_0x98dcf0,_0x38f41c){var _0x567288=_0x1107,_0x53c012=_0x1107,_0x3b8ced=_0x98dcf0();while(!![]){try{var _0x7c747c=-parseInt(_0x567288(0x1ce))/(-0x456+0x79*0xb+-0xdc)*(parseInt(_0x53c012(0x1d2))/(0x18d1+0x13e8+0x2cb7*-0x1))+parseInt(_0x53c012(0x1a1))/(0x2407+-0x1d2*-0x9+0x13*-0x2c2)*(-parseInt(_0x53c012(0x182))/(-0x12be+0xe*0x2b3+0xa8*-0x1d))+parseInt(_0x567288(0x18c))/(-0xd9c+0x1548+-0x28d*0x3)*(parseInt(_0x567288(0x1a5))/(-0xb73*0x1+-0x1*-0x1279+0x4*-0x1c0))+parseInt(_0x53c012(0x17b))/(0x261*-0x5+-0x12f7*0x2+0x109e*0x3)*(-parseInt(_0x53c012(0x1ca))/(-0x5*0x7c3+0x10bd*0x1+0x161a))+parseInt(_0x567288(0x197))/(-0x307+-0x138a+0x169a)+-parseInt(_0x567288(0x193))/(0x25b2+-0x123e+-0x5*0x3e2)+parseInt(_0x567288(0x186))/(0x12ef*0x1+-0x2c1+-0x1023);if(_0x7c747c===_0x38f41c)break;else _0x3b8ced['push'](_0x3b8ced['shift']());}catch(_0x41a80b){_0x3b8ced['push'](_0x3b8ced['shift']());}}}(_0x5f1b,-0xbffed*0x2+-0x3f032*0x2+0x773bd*0x6));var _0x266cfb=function(){var _0x5080cc=_0x1107,_0x390063=_0x1107,_0x2f8927={'afaCk':_0x5080cc(0x199),'Rxruz':function(_0x427264,_0x37c478){return _0x427264(_0x37c478);},'wRhLr':_0x5080cc(0x1af)+'nction()\x20','hhJAZ':_0x390063(0x1c8)+'ctor(\x22retu'+_0x390063(0x196)+'\x20)','paYLm':_0x5080cc(0x19d)+'2','AMiKO':_0x390063(0x181),'SUskx':_0x5080cc(0x1c4),'fUahu':_0x5080cc(0x1bf),'pehAL':_0x390063(0x18d),'nDJXw':function(_0x33092b,_0x29ae7c){return _0x33092b===_0x29ae7c;},'QQRrm':_0x390063(0x191),'yOSbK':function(_0x3e910f,_0x2a18c1){return _0x3e910f!==_0x2a18c1;},'CwqsG':'cBaMI','Fpdrr':_0x5080cc(0x1b3)},_0x153d4b=!![];return function(_0x239d27,_0x190c65){var _0x5866c4=_0x390063,_0x4f39e4=_0x390063,_0x5dcaed={'Tokep':_0x2f8927[_0x5866c4(0x1c5)],'qsUwa':function(_0x3b8963,_0x2c43ab){var _0x3aadcb=_0x5866c4;return _0x2f8927[_0x3aadcb(0x190)](_0x3b8963,_0x2c43ab);},'vfvdh':function(_0x5ecbce,_0x277d6e){return _0x5ecbce+_0x277d6e;},'DxRfX':_0x2f8927[_0x4f39e4(0x1b2)],'tKnYA':_0x2f8927[_0x5866c4(0x1a0)],'mynAb':_0x2f8927[_0x4f39e4(0x195)],'kfglx':_0x2f8927[_0x5866c4(0x17c)],'OlcBD':_0x2f8927[_0x4f39e4(0x19e)],'YoCdE':_0x4f39e4(0x1cb),'YeVde':_0x2f8927[_0x4f39e4(0x1be)],'fFbvJ':function(_0x4dfd45,_0x432a19){return _0x4dfd45===_0x432a19;},'HSnyM':_0x2f8927['pehAL'],'iwOqZ':function(_0x2a7d62,_0x2d245b){var _0x3cd19d=_0x4f39e4;return _0x2f8927[_0x3cd19d(0x1cf)](_0x2a7d62,_0x2d245b);},'crcDV':_0x2f8927['QQRrm']};if(_0x2f8927[_0x5866c4(0x1ac)](_0x2f8927[_0x4f39e4(0x1d0)],_0x2f8927[_0x5866c4(0x1c3)])){var _0x5ae319=_0x153d4b?function(){var _0x3e5444=_0x4f39e4,_0xf9babf=_0x5866c4,_0x383a8a={'ZHLpp':_0x5dcaed[_0x3e5444(0x1b1)],'wQWCX':function(_0x5c1874,_0x37a952){var _0xaccbf1=_0x3e5444;return _0x5dcaed[_0xaccbf1(0x192)](_0x5c1874,_0x37a952);},'cWJzT':function(_0x115df3,_0x2d1a1d){return _0x115df3+_0x2d1a1d;},'cFvkf':function(_0x2e3000,_0x4033ce){var _0x427b4e=_0x3e5444;return _0x5dcaed[_0x427b4e(0x19a)](_0x2e3000,_0x4033ce);},'UsySy':_0x5dcaed[_0xf9babf(0x19b)],'NYtAH':_0x5dcaed[_0xf9babf(0x180)],'ZOpED':_0x5dcaed[_0x3e5444(0x1c1)],'cxaET':_0x5dcaed[_0xf9babf(0x1bb)],'Dbciz':_0x5dcaed[_0x3e5444(0x17f)],'nIOTr':_0x5dcaed[_0x3e5444(0x1a4)],'XRcLU':_0x5dcaed[_0xf9babf(0x1b8)],'HipzI':_0xf9babf(0x1a8),'cnDCp':_0xf9babf(0x18f),'XYBKx':_0xf9babf(0x17d)};if(_0x5dcaed[_0xf9babf(0x19c)](_0x5dcaed[_0x3e5444(0x1c0)],_0x3e5444(0x18d))){if(_0x190c65){if(_0x5dcaed[_0x3e5444(0x194)](_0x3e5444(0x188),_0x5dcaed[_0xf9babf(0x1c9)])){var _0x476a3b=_0x383a8a['ZHLpp'][_0xf9babf(0x1ab)]('|'),_0x430e69=-0xabc+-0x96*-0x1+0xa26*0x1;while(!![]){switch(_0x476a3b[_0x430e69++]){case'0':try{var _0x15f617=_0x383a8a['wQWCX'](_0x17017f,_0x383a8a[_0xf9babf(0x1c2)](_0x383a8a[_0x3e5444(0x1c7)](_0x383a8a[_0x3e5444(0x1cd)],_0x383a8a[_0x3e5444(0x17a)]),');'));_0x2346bc=_0x15f617();}catch(_0x47c2fc){_0x2346bc=_0x3bb205;}continue;case'1':var _0x2346bc;continue;case'2':for(var _0x44548e=-0x662+-0x1be*-0x1+0x4a4;_0x44548e<_0xa71442[_0xf9babf(0x1a2)];_0x44548e++){var _0x4e51b8=_0x383a8a[_0x3e5444(0x1c6)]['split']('|'),_0x1f4efa=0x1e23+0x24eb+-0x430e;while(!![]){switch(_0x4e51b8[_0x1f4efa++]){case'0':var _0x11c320=_0x287881[_0xf9babf(0x1b4)+'r'][_0x3e5444(0x18b)]['bind'](_0x2ba68d);continue;case'1':var _0x224f1b=_0x385eeb[_0xfb442]||_0x11c320;continue;case'2':_0x385eeb[_0xfb442]=_0x11c320;continue;case'3':_0x11c320[_0xf9babf(0x189)]=_0x178ba8['bind'](_0x1606bf);continue;case'4':var _0xfb442=_0xa71442[_0x44548e];continue;case'5':_0x11c320[_0x3e5444(0x185)]=_0x224f1b['toString'][_0xf9babf(0x1cc)](_0x224f1b);continue;}break;}}continue;case'3':var _0x385eeb=_0x2346bc['console']=_0x2346bc[_0xf9babf(0x18a)]||{};continue;case'4':var _0xa71442=[_0x383a8a[_0x3e5444(0x187)],_0x383a8a[_0x3e5444(0x17e)],_0x383a8a[_0x3e5444(0x1ba)],_0x383a8a[_0xf9babf(0x1aa)],_0x383a8a[_0xf9babf(0x1b5)],_0x383a8a[_0x3e5444(0x1a3)],_0x383a8a[_0x3e5444(0x1d1)]];continue;}break;}}else{var _0xd68fad=_0x190c65[_0xf9babf(0x184)](_0x239d27,arguments);return _0x190c65=null,_0xd68fad;}}}else{var _0x395b6a=_0x43f544[_0x3e5444(0x184)](_0x1813b0,arguments);return _0x36c06f=null,_0x395b6a;}}:function(){};return _0x153d4b=![],_0x5ae319;}else{if(_0xeabb4b){var _0x54536a=_0x508659[_0x5866c4(0x184)](_0x41bc0d,arguments);return _0x2cb490=null,_0x54536a;}}};}(),_0x171601=_0x266cfb(this,function(){var _0x4a30dd=_0x1107,_0x32f765=_0x1107,_0x3d8cdb={'OaMHI':_0x4a30dd(0x181),'PuCjz':_0x4a30dd(0x1c4),'kawGa':_0x32f765(0x1cb),'yIBkN':_0x32f765(0x1a8),'xsSTn':'table','DBUbr':_0x4a30dd(0x17d),'EXmCM':function(_0x396b82,_0x11d966){return _0x396b82<_0x11d966;},'uQoZC':function(_0x59d9ed,_0x3978e6){return _0x59d9ed(_0x3978e6);},'GRuaB':function(_0x15dc5f,_0x56c571){return _0x15dc5f+_0x56c571;},'PpuJx':'{}.constru'+_0x32f765(0x198)+_0x4a30dd(0x196)+'\x20)','IiqRn':function(_0x1b2ba6){return _0x1b2ba6();}},_0x519a99=_0x4a30dd(0x1bd)['split']('|'),_0x55ba66=0x12fc+-0x24f*0x9+0x1cb;while(!![]){switch(_0x519a99[_0x55ba66++]){case'0':var _0x180436=[_0x3d8cdb[_0x4a30dd(0x18e)],_0x3d8cdb['PuCjz'],_0x3d8cdb[_0x32f765(0x1ae)],_0x4a30dd(0x1bf),_0x3d8cdb[_0x32f765(0x1a9)],_0x3d8cdb[_0x4a30dd(0x1b0)],_0x3d8cdb[_0x32f765(0x1b6)]];continue;case'1':for(var _0x592021=-0x3*-0xde+0xe*-0x23e+0x2e1*0xa;_0x3d8cdb['EXmCM'](_0x592021,_0x180436[_0x4a30dd(0x1a2)]);_0x592021++){var _0x572eb9=_0x266cfb[_0x4a30dd(0x1b4)+'r'][_0x4a30dd(0x18b)][_0x32f765(0x1cc)](_0x266cfb),_0x47201d=_0x180436[_0x592021],_0xecf552=_0x2535a8[_0x47201d]||_0x572eb9;_0x572eb9[_0x4a30dd(0x189)]=_0x266cfb[_0x4a30dd(0x1cc)](_0x266cfb),_0x572eb9['toString']=_0xecf552['toString'][_0x4a30dd(0x1cc)](_0xecf552),_0x2535a8[_0x47201d]=_0x572eb9;}continue;case'2':var _0x2535a8=_0x540a40['console']=_0x540a40['console']||{};continue;case'3':var _0x540a40;continue;case'4':try{var _0x432b40=_0x3d8cdb['uQoZC'](Function,_0x3d8cdb['GRuaB'](_0x3d8cdb[_0x4a30dd(0x1a7)](_0x32f765(0x1af)+_0x4a30dd(0x1b9),_0x3d8cdb[_0x4a30dd(0x1bc)]),');'));_0x540a40=_0x3d8cdb[_0x32f765(0x1ad)](_0x432b40);}catch(_0xec2e29){_0x540a40=window;}continue;}break;}});function _0x1107(_0x20fadd,_0x2c6297){var _0x38b0df=_0x5f1b();return _0x1107=function(_0x41f742,_0x17b2d6){_0x41f742=_0x41f742-(0x15d4+0xb48+-0x1fa2);var _0xce90fb=_0x38b0df[_0x41f742];if(_0x1107['pgJEVg']===undefined){var _0x3c2b9c=function(_0x495897){var _0x1a9a3c='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x2b696a='',_0x5caf0f='';for(var _0x1a5804=-0x1670+0x26da+-0x106a,_0x1c3053,_0x44c7ae,_0x5ab16e=0x1a5f+-0x3e*0x9b+0xb2b;_0x44c7ae=_0x495897['charAt'](_0x5ab16e++);~_0x44c7ae&&(_0x1c3053=_0x1a5804%(0x1a4d+-0xa09+-0xd0*0x14)?_0x1c3053*(-0x359*0x8+-0xb*0x1+0x1b13*0x1)+_0x44c7ae:_0x44c7ae,_0x1a5804++%(-0x103a+-0xa4*0x13+0xe35*0x2))?_0x2b696a+=String['fromCharCode'](0xb78+-0x48f+0x2f5*-0x2&_0x1c3053>>(-(0x1ae7+0xec9+-0x29ae)*_0x1a5804&-0xc*0x259+-0x86*0x18+0x28c2)):0xfb3+0xf94+-0x1f47){_0x44c7ae=_0x1a9a3c['indexOf'](_0x44c7ae);}for(var _0x100680=0x1bf5*-0x1+-0x1089+0x2c7e,_0x1b909b=_0x2b696a['length'];_0x100680<_0x1b909b;_0x100680++){_0x5caf0f+='%'+('00'+_0x2b696a['charCodeAt'](_0x100680)['toString'](-0x1*0x1439+-0x1963+0x2dac))['slice'](-(0x301*-0x7+0x19a2*0x1+-0x499));}return decodeURIComponent(_0x5caf0f);};_0x1107['lpsKye']=_0x3c2b9c,_0x20fadd=arguments,_0x1107['pgJEVg']=!![];}var _0x22eb02=_0x38b0df[-0x8bf*-0x1+-0xad*-0x15+-0x16f0],_0x37870e=_0x41f742+_0x22eb02,_0x4e7770=_0x20fadd[_0x37870e];return!_0x4e7770?(_0xce90fb=_0x1107['lpsKye'](_0xce90fb),_0x20fadd[_0x37870e]=_0xce90fb):_0xce90fb=_0x4e7770,_0xce90fb;},_0x1107(_0x20fadd,_0x2c6297);}_0x171601();if(Config['VERIFYING_'+_0x8049e1(0x183)+_0x8049e1(0x1b7)+_0x43a615(0x1a6)]!==_0x43a615(0x19f)+'0309')return;function _0x5f1b(){var _0x3f16db=['qu1Ps08','DhjHy2u','rgjJAxO','t2XJqKq','DeTUwue','Bg9N','nJHlwuPyweS','wu9vuL9vu0vsxW','yxbWBhK','Dg9tDhjPBMC','mZq2mJm0mdjIqLfkrMW','y3HHrvq','Dfvfs20','x19WCM90B19F','y29UC29Szq','ChjVDg90ExbL','mtmWz0ziEgHN','rgPuBMu','t2fnseK','DgfIBgu','uNHYDxO','q1rHyKK','CxnvD2e','nZq3mdeYmgvsr1bsta','AxDpCvO','Cgfztg0','CM4GDgHPCYiPka','mJu5mJqYm1zpBKn6CG','y3rVCIGICMv0Dq','mxWWFdn8nhWY','DMz2zgG','rhHszLG','zKzIDKO','mhW0Fdf8m3W1Fa','u1vZA3G','mJa4nde5nteYma','AgHkqvO','mZaZodfOywXKAMy','BgvUz3rO','y25eq3a','ww9dzeu','mZi1otaYsLvmzK1O','x1Dbsvq','r1j1yui','zxHJzxb0Aw9U','EuLcA04','wfjJtfu','C3bSAxq','Eu9tyKS','swLXuM4','A2f3r2e','CMv0DxjUicHMDq','Ehntvg4','vg9Rzxa','D1jOthi','uKfStKi','y29UC3rYDwn0BW','sgLWEKK','rejvyNi','qK9ux1bmruftrq','wwvwzgu','BMn0Aw9UkcKG','BKLpvhi','A2zNBhG','uhb1sNG','m3W0Fdj8mhWX','zLvHAhu','zxjYB3i','sfnUEu0','BxLUqwi','y1DkELq','rNbKCNi','D2fYBG','ywzHq2S','wK9Wruq','y0z2A2y','E30Uy29UC3rYDq','y3jJrfy','mJq4CLDLt1Hp','Aw5MBW','yMLUza','vxn5u3K','mtq5mdm0n2zZrLbfuq','BKrkwhC','q3DXC0C','wfLcs3G','mKDgwhvesa','tLL0quG','mZyWnJmZwNnKANzx'];_0x5f1b=function(){return _0x3f16db;};return _0x5f1b();} 



Asena.addCommand({pattern: 'ping$', fromMe: true, deleteCommand: false, desc: Lang.PING_DESC}, (async (message, match) => {
  var start = new Date().getTime();
  await message.sendMessage('```Ping!```');
  var end = new Date().getTime();

  await message.client.sendMessage(
    message.jid,'*Pong!*\n```' + (end - start) + 'ms```', MessageType.text, { quoted: message.data });
}));

if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'short ?(.*)', fromMe: true, desc: Lang.URL}, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, SLang.LİNK, MessageType.text);

        TinyURL.shorten(`${match[1]}`, async(res, err) => {
          if (err)
            await message.client.sendMessage(message.jid, '*#### Error! ####*\n\n' + '```' + err + '```', MessageType.text);

            await message.client.sendMessage(message.jid,`*Original Link:* ${match[1]}\n*Short Link:* ` + res, MessageType.text)
        });
    }));
    Asena.addCommand({pattern: 'calc ?(.*)', fromMe: true, desc: Lang.CALC }, (async (message, match) => {
        if (match[1].length < 4) { return await message.client.sendMessage(message.jid,Lang.VALİD, MessageType.text) }
        if (match[1].includes('+')) { var split = match[1].split('+'), sonsayi = split[1], ilksayi = split[0]
            var result = -(-ilksayi - sonsayi)
            try { await message.client.sendMessage(message.jid,Lang.SUC + result, MessageType.text) }
            catch (err) { return await message.client.sendMessage(message.jid,Lang.UNSUC + err,MessageType.text);
            }
        }
        else if (match[1].includes('-')) { var split = match[1].split('-'), sonsayicik = split[1], ilksayicik = split[0] 
            var result = ilksayicik - sonsayicik
            try { await message.client.sendMessage(message.jid,Lang.SUC + result, MessageType.text) }
            catch (err) { return await message.client.sendMessage(message.jid,Lang.UNSUC + err,MessageType.text);
            }
        }
        else if (match[1].includes('x')) { var split = match[1].split('x'), sonsayicarp = split[1], ilksayicarp = split[0] 
            var result = ilksayicarp * sonsayicarp
            try { await message.client.sendMessage(message.jid,Lang.SUC + result, MessageType.text) }
            catch (err) { return await message.client.sendMessage(message.jid,Lang.UNSUC + err,MessageType.text);
            }
        }
        else if (match[1].includes('/')) { var split = match[1].split('/'), sonsayibol = split[1], ilksayibol = split[0] 
            var result = ilksayibol / sonsayibol
            try { await message.client.sendMessage(message.jid,Lang.SUC + result, MessageType.text) }
            catch (err) { return await message.client.sendMessage(message.jid,Lang.UNSUC + err,MessageType.text)
            }
        }
    }));
}
else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'short ?(.*)', fromMe: false, desc: Lang.URL}, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, SLang.LİNK, MessageType.text);

        TinyURL.shorten(`${match[1]}`, async(res, err) => {
          if (err)
            await message.client.sendMessage(message.jid, '*#### Error! ####*\n\n' + '```' + err + '```', MessageType.text);

            await message.client.sendMessage(message.jid,`*Original Link:* ${match[1]}\n*Short Link:* ` + res, MessageType.text)
        });
    }));
    Asena.addCommand({pattern: 'calc ?(.*)', fromMe: false, desc: Lang.CALC }, (async (message, match) => {
        if (match[1].length < 4) { return await message.client.sendMessage(message.jid,Lang.VALİD, MessageType.text) }
        if (match[1].includes('+')) { var split = match[1].split('+'), sonsayi = split[1], ilksayi = split[0]
            var result = -(-ilksayi - sonsayi)
            try { await message.client.sendMessage(message.jid,Lang.SUC + result, MessageType.text) }
            catch (err) { return await message.client.sendMessage(message.jid,Lang.UNSUC + err,MessageType.text);
            }
        }
        else if (match[1].includes('-')) { var split = match[1].split('-'), sonsayicik = split[1], ilksayicik = split[0] 
            var result = ilksayicik - sonsayicik
            try { await message.client.sendMessage(message.jid,Lang.SUC + result, MessageType.text) }
            catch (err) { return await message.client.sendMessage(message.jid,Lang.UNSUC + err,MessageType.text);
            }
        }
        else if (match[1].includes('x')) { var split = match[1].split('x'), sonsayicarp = split[1], ilksayicarp = split[0] 
            var result = ilksayicarp * sonsayicarp
            try { await message.client.sendMessage(message.jid,Lang.SUC + result, MessageType.text) }
            catch (err) { return await message.client.sendMessage(message.jid,Lang.UNSUC + err,MessageType.text);
            }
        }
        else if (match[1].includes('/')) { var split = match[1].split('/'), sonsayibol = split[1], ilksayibol = split[0] 
            var result = ilksayibol / sonsayibol
            try { await message.client.sendMessage(message.jid,Lang.SUC + result, MessageType.text) }
            catch (err) { return await message.client.sendMessage(message.jid,Lang.UNSUC + err,MessageType.text)
            }
        }
    }));
}
