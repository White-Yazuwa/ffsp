const cobra = require('../events');
const config = require('../config');
const {MessageType} = require('@adiwajshing/baileys');

const Language = require('../language');
const Lang = Language.getString('_asena');

if (config.WORKTYPE == 'private') {

    cobra.addCommand({pattern: 'cpanel ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
        var topText, bottomText; 
        if (config.CMDP_STICK.includes('/')) {
            var split = config.CMDP_STICK.split('/');
            topText = split[0];
            bottomText = split[1];
        } else {
            topText = config.CMDP_STICK;
            bottomText = '';
        }

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }

        var CMD_HELP = '';
        if (match[1] === '') {
            cobra.commands.map(
                async (command) =>  {
                    if (command.dontAddCommandList || command.pattern === undefined) return;
                    try {
                        var match = command.pattern.toString().match(/(\W*)([A-Za-zğüşiöç1234567890]*)/);
                    } catch {
                        var match = [command.pattern];
                    }
    
                    var HANDLER = '';
    
                    if (/\[(\W*)\]/.test(config.HANDLERS)) {
                        HANDLER = config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                    } else {
                        HANDLER = '.';
                    }
                    CMD_HELP += topText + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + match[2]) : command.pattern) + (command.desc === '' ? '```\n\n' : '```\n');
                    if (command.desc !== '') CMD_HELP += bottomText + Lang.DESC + ':* ```' + command.desc + (command.warn === '' ? '```\n\n' : '```\n');
                    if (command.usage !== '') CMD_HELP += bottomText + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
                    if (command.warn !== '') CMD_HELP += '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n';

                }
            );
        
            if (config.CMDP_MSG == 'default') {
                await message.client.sendMessage(
                    message.jid,'╔═══════════════════════╗\n 🐍 COBRA WᷤHͥAᷤTᷴSᷯAᷧPP BOT (Private)🆕\n╚═══════════════════════╝\n\n' + CMD_HELP, MessageType.text);
                    }
        else {
                    await message.client.sendMessage(
                    message.jid,config.CMDP_MSG + '\n\n' + CMD_HELP, MessageType.text);
                    }      
        } else {

            if (message.jid === '905524317852-1612300121@g.us') {

                return;
            }
            var CMD_HELP = '';
            cobra.commands.map(
                async (command) =>  {
                    if (command.dontAddCommandList || command.pattern === undefined) return;
                    try {
                        var cmatch = command.pattern.toString().match(/(\W*)([A-Za-zğüşiöç1234567890]*)/);
                    } catch {
                        var cmatch = [command.pattern];
                    }
                
                    if (cmatch[2] == match[1]) {
                        var HANDLER = '';
    
                        if (/\[(\W*)\]/.test(config.HANDLERS)) {
                            HANDLER = config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                        } else {
                            HANDLER = '.';
                        }
                        CMD_HELP += topText + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmatch[2]) : command.pattern) + (command.desc === '' ? '```\n\n' : '```\n');
                        if (command.desc !== '') CMD_HELP += bottomText + Lang.DESC + ':* ```' + command.desc + (command.warn === '' ? '```\n\n' : '```\n');
                        if (command.usage !== '') CMD_HELP += bottomText + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
                        if (command.warn !== '') CMD_HELP += '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n';

                    }
                }
            );
            if (config.CMDP_MSG == 'default') {
                await message.client.sendMessage(
                    message.jid,'╔═══════════════════════╗\n 🐍 COBRA WᷤHͥAᷤTᷴSᷯAᷧPP BOT (Private)🆕\n╚═══════════════════════╝\n\n' + CMD_HELP, MessageType.text);
                    }
        else {
                    await message.client.sendMessage(
                    message.jid,config.CMDP_MSG + '\n\n' + CMD_HELP, MessageType.text);
                    }  
        }
    }));
}
else if (config.WORKTYPE == 'public') {

    cobra.addCommand({pattern: 'cpanel ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
        var topText, bottomText; 
        if (config.CMDP_STICK.includes('/')) {
            var split = config.CMDP_STICK.split('/');
            topText = split[0];
            bottomText = split[1];
        } else {
            topText = config.CMDP_STICK;
            bottomText = '';
        }

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }

        var CMD_HELP = '';
        if (match[1] === '') {
            cobra.commands.map(
                async (command) =>  {
                    if (command.dontAddCommandList || command.pattern === undefined) return;
                    try {
                        var match = command.pattern.toString().match(/(\W*)([A-Za-zğüşiöç1234567890]*)/);
                    } catch {
                        var match = [command.pattern];
                    }
    
                    var HANDLER = '';
    
                    if (/\[(\W*)\]/.test(config.HANDLERS)) {
                        HANDLER = config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                    } else {
                        HANDLER = '.';
                    }
                    CMD_HELP += topText + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + match[2]) : command.pattern) + (command.desc === '' ? '```\n\n' : '```\n');
                    if (command.desc !== '') CMD_HELP += bottomText + Lang.DESC + ':* ```' + command.desc + (command.warn === '' ? '```\n\n' : '```\n');
                    if (command.usage !== '') CMD_HELP += bottomText + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
                    if (command.warn !== '') CMD_HELP += '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n';

                }
            );
        
            if (config.CMDP_MSG == 'default') {
                await message.client.sendMessage(
                    message.jid,'╔═══════════════════════╗\n 🐍 COBRA WᷤHͥAᷤTᷴSᷯAᷧPP BOT (Private)🆕\n╚═══════════════════════╝\n\n' + CMD_HELP, MessageType.text);
                    }
        else {
                    await message.client.sendMessage(
                    message.jid,config.CMDP_MSG + '\n\n' + CMD_HELP, MessageType.text);
                    }      
        } else {

            if (message.jid === '905524317852-1612300121@g.us') {

                return;
            }
            var CMD_HELP = '';
            cobra.commands.map(
                async (command) =>  {
                    if (command.dontAddCommandList || command.pattern === undefined) return;
                    try {
                        var cmatch = command.pattern.toString().match(/(\W*)([A-Za-zğüşiöç1234567890]*)/);
                    } catch {
                        var cmatch = [command.pattern];
                    }
                
                    if (cmatch[2] == match[1]) {
                        var HANDLER = '';
    
                        if (/\[(\W*)\]/.test(config.HANDLERS)) {
                            HANDLER = config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                        } else {
                            HANDLER = '.';
                        }
                        CMD_HELP += topText + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmatch[2]) : command.pattern) + (command.desc === '' ? '```\n\n' : '```\n');
                        if (command.desc !== '') CMD_HELP += bottomText + Lang.DESC + ':* ```' + command.desc + (command.warn === '' ? '```\n\n' : '```\n');
                        if (command.usage !== '') CMD_HELP += bottomText + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
                        if (command.warn !== '') CMD_HELP += '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n';

                    }
                }
            );
            if (config.CMDP_MSG == 'default') {
                await message.client.sendMessage(
                    message.jid,'╔═══════════════════════╗\n 🐍 COBRA WᷤHͥAᷤTᷴSᷯAᷧPP BOT (Private)🆕\n╚═══════════════════════╝\n\n' + CMD_HELP, MessageType.text);
                    }
        else {
                    await message.client.sendMessage(
                    message.jid,config.CMDP_MSG + '\n\n' + CMD_HELP, MessageType.text);
                    }  
        }
    }));
}
