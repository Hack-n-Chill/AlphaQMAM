const express = require('express');
const router = require('./publicRoutes');
const roter = express.Router();
const UserController = require('../controllers/user');

router.route('/createprotest').post(UserController.createProtest);
router.route('/myprotests/:userId').get(UserController.myProtests);


module.exports = router;