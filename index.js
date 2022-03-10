const { Client, Discord, MessageEmbed } = require('discord.js');
const client = new Client();
require('discord-buttons')(client);
const prefix = "!";



//ready
client.on('ready', () => {
    console.log('The bot is online! Bot Made By GimelYafit#1012')
})
client.on
client.on("ready", () => {
  client.user.setActivity("BotMade By GimelYafit#1012", {type: "WATCHING"})
})

client.on('message', async message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;
    let mesg = message.content.toLowerCase() || message.content.toUpperCase();
    if (!mesg.startsWith(prefix)) return;
    let args = message.content.slice(prefix.length).trim().split(" ");
    const command = args.shift().toLowerCase();


    if (command === 'h') {
        const helperRole = "<@YOUR STAFF ROLE ID>"
        var userVoiceChannel = message.member.voice.channel
        var Reason = args.join(" ")
        var notConnectEmbed = new MessageEmbed()
            .setColor("")
            .setTitle("User", `${message.author} | !Need Help`)
            .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
            .addField("User", `${message.author} | !Need Help`)
            .addField(`Role`, helperRole)
            .addField("Reason", `${Reason || "There is no reason"}`)
            .addField("Voice channel:", `${userVoiceChannel || "Not in voice"}`)
            .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
        message.channel.send(`<@&YOUR STAFF ROLE ID>`, notConnectEmbed)
    }
})

client.login("Your Bot Token");
//Bot Made By GimelYafit#1012