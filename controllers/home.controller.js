const {categories,lists,dcategories} = require('../models')



exports.fetchDropdownList = async (req, res) =>{
    try {
        const goldList = await categories.findAll({attributes:['id','title']});
        const diamondList = await dcategories.findAll({attributes:['id','title']});
        return res.status(200).json({
            goldCategories : goldList,
            diamondCategories : diamondList
        })
    } catch (error) {
        console.log(error);
    }
}

exports.fetchProductList = async (req, res) =>{
    try {
        const products = await lists.findAll(
            {attributes:['id','image','description','category_id']}
            );
        return res.status(200).json({
            products : products
        })
    } catch (error) {
        console.log(error);
    }
}
