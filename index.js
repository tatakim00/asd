const Discord = require('discord.js');
const bot = new Discord.Client();

const token = process.env.token;


client.on('ready', () =>{
    console.log('This bot is online');
})

client.on('guildMemberAdd', member =>{

    const channel = member.guild.channels.find(channel => channel.name === "♡┆benvenuti");
    if(!channel) return;
    channel.send(`Benvenuto siamo felici di accoglierti in 🌸𝕃𝕠𝕝𝕚𝕤𝕎𝕠𝕣𝕝𝕕🌸:5762_9853_Rainbow_Weeb:, ${member}, perfavore non abusare delle bambine e buona permanenza! :Zt:`)
});
client.login(token).catch(err => console.log(err));
