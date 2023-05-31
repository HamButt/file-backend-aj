const express = require('express');
const router = express.Router();
const homeCtrl = require('../controllers/home.controller')
const bodyParser = require('body-parser').urlencoded({extended: false});


router.get('/getDropdownLists',bodyParser, homeCtrl.fetchDropdownList)

router.get('/getProductLists',bodyParser, homeCtrl.fetchProductList)

module.exports = router