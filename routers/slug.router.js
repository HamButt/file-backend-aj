const express = require('express');
const router = express.Router();
const slugCtrl = require('../controllers/slug.controller')
const bodyParser = require('body-parser').urlencoded({extended: false});


router.get('/getProducts/:id', bodyParser, slugCtrl.fetchProducts)

router.get('/fetchProduct/:id', bodyParser, slugCtrl.fetchProduct)

router.get('/fectchRandomProducts/:id', bodyParser, slugCtrl.fetchRandomProduct)

router.get('/filterProducts/:type/:id', bodyParser, slugCtrl.filterProducts)

module.exports = router