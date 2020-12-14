module.exports = {
    name: 'unsupported',
    description: 'Send a message stating the command tried is unsupported.',

    execute(message, args) {
        message.channel.send('This command is unsupported!');
    }
};
