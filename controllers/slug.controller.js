const {products,banners} = require('../models');
const { Op } = require("sequelize");



exports.fetchProducts = async (req, res) =>{
    try {
        const {id} = req.params;
        const allProducts = await products.findAll({
            attributes: ['id','image','title','description','category_id','price'],
            where: 
                {category_id: id},
         
        })
        const banner = await banners.findAll({
            attributes: ['banner','description','category_id'],
            where: 
                    {category_id: id},
        })
                return res.status(200).json({
                    products: allProducts,
                    banner: banner
                })
    } catch (error) {
        return res.status(400).json({error:error })
    }
}

exports.fetchProduct = async (req, res) =>{
    try {
        const {id} = req.params;
        const imageDetail = await products.findAll({
            attributes: ['id','image','description','title','price'],
            where: {id}
        })
        
                return res.status(200).json({
                    imageDetail: imageDetail
                })
    } catch (error) {
        return res.status(400).json({error:error })
    }
}

exports.filterProducts = async (req, res) =>{
    try {
        const {type,id} = req.params;

            if(type === "LTH"){
                const filterProducts = await products.findAll({
                    attributes: ['id','image','description','title','category_id','price'],
                    where: {category_id : id},
                    order:[
                        ['price', 'ASC']
                    ],
                })
                
                return res.status(200).json({
                    randomCategories: filterProducts
                })
              }else if(type === "HTL"){
                const filterProducts = await products.findAll({
                    attributes: ['id','image','description','title','category_id','price'],
                    where: {category_id : id},
                    order:[
                        ['price', 'DESC']
                    ],
                })
                return res.status(200).json({
                    randomCategories: filterProducts
                })
              }
            
    } catch (error) {
        return res.status(400).json({error:error })
    }
}

exports.fetchRandomProduct = async (req, res) =>{
    try {
        const {id} = req.params;
        const randomCategories = await products.findAll({
            attributes: ['id','image','description','title','category_id'],
            where: {category_id : id}
        })
        
                return res.status(200).json({
                    randomCategories: randomCategories
                })
    } catch (error) {
        return res.status(400).json({error:error })
    }
}