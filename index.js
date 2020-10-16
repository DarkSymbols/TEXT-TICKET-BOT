//BOT STATUS CODE

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log(client.guilds.map(c => `${c.name} : ${c.me.hasPermission(8)}`));
  client.user.setStatus("idle");

  client.user.setActivity(`By Тигр#0080 ❤️`, { type: "PLAYING" });
});
//MADY BY Тигр#0080

//TICKET CODE

const category = "763541487455174698";//IMPORTANT CATEGORY ID
let mtickets = true;
let tchannels = [];
let current = 0;
//MADY BY Тигр#0080
 

client.on("message", async message => {
  if (message.author.bot || message.channel.type === "dm") return;
  let args = message.content.split(" ");
  let author = message.author.id;
  if (args[0].toLowerCase() === `${prefix}help`) {
    let embed = new Discord.RichEmbed()
      .addField(``);
    await message.channel.send(
      ``
    );
    await message.channel.send(embed);
  } else if (args[0].toLowerCase() === `${prefix}new`) {
        if (message.channel.id !== "762040041982787585")//IMPORTANT OPEN TICKETS CHANNEL ID
      return message.reply(
        `**YOU CANT OPEN TICKET HERE PLEAS MOVE TO <#762040041982787585>**`//IMPORTANT OPEN TICKETS CHANNEL ID
      );
    if (mtickets === false)
      return message.channel.send(
        `**TICKET FEATURE IS CURRENTLY DISABLE**`
      );
    if (!message.guild.roles.exists(gg => gg.name === "Support team 🔧"))
      return message.channel.send(`**YOU NEED TO DO THIS ROLE \`Support team 🔧\`**`);
    if (!message.guild.me.hasPermission("MANAGE_CHANNELS"))
      return message.channel.send(
        `**I DO NOT HAVE ENOUGH PERMISSIONS**`
      );
    console.log(current);
    let openReason = "";
    current++;
    message.guild.createChannel(`ticket-${current}`, "text").then(c => {
      tchannels.push(c.id);
      c.setParent(category);
       let Reason = message.content.split(" ").slice(1).join(" ");
 if(!Reason) Reason = 'NONE';
      const done = new Discord.RichEmbed()
 .setColor(`GREEN`)
 .setTitle(`CREATE TICKET`)
 .setDescription(`**OPEN TICKET CHANNEL NAME :** ${message.channel.name}
 **CREATOR :** <@${message.author.id}>
 **REASON :** ${Reason}`)
 .setTimestamp()
 .setThumbnail(`https://cdn.discordapp.com/emojis/732739356447735808.png?v=1`)
 .setFooter("MADE BY Тигр#0080")
 let log = message.guild.channels.find("name", "tickets-log");
 if(log) log.send(done)
      message.channel.send(`**YOUR TICKET HAS BEEN CREATED**`);
              let role = message.guild.roles.find(gg => gg.name === "Support team 🔧");
        let role2 = message.guild.roles.find(gg => gg.name === "@everyone");
        c.overwritePermissions(role, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
        });
      c.overwritePermissions(message.guild.id, {
        READ_MESSAGES: false,
        SEND_MESSAGES: false
      });
      c.overwritePermissions(message.author.id, {
        READ_MESSAGES: true,
        SEND_MESSAGES: true
      });

      if (args[1])
        openReason = `\nTICKET REASON : ${args.slice(1).join(" ")}`;
      let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)
        .setColor("GREEN")
        .setDescription(`HELLO ${message.author}

THANKS FOR CONTACTING US PLEASE WAIT FOR THE SUPPORT TEAM
       ${openReason}`)
        .setThumbnail(`https://cdn.discordapp.com/attachments/761375497292480532/762631308412452864/ticket_1.png`)        
        .setFooter("MADE BY Тигр#0080")
            c.send(`<@&761731078033113119>`);//IMPORTANT SUPPORT TEAM ROLE ID
      c.send(`HERE IS YOUR TICKET ${message.author}`);
      c.send(embed); 
    });
  } else if (args[0].toLowerCase() === `${prefix}opentickets`) {
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        `**YOU ARE NOT FROM THE ADMINISTARTION**`
      );
    if (args[1] && args[1].toLowerCase() === "enable") {
      mtickets = true;
      message.channel.send(
        `**TICKET FEATURE HAS BEEN OPENED**`
      );
    } else if (args[1] && args[1].toLowerCase() === "disable") {
      mtickets = false;
      message.channel.send(
        `**TICKET FEATURE LOCKED**`
      );
    } else if (!args[1]) {
      if (mtickets === true) {
        mtickets = false;
        message.channel.send(
          `**TICKET FEATURE LOCKED**`
        );
      } else if (mtickets === false) {
        mtickets = true;
        message.channel.send(
          `**TICKET FEATURE HAS BEEN OPENED**`
        );
      }
    }
  } else if (args[0].toLowerCase() === `${prefix}close`) {
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
      `**YOU ARE NOT FROM THE ADMINISTARTION**`
      );
    if (
      !message.channel.name.startsWith("ticket-") &&
      !tchannels.includes(message.channel.id)
    )
      return message.channel.send(`**THIS IS NOT TICKET**`);
     let Reason = message.content.split(" ").slice(1).join(" ");
 if(!Reason) Reason = 'NONE';
let closee = new Discord.RichEmbed()
.setColor(`RED`)
.setAuthor(`CLOSED TICKET`)
.setDescription(`**DELETE TICKET CHANNEL NAME :** ${message.channel.name}
**DELETER :** <@${message.author.id}>
**REASON :** ${Reason}`)
.setTimestamp()
.setThumbnail(`https://cdn.discordapp.com/emojis/732739369231974400.png?v=1`)
.setFooter("MADE BY Тигр#0080")
let log = message.guild.channels.find("name", "tickets-log"); 
if(log) log.send(closee)
 
    message.channel.send(
      `**TICKET DELETED AFTER 5 SECONDS**`
    );
    tchannels.splice(tchannels.indexOf(message.channel.id), 1);
    setTimeout(() => message.channel.delete(), 5000);
   //MADY BY Тигр#0080
    } if(message.content.startsWith(prefix + `closeall`)) {
     if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.channel.send(`**I DONT HAVE PERMISSIONS**`)
     if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply('**YOU DONT HAVE PERMISSIONS**');
      message.guild.channels.filter(c => c.name.toLowerCase().startsWith("ticket-")).forEach(channel => { channel.delete(); })
const ttt = new Discord.RichEmbed()
.setColor("GREEN")
.addField(`**SUCCESSFULLY DELETE ALL TICKETS**`,`** **`)
message.channel.send(ttt)
let log = message.guild.channels.find("name", "tickets-log");
const rr = new Discord.RichEmbed()
.setColor("e8a21e")
.setAuthor(`DELETE ALL TICKETS`)
.setDescription(`**DELETER :** <@${message.author.id}>`)
.setThumbnail(`https://cdn.discordapp.com/attachments/728371655474413649/762442788200644608/warning.png`)
.setFooter("MADE BY Тигр#0080")
.setTimestamp();
if(log) return log.send(rr)
 //MADY BY Тигр#0080
} if(message.content.startsWith(prefix + `add`)) {
  if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.channel.send(`**I DONT HAVE PERMISSIONS**`)
 if(!message.channel.name.startsWith("ticket-")) return message.channel.send(`**هذا الأمر فقط للحصول على التذاكر**`);
let member = message.mentions.members.first();
if(!member) return message.channel.send(`**MENTION THE USER**`);
if(message.channel.permissionsFor(member).has(['SEND_MESSAGES', 'VIEW_CHANNEL', 'READ_MESSAGE_HISTORY'])) return message.channel.send(`**THIS MEMBER IS IN THIS TICKET**`);
message.channel.overwritePermissions(member.id, { SEND_MESSAGES: true, VIEW_CHANNEL: true, READ_MESSAGE_HISTORY: true });
message.channel.send(`**SUCCESSFULLY ADDED THIS MEMBER**`)
let tgt = new Discord.RichEmbed()
.setColor(`GREEN`)
.setAuthor(`MEMBER ADDED`)
.setDescription(`**TICKET CHANNEL NAME :** #${message.channel.name}
**MEMBER ADDED NAME :** ${member}
**BY :** <@${message.author.id}>`)
.setThumbnail(`https://cdn.discordapp.com/emojis/732739356447735808.png?v=1`)
.setFooter("MADE BY Тигр#0080")
.setTimestamp();
let log = message.guild.channels.find("name", "tickets-log");
if(log) return log.send(tgt);
} if(message.content.startsWith(prefix + `remove`)) {
 if(!message.channel.name.startsWith("ticket-")) {
     return message.channel.send(`**هذا الأمر فقط للحصول على التذاكر**`);
 }
 let member = message.mentions.members.first();
 if(!member || member.id === client.user.id) {
     return message.channel.send(`**MENTION THE USER**`);
 }
 if(!message.channel.permissionsFor(member).has(['SEND_MESSAGES', 'VIEW_CHANNEL', 'READ_MESSAGE_HISTORY'])) {
     return message.channel.send(`**THIS MEMBER IS NOT IN THIS TICKET**`);
 }
 message.channel.overwritePermissions(member.id, { SEND_MESSAGES: false, VIEW_CHANNEL: false, READ_MESSAGE_HISTORY: false });
 message.channel.send(`**SUCCESSFULLY REMOVE THIS MEMBER**`)
 let gtg = new Discord.RichEmbed()
.setColor(`RED`)
.setAuthor(`MEMBER REMOVED`)
.setDescription(`**TICKET CHANNEL NAME :** ${message.channel.name}
**MEMBER REMOVED NAME :** ${member}
**BY :** <@${message.author.id}>`)
.setThumbnail(`https://cdn.discordapp.com/emojis/732739369231974400.png?v=1`)
.setFooter("MADE BY Тигр#0080")
.setTimestamp();
let log = message.guild.channels.find("name", "tickets-log");
if(log) return log.send(gtg);
 }
 
 });
//MADY BY Тигр#0080

client.on('message', message => {
if (message.content.startsWith(prefix+"set tickets-log")) {
    var args = message.content.split(" ").slice(1);
    var argrst = args.join(' ');
                message.guild.createChannel(`${argrst}`, 'text')
      }
});
//MADY BY Тигр#0080
      

/////////
client.on('message', wolf => {
  if (wolf.content === prefix + "help") {////هنا  الامر
let embed = new Discord.RichEmbed()
.setColor("GREEN")////لون الامبد
.setDescription(`___قائمة الاوامر : :tickets:___

_${prefix}new : لفتح تذكرة_

_${prefix}close : لقفل تذكرة_

_${prefix}closeall : لقفل كل التذاكر_

_${prefix}add : لاضافة شخص من التذكرة_

_${prefix}remove : لازالة شخص من التذكرة_

_${prefix}rename : لتغيير اسم التذكرة_

_${prefix}opentickets enable : لتفعيل خاصية فتح التذاكر_

_${prefix}opentickets disable : لقفل خاصية فتح التذاكر_

_${prefix}set tickets-log : لاضافة اللوق الخاص بالتذكرة_`)////هنا الاوامر
.setFooter("MADE BY Тигр#0080")
wolf.channel.send({embed:embed});
}
});
//MADY BY Тигр#0080

client.on("message" , mecodes => {
if (mecodes.content.startsWith(prefix + "rename")) {
    var nwame = mecodes.content.split(" ").slice(1);
    if (!mecodes.channel.name.startsWith(`ticket-`))
      return mecodes.channel.send(
        `**THIS IS NOT TICKET**`
      );
    mecodes.channel.setName("ticket" + " " + nwame);
  }
});
//MADY BY Тигр#0080
