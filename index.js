const { AoiClient, LoadCommands, CustomEvent, AoiError } = require("aoi.js");//We're authorized "aoijs" as our bot in here, you can type anything you want. 
const memeks = require('./config.js'); //This will be our configuration file. I didn't want your main file be messy. 
const bot = new AoiClient(memeks.Bot);


//Clinet status
bot.status({
  text: "Vackra",
  type: "PLAYING",
  status: "idle",
  time: 10
})

bot.variables(require('./variables.js'));

//Ready Event

bot.readyCommand({
    channel: "",
    code: `$log[Ready on $userTag[$clientID]]`
})

// Advanced setup where you can choose which parsers to be updated
const { Util } = require('aoi.js');
const { parse, createAst } = require('aoi.parser');
const {
    parseExtraOptions
} = require('aoi.parser/components');

Util.parsers.ErrorHandler = parse;

Util.parsers.OptionsParser = (data) => {
    return createAst(data).children.map(parseExtraOptions);
}
//Command Handler loader
const loader = new LoadCommands(bot);
loader.load(bot.cmd,'./commands/')

setInterval(() => {
  if (!bot || !bot.user) {
    console.log("Client Login't, Process Kill")
    process.kill(1);
  }
}, 2000);  
