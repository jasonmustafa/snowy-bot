const { version } = require('../config.json');

module.exports = {
    name: 'secretsanta',
    description: 'Secret Santa helper.',

    execute(message, args) {
        message.client.channels.fetch('787933659072167957') // secret-santa-tracker text channel
                    .then(channel => {
                        channel.messages.fetch({ limit: 1 }).then(messages => {
                            let lastMessageContent = messages.first().content;
                          
                            let newMessage = lastMessageContent.slice(0, -1);
                            let giftsReceivedCount = parseInt(lastMessageContent.slice(-1)) + 1;

                            newMessage += giftsReceivedCount.toString();
                            channel.send(newMessage);                         
                          })
                          .catch(console.error);
                    })
                    .catch(console.error('Channel does not exist'));
    }
};
