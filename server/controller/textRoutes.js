const Message = require('../model/message');
require('dotenv').config();

const client = require('twilio')(process.env.accountSid, process.env.authToken);


const createMessage = async(req, res) => {
    try {
        await Message.create({
            recipient: req.body.recipient,
            number: req.body.number,
            body: req.body.body
        })
    }
    catch(error) {
        console.log(error)
    }
}

const sendMessage = (req, res) => {
    client.messages.create({
        body: `Hey ${req.body.recipient}! You did an awesome job. Here is your message: ${req.body.body}`,
        from: process.env.twilioNumber,
        to: req.body.number,
    }).then(message => console.log(message)).catch(error => console.log(error));
}
module.exports = {
    createMessage, 
    sendMessage
}
