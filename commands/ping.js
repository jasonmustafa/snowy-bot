module.exports = {
  name: 'ping',
  description: 'Replies with pong!',
  async execute(interaction, Discord) {
    replyEmbed = new Discord.MessageEmbed()
      .setColor('#fafafa')
      .setTitle('pong!')
      .setAuthor(
        'Snowy',
        'https://i.imgur.com/lfgpEwY.png',
        'https://github.com/jasonmustafa/snowy-bot'
      );

    await interaction.reply(replyEmbed);
  },
};
