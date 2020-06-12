const Discord = require('discord.js');
const client = new Discord.Client();

require('dotenv').config();
const TOKEN = process.env.TOKEN;

const PREFIX = '!';
let version = '1.0.1';

// TODO: use PREFIX

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);

  client.user.setActivity('Your Every Move', { type: 'WATCHING' }).catch(console.error);
});

client.on('guildMemberAdd', (member) => {
  const channel = member.guild.channels.cache.find((ch) => ch.name === 'welcome');

  // do nothing if the channel does not exist
  if (!channel) return;

  // welcome the user
  channel.send(`Welcome to the server, ${member}`);
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
      const embed = new Discord.MessageEmbed()
        .setTitle('User Information')
        .addField('Player Name', message.author.username)
        .setThumbnail('https://i.imgur.com/4AiXzf8.jpeg')
        .setColor(0xf1c40f);

      message.channel.send(embed);
      break;
    case 'send':
      const attachment = new Discord.MessageAttachment(
        'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg?resize=750px:*'
      );
      message.channel.send(message.author, attachment);
      break;

    case 'kick':
      // check authorization
      if (!message.member.roles.cache.find((r) => r.name === 'Owner' || r.name === 'Administrator' || r.name === 'Moderator')) {
        // send message if user not allowed to kick
        return message.reply('You do not have the authorization to kick users! Please improve yourself');
      }

      // first user mentioned in message
      const user = message.mentions.users.first();

      if (user) {
        const member = message.guild.member(user);

        // check if member in server
        if (member) {
          member
            .kick('Member was kicked')
            .then(() => {
              message.reply(`Successfully kicked ${user.tag}`);
            })
            .catch((err) => {
              message.reply('I was unable to kick the member');
              console.log(err);
            });
        } else {
          message.reply('That user is not in this server');
        }
      } else {
        message.reply('Please specify a user');
      }
  }
});

client.login(TOKEN);
