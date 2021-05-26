require('dotenv').config();

const fs = require('fs');
const glob = require('glob');

const Discord = require('discord.js');
const { Client, Intents } = require('discord.js');

var getCommandFiles = function (src, callback) {
  glob(src + '/**/*', callback);
};

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
client.commands = new Discord.Collection();

// get all command files
getCommandFiles('commands', function (err, res) {
  if (err) {
    console.log('Error', err);
  } else {
    const commandFiles = res.filter((file) => file.endsWith('.js'));

    for (const file of commandFiles) {
      const command = require(`./${file}`);
      client.commands.set(command.name, command);
    }
  }
});

const guildId = '761746870175137843';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

const commandData = [
  {
    name: 'ping',
    description: 'Replies with pong!',
  },
  {
    name: 'herbrun',
    description: 'RuneScape 3 herb run helper',
  },
  {
    name: 'treerun',
    description: 'RuneScape 3 tree run helper',
    options: [
      {
        name: 'type',
        type: 'STRING',
        description: 'The type of tree',
        required: true,
        choices: [
          {
            name: 'Tree',
            value: 'tree',
          },
          {
            name: 'Fruit Tree',
            value: 'fruittree',
          },
          {
            name: 'Both',
            value: 'both',
          },
        ],
      },
    ],
  },
];

client.once('ready', async () => {
  if (!client.application?.owner) {
    await client.application?.fetch();
  }

  const command = await client.guilds.cache.get(guildId)?.commands.set(commandData);
  console.log(command);
});

client.on('interaction', async (interaction) => {
  // interaction is not a slash command
  if (!interaction.isCommand()) {
    return;
  }

  const command = interaction.commandName;

  // command file does not exist
  if (!client.commands.has(command)) {
    return;
  }

  try {
    client.commands.get(command).execute(interaction, Discord);
  } catch (error) {
    console.error(error);
  }
});

client.login(process.env.TOKEN);
