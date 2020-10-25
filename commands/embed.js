const Discord = require('discord.js');

module.exports = {
    name: 'embed',
    description: 'Send an embed of a wonderful cat.',

    execute(message, args) {
        const embed = new Discord.MessageEmbed()
            .setTitle('User Information')
            .addField('Player Name', message.author.username)
            .setThumbnail('https://i.imgur.com/4AiXzf8.jpeg')
            .setColor(0xf1c40f);

        message.channel.send(embed);
    }
};