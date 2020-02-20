const Discord = require('discord.js');

module.exports.run = (client, message, args) => {

    let discordnitrocheckerdivision = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("**__Division Nitro Checker__**")
    .addField("**__Verification de votre liste ...__**", ':x: Aucun Nitro Valable à été trouvé.')
    .setFooter("Division -> https://discord.gg/w7JBMMh");

    message.channel.send(discordnitrocheckerdivision);

    }
    
    module.exports.help = {
        name: 'nitrochecker'
    };