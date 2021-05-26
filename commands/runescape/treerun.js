module.exports = {
  name: 'treerun',
  description: 'RuneScape 3 tree run helper',
  async execute(interaction, Discord) {
    let treeType = interaction.options[0].value;
    let replyEmbed = null;

    if (treeType === 'tree') {
      replyEmbed = new Discord.MessageEmbed()
        .setColor('#00e676')
        .setTitle('Tree Run')
        .setURL('https://runescape.wiki/w/Farming_training#Trees')
        .setAuthor(
          'Snowy',
          'https://i.imgur.com/lfgpEwY.png',
          'https://github.com/jasonmustafa/snowy-bot'
        )
        .setDescription('Tree run helper for RuneScape 3')
        .setThumbnail('https://i.imgur.com/nkoBarh.png')
        .addFields(
          { name: '🎒 Inventory', value: 'Example inventory' },
          {
            name: '1) 🇻 Varrock Tree Patch 🌳',
            value: 'Methods of Travel: Ring of Wealth, Varrock Lodestone',
          },
          {
            name: '2) 🇬 Tree Gnome Stronghold Tree Patch 🌳',
            value: 'Methods of Travel: Run from Tree Gnome Stronghold Spirit Tree',
          },
          {
            name: '3) 🇱 Lumbridge Tree Patch 🌳',
            value: 'Methods of Travel: Lumbridge Lodestone',
          },
          { name: '4) 🇫 Falador Tree Patch 🌳', value: 'Methods of Travel: Falador Lodestone' },
          { name: '5) 🇹 Taverly Tree Patch 🌳', value: 'Methods of Travel: Taverly Lodestone' }
        );
    } else if (treeType === 'fruittree') {
      replyEmbed = new Discord.MessageEmbed()
        .setColor('#00e676')
        .setTitle('Fruit Tree Run')
        .setURL('https://runescape.wiki/w/Farming_training#Fruit_trees')
        .setAuthor(
          'Snowy',
          'https://i.imgur.com/lfgpEwY.png',
          'https://github.com/jasonmustafa/snowy-bot'
        )
        .setDescription('Friut tree run helper for RuneScape 3')
        .setThumbnail('https://i.imgur.com/7lvicSI.png')
        .addFields(
          { name: '🎒 Inventory', value: 'Example inventory' },
          {
            name: '1) 🇬 Tree Gnome Village Fruit Tree Patch 🌴',
            value: 'Methods of Travel: Grand Exchange Spirit Tree',
          },
          {
            name: '2) 🇬 Tree Gnome Stronghold Fruit Tree Patch 🌴',
            value: 'Methods of Travel: Tree Gnome Village Spirit Tree',
          },
          {
            name: '3) 🇨 Catherby Fruit Tree Patch 🌴',
            value: 'Methods of Travel: Catherby Lodestone',
          },
          {
            name: '4) 🇧 Brimhaven Fruit Tree Patch 🌴',
            value: 'Methods of Travel: Catherby Charter Ship, Karamja Lodestone',
          },
          {
            name: '5) 🇭 Herblore Habitat Fruit Tree Patch 🌴',
            value: 'Methods of Travel: Juju teleport spiritbag',
          }
        );
    } else if (treeType === 'both') {
      replyEmbed = new Discord.MessageEmbed()
        .setColor('#00e676')
        .setTitle('Tree and Fruit Tree Run')
        .setURL('https://runescape.wiki/w/Farming_training#Trees')
        .setAuthor(
          'Snowy',
          'https://i.imgur.com/lfgpEwY.png',
          'https://github.com/jasonmustafa/snowy-bot'
        )
        .setDescription('Tree and friut tree run helper for RuneScape 3')
        .setThumbnail('https://i.imgur.com/nkoBarh.png')
        .addFields(
          { name: '🎒 Inventory', value: 'Example inventory' },
          {
            name: '1) 🇻 Varrock Tree Patch 🌳',
            value: 'Methods of Travel: Ring of Wealth, Varrock Lodestone',
          },
          {
            name: '2) 🇬 Tree Gnome Village Fruit Tree Patch 🌴',
            value: 'Methods of Travel: Grand Exchange Spirit Tree',
          },
          {
            name: '3) 🇬 Tree Gnome Stronghold Fruit Tree Patch 🌴',
            value: 'Methods of Travel: Tree Gnome Village Spirit Tree',
          },
          {
            name: '4) 🇬 Tree Gnome Stronghold Tree Patch 🌳',
            value: 'Methods of Travel: Run from Tree Gnome Stronghold Spirit Tree',
          },
          {
            name: '5) 🇱 Lumbridge Tree Patch 🌳',
            value: 'Methods of Travel: Lumbridge Lodestone',
          },
          { name: '6) 🇫 Falador Tree Patch 🌳', value: 'Methods of Travel: Falador Lodestone' },
          { name: '7) 🇹 Taverly Tree Patch 🌳', value: 'Methods of Travel: Taverly Lodestone' },
          {
            name: '8) 🇨 Catherby Fruit Tree Patch 🌴',
            value: 'Methods of Travel: Catherby Lodestone',
          },
          {
            name: '9) 🇧 Brimhaven Fruit Tree Patch 🌴',
            value: 'Methods of Travel: Catherby Charter Ship, Karamja Lodestone',
          },
          {
            name: '10) 🇭 Herblore Habitat Fruit Tree Patch 🌴',
            value: 'Methods of Travel: Juju teleport spiritbag',
          }
        );
    }

    if (replyEmbed) {
      await interaction.reply(replyEmbed);
    } else {
      console.error('Invalid interaction - tree run');
    }
  },
};
