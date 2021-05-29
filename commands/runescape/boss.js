module.exports = {
  name: 'boss',
  description: 'RuneScape 3 boss helper',
  async execute(interaction, Discord) {
    let bossName = interaction.options[0].value;
    let replyEmbed = null;

    if (bossName === 'kril') {
      replyEmbed = new Discord.MessageEmbed()
        .setColor('#801a21')
        .setTitle("K'ril Tsutsaroth Boss Helper")
        .setURL('https://runescape.wiki/w/K%27ril_Tsutsaroth/Strategies')
        .setAuthor(
          'Snowy',
          'https://i.imgur.com/lfgpEwY.png',
          'https://github.com/jasonmustafa/snowy-bot'
        )
        .setDescription("Boss helper for K'ril Tsutsaroth in RuneScape 3")
        .setThumbnail('https://i.imgur.com/WCtftEU.png')
        .addFields(
          { name: 'Weakness', value: '🔥 Fire spells' },
          {
            name: '🧙‍♂️ Gear Setup',
            value:
              'Staff of light\nHood of subjugation, Garb of subjugation, Gown of subjugation, Gloves of subjugation, Boots of subjugation\nAmulet of Fury, Ring of Wealth, Skillcape/Obsidian Cape\nPenance Aura (if using Soul Split)',
          },
          {
            name: '🎒 Inventory',
            value:
              'Rock climbing boots\nAir & Fire Runes, Enhanced Excalibur\n1 Overload/Extreme Magic, 3 Super antipoisons\nSaradomin brews & Rocktails/Tuna potatoes/Sharks, Beast of Burden pouch',
          }
        );
    } else if (bossName === 'barrows') {
      replyEmbed = new Discord.MessageEmbed()
        .setColor('#595730')
        .setTitle('Barrows Boss Helper')
        .setURL('https://runescape.wiki/w/Farming_training#Fruit_trees')
        .setAuthor(
          'Snowy',
          'https://i.imgur.com/lfgpEwY.png',
          'https://github.com/jasonmustafa/snowy-bot'
        )
        .setDescription('Boss helper for Barrows in RuneScape 3')
        .setThumbnail('https://i.imgur.com/PXuW7lH.png')
        .addFields(
          {
            name: '🧙‍♂️ Gear Setup',
            value:
              'Abyssal wand & Abyssal orb\nWarpriest/Dragon Rider armour\nDragon Rider amulet/Amulet of fury, Ring of Fortune, Skillcape\nSign of life, Reverence aura',
          },
          {
            name: '🎒 Inventory',
            value: 'Air runes, 1 Super magic potion, 1 Super defense potion, 5 Prayer potions, Tuna potatoes/Sharks, Games necklace',
          },
          {  name: 'Killing order', value: 'Dharok (northeast)\nVerac (northwest)\nGuthan (southeast)\nTorag (southwest)\nKaril (south middle)\nAhrim (middle)' }
        );
    }

    if (replyEmbed) {
      await interaction.reply(replyEmbed);
    } else {
      console.error('Invalid interaction - tree run');
    }
  },
};
