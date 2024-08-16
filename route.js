const express = require('express');
const sendData = require('./controller');
const router = express.Router();

router.post('/user',sendData);

module.exports = router;