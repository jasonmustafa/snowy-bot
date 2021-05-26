module.exports = {
  name: 'herbrun',
  description: 'RuneScape 3 herb run helper',
  async execute(interaction, Discord) {
    replyEmbed = new Discord.MessageEmbed()
      .setColor('#64ffda')
      .setTitle('Herb Run')
      .setURL('https://runescape.wiki/w/Herb_patch#Locations')
      .setAuthor(
        'Snowy',
        'https://i.imgur.com/lfgpEwY.png',
        'https://github.com/jasonmustafa/snowy-bot'
      )
      .setDescription('Herb run helper for RuneScape 3')
      .setThumbnail('https://i.imgur.com/ddz966g.png')
      .addFields(
        { name: '🎒 Inventory', value: 'Example inventory' },
        {
          name: '1) 🇩 Draynor Herb Patch 🌿',
          value: 'Methods of Travel: Cabbage-port using Explorer\'s Ring 3+, Draynor Loadstone, War\'s Retreat Teleport',
        },
        {
          name: '2) 🇵 Port Phasmatys Herb Patch 🌿',
          value: 'Methods of Travel: Ectophial, Canifis Lodestone',
        },
        {
          name: '3) 🇦 Ardougne Herb Patch 🌿',
          value: 'Methods of Travel: Manor Farm Teleport, Ardougne Lodestone',
        },
        { name: '4) 🇨 Catherby Herb Patch 🌿', value: 'Methods of Travel: Catherby Lodestone' },
        { name: '5) 🇼 Wilderness Herb Patch 🌿', value: 'Methods of Travel: Wilderness Sword 1+, Wilderness Volcano Lodestone' }
      );

    if (replyEmbed) {
      await interaction.reply(replyEmbed);
    } else {
      console.error('Invalid interaction - herb run');
    }
  },
};
