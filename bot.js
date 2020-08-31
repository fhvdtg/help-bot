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

client.on('message', async msg => {//Shady Craft YT#4176
    var prefix = "$";//Shady Craft YT#4176
    var user = msg.author;//Shady Craft YT#4176
        if (msg.content === (prefix +'help')) {
        if(!msg.channel.guild) return msg.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
        
//Shady Craft YT#4176
msg.channel.send({embed: new Discord.RichEmbed()
 .setAuthor(client.user.username , client.user.avatarURL)
 .setThumbnail(msg.author.avatarURL)
 .setTitle(`Welcome To ${msg.guild.name}`)
           .setFooter(`- Requested By: ${msg.author.tag}`,msg.author.avatarURL)
  .setURL('')
 .setDescription(`**اذا كنت تريد الاوامر العامة اضغط الرياكشن** 🌏 n**اذا كنت تريد الاوامر الادارية اضغط الرياكشن**🔧 n**اذا كنت تريد بعض الشرح عن البوت اضغط الرياكشن**💥 n**اذا كنت تريد الالغاء اضغط الرياكشن **❌n              **وشكرا لمستخدمين البوت**`)
 
 .setTimestamp()
}).then(zg => {
     zg.react('🌏').then(r=>{
     zg.react('🔧').then(r=>{
     zg.react('💥').then(r=>{
     zg.react('❌').then(r=>{
 var aaa = (reaction, user) => reaction.emoji.name === '🌏' && user.id === msg.author.id;
   var mmm = (reaction, user) => reaction.emoji.name === '🔧' && user.id === msg.author.id;
    var vvv = (reaction, user) => reaction.emoji.name === '💥' && user.id === msg.author.id;
    var ccc = (reaction, user) => reaction.emoji.name === '❌' && user.id === msg.author.id;
 
    var aa = zg.createReactionCollector(aaa, { maxMatches:1 , time: 60000 , });
    var mm = zg.createReactionCollector(mmm, { maxMatches:1 , time: 60000 , });
    var vv = zg.createReactionCollector(vvv, { maxMatches:1 , time: 60000 , });
    var cc = zg.createReactionCollector(ccc, { maxMatches:1 , time: 60000 , });
 
aa.on("collect", r => {
    zg.edit({embed: new Discord.RichEmbed()
 .setAuthor(client.user.username , client.user.avatarURL)
 .setThumbnail(msg.author.avatarURL)
 .setTitle(`Welcome To ${msg.guild.name}`)
          .setFooter(`- Requested By: ${msg.author.tag}`,msg.author.avatarURL)
  .setURL('')
.setDescription(`** اكتب هنا الاوامر ** `)
 .setTimestamp()
    });
 
 
    })//b
mm.on("collect", r => {
    zg.edit({embed: new Discord.RichEmbed()
 .setAuthor(client.user.username , client.user.avatarURL)
 .setThumbnail(msg.author.avatarURL)
 .setTitle(`Welcome To ${msg.guild.name}`)
           .setFdy Craft YT#4176
    })
vv.on("collect", r => {//Shady Craft YT#4176
    zg.edit({embed: new Discord.RichEmbed ()
.setAuthor(client.user.username , client.user.avatarURL)
 .setThumbnail(msg.author.avatarURL)
 .setTitle(`Welcome To ${msg.guild.name}`)
           .setFooter(`- Requested By: ${msg.author.tag}`,msg.author.avatarURL)
  .setURL('')
.setDescription(`** اكتب الاوامر ** `)
 
 .setTimestamp()
    });
 
})
cc.on("collect", r => {
    zg.delete();
    msg.delete();
})
     }).then(msg => msg.delete(15000));
     })
     })
     })
})
     }
     });ooter(`- Requested By: ${msg.author.tag}`,msg.author.avatarURL)//Shady Craft YT#4176
.setURL('')//Shady Craft YT#4176
.setDescription(`** اكتب هنا الاوامر ** `)//Shady Craft YT#4176
.setTimestamp()//Shady Craft YT#4176
    });//Shady Craft YT#4176
 //Shady Craft YT#4176
    })
vv.on("collect", r => {//Shady Craft YT#4176
    zg.edit({embed: new Discord.RichEmbed ()
.setAuthor(client.user.username , client.user.avatarURL)
 .setThumbnail(msg.author.avatarURL)
 .setTitle(`Welcome To ${msg.guild.name}`)
           .setFooter(`- Requested By: ${msg.author.tag}`,msg.author.avatarURL)
  .setURL('')
.setDescription(`** اكتب الاوامر ** `)
 
 .setTimestamp()
    });
 
})
cc.on("collect", r => {
    zg.delete();
    msg.delete();
})
     }).then(msg => msg.delete(15000));
     })
     })
     })
})
     }
     });

client.login(process.env.BOT_TOKEN);
