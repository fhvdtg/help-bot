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

client.on('message', message => {
 var prefix = "-";
if (message.content.startsWith(prefix + 'help')) {
    let pages = [
	`=-=-=-=-=-= 🌍 Public Commands 🌍 =-=-=-=-=-=
     ✴ -sug =====> To Suggest | لعمل اقتراح
    ✴ -id ======> To Show Your ID | ايدي حسابك
    ✴ -ping ====> Ping Of Bot | بنج حك البوت
    ✴ -allbots => Show All Bots In The Server | لاضهار جميع البوتات
    ✴ -bot =====> Information Of The Bot | معلومات البوت
    ✴ -server ==> Information Of The Server | معلومات السيرفر
    ✴ -count ===> Member Count | عدد الاشخاص في السيرفر
    ✴ -cal =====> To Calculate | اله لحاسبة 
    ✴ -tag =====> To Tag A Word | لعمل تاق لكلمة 
    ✴ -rooms ===> Show Rooms Of Server | اضهار الرومات الي في السيرفر
    ✴ -za5 =====> To decorate Some Word | لزخرفة الكلمات
    ✴ -roles ===> Show Roles Of The Server | اضهار الرانكات
    ✴ -emojis ==> Emoji Of Server | ايموجيات السيرفر   
    ✴ -say =====> The Bot Say Any Thing | تكرار اي شي كتبتو
    ✴ -image ===> To Show Image Of Server | لاضهار صورة السيرف 
    ✴ -contact => To Contact Owners Bot | مراسلة صاحب البوت
    ✴ -invite \ -inv => Invite Bot | لدعوة البوت
    ✴ -embed ===> To Embed | لتكرار اي شي كتبتو بطريقة حلوة
    ✴ -avatar ==> Your Avatar | صورتك الشخصية
    ✴ -support => Server Support | سيرفر الدعم الفني
     ===========================================================
      React With ▶ To See Admins Commands`,
	`=-=-=-=-=-= :wrench:  Admin Commands - :wrench: =-=-=-=-=-=
    ❖ -move @user => Move User To Your Room Voice | 
    ❖ -mvall => Move All To Your Room Voice | 

    ❖ -roleremove @user <rank> => remove Rank From User | 
    ❖ -role all <rank> => Give All Rank | 
    ❖ -role humans <rank> => Give Humans Rank | 
    ❖ -role bots <rank> => Give Bots Rank | 
    ❖ -hchannel => Hide Channel | (Soon)
    ❖ -schannel => Show The Hidden Channel | (Soon)
    ❖ -clear <numbr> => Clear Chat With Number | 
    ❖ -clearall => Clear Chat (100 messages) | 
    ❖ -mute @user <reason> => Mute User |  <Muted>
    ❖ -unmute @user => Unmute User | 
    ❖ -kick @user <reason> => Kick User From Server | 
    ❖ -ban @user <reason> => Ban User From Server | 
    ❖ -mutechannel => Mute Channel | 
    ❖ -unmutechannel => Unmute Channel | 
    ❖ -dc => Delete All Rooms |
    ❖ -dr => Delete All Rank 
    ❖ -kv @user => Voice Kick | 
    ❖ -vonline => Create Channel Voice Online | 
     ===========================================================
     ✴ Create Channel **welcome** To Enable The Welcome 
     ✴ Create Channel **suggestion** To Enable Command -sug
     ===========================================================
      React With ▶ To See Games Commands`,
	`=-=-=-=-=-= 🎯  Games Commands - اوامر الالعاب 🎯 =-=-=-=-=-=
    💠 -xo @user => Game XO | لعب اكس او
    💠 -rps => Rock & Paper & Scissors | لعبة حجر ورقة مقص
    💠 -slots => Game Of Fruits | لعبة الفواكه
    💠 -marry @user => لعبة الزواج
    💠 -speed => لعبة سرعة كتابة 
    💠 -لعبة فكك <= فكك
    💠 -لعبة عواصم <= عواصم
    💠 -البوت يعطيك نصائح <= هل تعلم
      قريييب نضيف بعض الالعاب واذا تبون اي لعبة تعالو سيرفر المساعدة
    ===========================================================
      React With ▶ To See Music Commands`,
	`=-=-=-=-=-= 🎯  Music Commands - اوامر الموسيقى 🎯 =-=-=-=-=-=
    ❖ -play => لتشغيل أغنية برآبط أو بأسم
    ❖ -skip => لتجآوز الأغنية الحآلية
    ❖ -pause => إيقآف الأغنية مؤقتا
    ❖ -resume => لموآصلة الإغنية بعد إيقآفهآ مؤقتا
    ❖ -vol => لتغيير درجة الصوت 100 - 0
    ❖ -stop => لإخرآج البوت من الروم
    ❖ -np => لمعرفة الأغنية المشغلة حآليا
    ❖ -queue => لمعرفة قآئمة التشغيل
	Soon And I Will Translate The Command To Englih`]
	let page = 1;

    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setFooter(`Page ${page} of ${pages.length}`)
    .setDescription(pages[page-1])

    message.channel.sendEmbed(embed).then(msg => {

        msg.react('◀').then( r => {
            msg.react('▶')


        const backwardsFilter = (reaction, user) => reaction.emoji.name === '◀' && user.id === message.author.id;
        const forwardsFilter = (reaction, user) => reaction.emoji.name === '▶' && user.id === message.author.id;


        const backwards = msg.createReactionCollector(backwardsFilter, { time: 20000});
        const forwards = msg.createReactionCollector(forwardsFilter, { time: 20000});



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

client.login(process.env.BOT_TOKEN);
