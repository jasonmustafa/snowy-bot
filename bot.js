require('dotenv').config();
const Discord = require('discord.js');
const config = require('./config.json');

const client = new Discord.Client();
const fs = require('fs');

// const roleClaim = require('./role-claim');

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Snowy is online!');

    client.user.setActivity('Your Every Move', { type: 'WATCHING' }).catch(console.error);

    // roleClaim(client);
});

const TOKEN = process.env.TOKEN;

client.on('guildMemberAdd', (member) => {
    const channel = member.guild.channels.find((channel) => channel.name === 'bot-testing');

    if (!channel) {
        return;
    }

    channel.send(`Welcome to the server, ${member}, please read the rules in the rules channel!`);
});

client.on('message', (message) => {
    if (!message.content.startsWith(config.prefix) || message.author.bot) {
        return;
    }

    const args = message.content.slice(config.prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    switch (command) {
        case 'ping': {
            client.commands.get('ping').execute(message, args);
            break;
        }

        case 'myname': {
            client.commands.get('myname').execute(message, args);
            break;
        }

        case 'say': {
            client.commands.get('say').execute(message, args);
            break;
        }

        case 'info': {
            client.commands.get('info').execute(message, args);
            break;
        }

        case 'embed': {
            client.commands.get('embed').execute(message, args);
            break;
        }

        case 'send': {
            client.commands.get('send').execute(message, args);
            break;
        }

        // case 'roles': {
        //     client.commands.get('roles').execute(message,args);
        //     break;
        // }

        case 'secretsanta': {
            client.commands.get('secretsanta').execute(message, args);
            break;
        }

        case 'nogift': {
            client.commands.get('nogift').execute(message, args);
            break;
        }

        default: {
            client.commands.get('unsupported').execute(message, args);
            break;
        }
    }
});

client.login(TOKEN);