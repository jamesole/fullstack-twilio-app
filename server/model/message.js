const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    recipient: String,
    number:String,
    body:String,
})

module.exports = mongoose.model('Message', messageSchema);
