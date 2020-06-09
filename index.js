require('dotenv').config();
const { Client, MessageEmbed, MessageAttachment } = require('discord.js');

const client = new Client();

client.once('ready', () => {
  console.log('Snowy is online!');
});

const TOKEN = process.env.TOKEN;

client.login(TOKEN);

const PREFIX = '!';

let version = '1.0.1';

client.on('guildMemberAdd', (member) => {
  const channel = member.guild.channels.find((channel) => channel.name === 'bot-testing');

  if (!channel) {
    return;
  }

  channel.send(`Welcome to the server, ${member}, please read the rules in the rules channel!`);
});

client.on('message', (message) => {
  // split string after !
  let args = message.content.substring(PREFIX.length).split(' ');

  switch (args[0]) {
    case 'ping':
      message.channel.send('Pong!');
      break;
    case 'website':
      message.channel.send('https://www.jasonmustafa.com/');
      break;
    case 'info':
      if (args[1] === 'version') {
        message.channel.send('Version ' + version);
      } else {
        message.channel.send('Invalid arguments!');
      }
      break;
    case 'clear':
      if (!args[1]) return message.reply('Error: please specify second argument!');
      message.channel.bulkDelete(args[1]);
      break;
    case 'embed':
      const embed = new MessageEmbed()
        .setTitle('User Information')
        .addField('Player Name', message.author.username)
        .setThumbnail('https://i.imgur.com/4AiXzf8.jpeg')
        .setColor(0xf1c40f);

      message.channel.send(embed);
  }
});
