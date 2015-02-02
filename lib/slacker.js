var request = require('request');

/**
 * Slack API wrapper
 * @param {object} config Slacker configuration
 * - token: Slack API token
 */
var Slacker = function (config) {
    this.webhookurl = config.webhookurl;
    return this;
};

/**
 * Send slack API request
 * @param  {string} method Slack API method
 * @param  {object} args POST arguments to send to Slack
 */
Slacker.prototype.send = function (method, args) {
    args = args || {} ;
    //args.webhookurl = this.webhookurl;
     
    request.post({
       // url: 'https://slack.com/api/' + method,

        url: this.webhookurl,
        json: true,
        body: args
    }, function (error, response, body) {
        if (error || !body.ok) {
            console.log('Error:', error || body.error);
        }
    });
};

exports.Slacker = Slacker;
