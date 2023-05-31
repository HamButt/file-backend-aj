const {products} = require('../models')
const multer = require("multer");
const path = require('path')


const storageEngine =  multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, 'images')
    },
    filename: (req, file, cb) => {
    cb(null, `${file.originalname}.jpg`);
  },});


exports.upload = multer({
    storage: storageEngine,
});


exports.addProduct = async (req,res) =>{
    try {
        const {cId,title,description,price} = req.body;
        console.log(cId,title,description,req.file.originalname,price);
        const data = await products.create({image:`${req.file.originalname}.jpg`,description,title,category_id:cId,price: `Rs. ${price}`})
        return res.status(200).json({
            message: data
        })
    } catch (error) {
        console.log(error);
    }
    }