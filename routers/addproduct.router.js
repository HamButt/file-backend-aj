const express = require('express');
const router = express.Router();
const addPrdctCtrl = require('../controllers/addproduct.controller')
const bodyParser = require('body-parser').urlencoded({extended: false});


router.post('/product',bodyParser, addPrdctCtrl.upload.single("image"), addPrdctCtrl.addProduct)


module.exports = router
