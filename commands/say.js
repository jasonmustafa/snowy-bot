module.exports = {
    name: 'say',
    description: 'Send what you just said.',

    execute(message, args) {
        const response = args.join(' ');

        if (response === '') {
            message.channel.send("You didn't say anything!");
        } else {
            message.delete();
            message.channel.send(response);
        }
    }
};