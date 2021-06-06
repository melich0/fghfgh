const Discord = require("discord.js-selfbot");

let tokens = ["NzYwNDc2MzcyODk1MjY4OTE4.YGIIKg.87NgjiiYo2T00YFH0-vdXJTPTe4", "TOKEN"]; // İstediğin Kadar Arttırabilirsin!

for (let index = 0; index < tokens.length; index++) {

const client = new Discord.Client();
client.login(tokens[index]).catch(err => console.error(err));

client.on('ready', () => {
console.log(`${client.user.username} İsimli Token Aktif Oldu!`);
});

};