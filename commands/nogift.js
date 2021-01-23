const { version } = require('../config.json');

module.exports = {
    name: 'nogift',
    description: 'Secret Santa nogify tracker.',

    execute(message, args) {
        message.client.channels.fetch('802676542190780437') // no-gift-tracker text channel
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
