const express = require('express');
const router = express.Router();

const {createMessage, sendMessage} = require('../controller/textRoutes');


router.route('/').post(sendMessage);


module.exports = router;
