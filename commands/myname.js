module.exports = {
    name: 'myname',
    description: 'Send your server nickname.',

    execute(message, args) {
        const name = message.member.displayName;
        message.channel.send(`Your name is ${name}`);
    }
};