const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('./config.json');
const luaModule = require('./lua');
const jsModule = require('./js');

const PREFIX = '-';

bot.on('ready', () => {
    console.log('This bot is online!');
    bot.user.setActivity('-h, -help', { type: 'LISTENING' });
})

bot.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ");

    const command = args[0].toLowerCase();
    const lua = args[1] === '-l' || args[1] === '-lua'

    switch (command) {
        //Basic commands (doc,website,repo)
        case 'l':
        case 'lua':
            lua = true
        case 'h':
        case 'help':
            message.channel.send(`
Usages: 
**-d, -doc** documentations. 
**-l, -lua** addition argument for querying Lua docs, it's JavaScript if no -l. Usage: \`-touchDown -l\`.
**-s, -site** website. 
**-r, -repo** repositories.
**-m, -mach** mach port error.
**-a, -about** what AutoTouch is.`)
            break;
        case 'd':
        case 'doc':
            message.channel.send(lua ? luaModule.luaMessage : jsModule.luaMessage);
            break;
        case 's':
        case 'site':
            message.channel.send(`
https://autotouch.net/`)
            break;
        case 'r':
        case 'repo':
            message.channel.send(`
- Official repo: **https://repo.autotouch.net/**  
- Beta repo: **https://beta.autotouch.net/**`)
            break;
        case 'a':
        case 'about':
            message.channel.send(`
AutoTouch is a **Macro** tool for jailbroken iOS devices that allows you to **record** and **playback** your touch actions on the mobile devices, while it also **executes** custom Lua scripts with a batch of extension functions. AutoTouch has an embedded **store** where you can **purchase** or **sell** your scripts. If one does not exist you may either code it yourself or commission it from another author.
AutoTouch supports jailbroken iOS only at present.`)
            break;
        //Document Commands   
        case 'luacurl':
            message.channel.send(`
*curl* is used in command lines or scripts to transfer data. Do -LuaCURL Support to see what it supports.
Example:
https://pastebin.com/1hhuWhPS`)
            break;
        case 'luasocket':
        case 'luasec':
        case 'luasqlite3':
        case 'json':
        case "plist":
        case "penlight":
        case "luafilesystem":
        case "websocket":
        case "playaudio":
        case "stopaudio":
        case "getorientation":
        case "getscreenresolution":
        case "islicensed":
            message.channel.send(luaModule.apiMessage(command));
            break;
        case "touchdown":
        case "touchmove":
        case "touchup":
        case "keydown":
        case "keyup":
        case "getcolor":
        case "findcolor":
        case "findcolors":
        case "findimage":
        case "screenshot":
        case "apprun":
        case "appkill":
        case "appstate":
        case "rootdir":
        case "usleep":
        case "log":
        case "alert":
        case "toast":
        case "vibrate":
        case "getsn":
        case "getversion":
        case "frontmostappid":
        case "frontmostapporientation":
        case "intToRgb(intColor)":
        case "rgbtoint":
        case "copytext":
        case "cliptext":
        case "inputtext":
        case "dialog":
        case "cleardialogvalues":
        case "openurl":
        case "setautolaunch":
        case "listautolaunch":
            message.channel.send(lua ? luaModule.apiMessage(command) : jsModule.apiMessage(command));
            break;
        case "getdeviceorientation":
        case "getscreeninfo":
            message.channel.send(jsModule.apiMessage(command));
            break;
        case "m":
        case "mach":
            message.channel.send(`
When you got Mach error "Send message failed, error operation couldn’t be completed. (Mach error 268435459 - (ipc/send) invalid destination port)", you have two ways to try: 
1. upgrade RocketBootstrap to 1.0.7~beta3 or above from official repo: http://rpetri.ch/repo/
2. rejailbreak (maybe serval times) .
3. Factory reset, rejailbreak, install the latest RocketBootstrap from official repo.`)
            break;
        case "author":
            message.channel.send(`Here are some trusted authors.
**<@294623609786204160>** 
**<@530284644034150401>**
*DM <@572158805304017005> if you wnat to be on the list.* `)
            break;
    }

})

bot.login(config.token);