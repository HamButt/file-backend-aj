const express = require('express');
const router = express.Router();
const contactCtrl = require('../controllers/contact.controller')
const bodyParser = require('body-parser').urlencoded({extended: false});


router.post('/contactUs',bodyParser, contactCtrl.contactUs)


module.exports = router