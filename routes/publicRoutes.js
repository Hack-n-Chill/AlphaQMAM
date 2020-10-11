const express = require('express');
const router = express.Router();
const GlobalController = require('../controllers/global');


router.route('/signup').post(GlobalController.registerUser);
router.route('/login').post(GlobalController.login);
router.route('/all-protests').get(GlobalController.getProtests);
router.route('/protest/:protestId').get(GlobalController.getProtest);

module.exports = router;