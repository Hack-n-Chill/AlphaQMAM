const express = require('express');
const TwilioController = require('../controllers/twilio');
const isAuth = require('../middleware/auth');
const router = express.Router();

router.route('/:protestId').post(isAuth, TwilioController.help);


module.exports = router;