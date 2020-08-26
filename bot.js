const Discord = require("discord.js");
const client = new Discord.Client();
var prefix ="!";
var adminprefix = '-'
const developers = ["436918120184021012"]
const config = require("./config.json");

 client.on('ready', function(){
    var ms = 10000 ;
    var setGame = ['Dev: MrBloods','MrBloods'];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`http://www.twitch.tv/MrBloods`);
    }, ms);
console.log("==================================")
console.log("1")
console.log("2")
console.log("3")
console.log("=========> Bot Online <=========")
console.log("========> MrBloodsBot <========")
console.log("=======> Token Bot **** <=======")
console.log("3")
console.log("2")
console.log("1")
console.log("====================================")
});

client.on("ready", () => {
let BotOnline = client.channels.get("745991971973234729");// ايدي الروم
  
  let online = new Discord.RichEmbed()
    .setTitle('| ON')
    .setColor("GREEN")
  //.addField('Guilds Info', `Users: **${client.users.size}** \nChannels: **${client.channels.size}** \nGuilds **${client.guilds.size}** `)
 //  .addField('Some bot  Info', `Platform: **${process.platform}** \nAs.arch}** \nNode Version **${process.version}** \nPrefix **${prefix}**`) // process.platform
    .setTimestamp();
  BotOnline.send(online);

});

client.on("message", message => {
    if (message.content === "!help admin") {
     const embed = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setTitle("Admin Commands")
    .setThumbnail(message.author.avatarURL)
    .addField("❖ !move @user", "Move User To Your Room Voice")
    .addField("❖ !mvall", "Custom commands")
    .addField("!roleremove @user <rank>", "remove Rank From User")
    .addField("!role all <rank>", "Give All Rank")
    .addField("!role bots <rank>", "Give Bots Rank")
    .addField("!role humans <rank>", "Give Humans Rank")
    .addField("Questions", "If you have any questions feel free to ask in the [Support Server](https://discord.gg/zvvasbc)")
    .setFooter("Bot By MrBloods", "hhttps://cdn.discordapp.com/avatars/436918120184021012/4d53dd8fb3145d9740bb29c3a4259b2a.png?size=2048")

    message.channel.send(embed)
     }
});

client.login(process.env.BOT_TOKEN);
