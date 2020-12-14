const { MessageAttachment } = require('discord.js');

module.exports = {
    name: 'send',
    description: 'Send an image of a cute cat.',

    execute(message, args) {
        const attachment = new MessageAttachment(
            'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg?resize=750px:*'
        );
        
        message.channel.send(message.author, attachment);
    }
};
