require('dotenv').config();

const fs = require('fs');
const glob = require('glob');
var argv = require('yargs/yargs')(process.argv.slice(2)).argv;

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
  {
    name: 'boss',
    description: 'RuneScape 3 boss helper',
    options: [
      {
        name: 'name',
        type: 'STRING',
        description: 'The name of the boss',
        required: true,
        choices: [
          {
            name: "K'ril Tsutsaroth",
            value: 'kril',
          },
          {
            name: 'Barrows',
            value: 'barrows',
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

  if (argv.removecommands) {
    // remove all commands
    console.log('Removing commands');

    await client.guilds.cache.get(guildId)?.commands.set([])
      .then(console.log)
      .catch(console.error);
  } else {
    // set commands
    await client.guilds.cache
      .get(guildId)
      ?.commands.set(commandData)
      .then(console.log)
      .catch(console.error);
  }
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

if (argv.dev) {
  client.login(process.env.TOKEN_DEV);
} else {
  client.login(process.env.TOKEN);
}
