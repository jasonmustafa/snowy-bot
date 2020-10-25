const config = require('../config.json');

module.exports = {
    name: 'info',
    description: 'Send information about the bot.',

    execute(message, args) {
        if (args[0] === 'version') {
            message.channel.send('Version ' + config.version);
        } else {
            message.channel.send('Invalid arguments!');
        }
    }
};