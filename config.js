var slackbot = require('./lib/bot');

var config = {
    server: 'chat.freenode.net',
    nick: 'irclistener008',
    username: 'dsl-irc-bot',
    channels: {
        '#dimsumlabs' : '#irc-channel'
    },
    users: {
        '~sunny_': 'Sunny'
    },
    webhookurl: '', // Add webhook url here
    floodProtection: true
};

var slackbot = new slackbot.Bot(config);
slackbot.listen();
