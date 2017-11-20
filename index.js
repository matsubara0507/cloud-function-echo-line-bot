'use strict';

require('dotenv').config();
const line = require('@line/bot-sdk');

// create LINE SDK config from env variables
const config = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.CHANNEL_SECRET,
};

// create LINE SDK client
const client = new line.Client(config);

// event handler
function handleEvent(event) {
  console.log(event);
  var message = 'Please push text message.';

  if (event.type === 'message' && event.message.type === 'text') {
    message = event.message.text;
  }

  const echo = { type: 'text', text: message };
  return client.replyMessage(event.replyToken, echo);
}

exports.handler = function echoBot (req, res) {
  Promise
    .all(req.body.events.map(handleEvent))
    .then(result => res.status(200).send(`Success: ${result}`))
    .catch(err => res.status(400).send(err.toString()));
};
