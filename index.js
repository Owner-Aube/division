const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;
client.commands = new Discord.Collection()
const fs = require('fs');


fs.readdir('./Commandes/', (error, f) => {
    if (error) { return console.error(error); }
        let commandes = f.filter(f => f.split('.').pop() === 'js');
        if (commandes.length <= 0) { return console.log('Aucune commande trouvée !'); }

        commandes.forEach((f) => {
            let commande = require(`./Commandes/${f}`);
            console.log(`${f} -> Ready`);
            client.commands.set(commande.help.name, commande);
            
        });
});

fs.readdir('./Events/', (error, f) => {
    if (error) { return console.error(error); }
        console.log(`${f.length} events chargés`);

        f.forEach((f) => {
            let events = require(`./Events/${f}`);
            let event = f.split('.')[0];
            client.on(event, events.bind(null, client));
        });
        
});

client.login('Token supprimée suite à la publication du GITHUB');
