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
    if (message.content.startsWith(prefix + 'help')) {
    let pages = [`
     اوامر لصفحة 1
      `
    ,`
اوامر الصفحة2
    ,`
 اوامر الصفحة3
     `

    ,`
اوامر صفحة 4
     `
    ,`
 اوامر الصفحة 5
    `
    ,`
اوامر الصفة 6
     `

     ,`
 اوامر الصفحة 7
     `

     ,`
  اوامر الصفة 8
    `]
     let page = 1;
     
        let embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setFooter(`Page ${page} of ${pages.length}`)
        .setDescription(pages[page-1])
     
        message.channel.send(embed).then(msg => {
     
            msg.react('◀').then( r => {
                msg.react('▶')
     
               setTimeout(() => {
            msg.delete
        }, 60 * 1000)
     
            const backwardsFilter = (reaction, user) => reaction.emoji.name === '◀' && user.id === message.author.id;
            const forwardsFilter = (reaction, user) => reaction.emoji.name === '▶' && user.id === message.author.id;
     
     
            const backwards = msg.createReactionCollector(backwardsFilter, { time: 2000000});
            const forwards = msg.createReactionCollector(forwardsFilter, { time: 2000000});
     
     
     
            backwards.on('collect', r => {
                if (page === 1) return;
                page--;
                embed.setDescription(pages[page-1]);
                embed.setFooter(`Page ${page} of ${pages.length}`);
                msg.edit(embed)
            })
            forwards.on('collect', r => {
                if (page === pages.length) return;
                page++;
                embed.setDescription(pages[page-1]);
                embed.setFooter(`Page ${page} of ${pages.length}`);
                msg.edit(embed)
            })
            })
        })
        }
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
