const Discord = require("discord.js");
const client = new Discord.Client();
var prefix ="!";
var adminprefix = '-'
const developers = ["436918120184021012"]

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

client.on('message', message => {   
     if (message.content === "!ping") {
      const embed = new Discord.RichEmbed()
 
  .setColor("RANDOM")
  .addField('``Ping:`` ' , `${Date.now() - message.createdTimestamp}` + ' ms`')
 

  message.channel.sendEmbed(embed);
    }
}); 



client.on('message', message => {
    if (message.content === '!help test!') {
        let helpEmbed = new Discord.RichEmbed()
        .setColor('#609da5')
        .setThumbnail(client.user.avatarURL)
        .setTitle('🎯 Test Commands :test2: 🎯')
        .addField('!test', "test")
        .addField('!test', 'test test :test2:')
        .addField('!test', 'test test test :test2:')
        .setFooter(' Bot By MrBloods © :test2:')
      message.channel.send(helpEmbed);
    }
});


client.on('message', message => {
    if (message.content === '!help') {
        let helpEmbed = new Discord.RichEmbed()
        .setColor('#609da5')
        .setThumbnail(client.user.avatarURL)
        .setAuthor(client.user.username,client.user.avatarURL)
        .addField('!help', "Show Help Commands")
        .addField('!help system ', 'Show System Commands')
        .addField('!help public', 'Show Public Commands')
        .addField('!help Games', 'Show Games Commands')
        .addField('!help Music', 'Show Music Commands')
        .setFooter('Help Bot By MrBloods ©')
      message.channel.send(helpEmbed);
    }
});


client.on('message', message => {
    if (message.content === '!help system') {
        let helpEmbed = new Discord.RichEmbed()
        .setColor('#609da5')
        .setThumbnail(client.user.avatarURL)
        .setTitle('🎯 System Commands 🎯')
        .addField('!move', "Move User To Your Room Voice")
        .addField('!mvall', 'Move All To Your Room Voice')
        .addField('!roleremove', 'remove Rank From User')
        .addField('!role all/humans/bits', 'Give All/JustHumans/JustBots Rank')
        .addField('!clear', 'Clear Chat With Number')
        .addField('!clearall', 'Clear Chat (100 messages)')
        .addField('!mute', 'Mute User')
        .addField('!unmute', 'UnMute User')
        .addField('!kick', 'Kick User From Server')
        .addField('!ban', 'Ban User From Server')
        .addField('!mutechannel', 'Mute Channel')
        .addField('!unmutechannel', 'UnMute Channel')
        .addField('!kv', 'Voice Kick')
        .addField('!vonline', 'Create Channel Voice Online')
        .setFooter('System Bot By MrBloods ©')
      message.channel.send(helpEmbed);
    }
});

client.login(process.env.BOT_TOKEN);
