const {contact_us} = require('../models')



exports.contactUs = async (req,res) => {
    try {
        const {name,email,phone,message} = req.body;
         await contact_us.create({
            name,email,phone,message
        })
        return res.status(200).json({
            Message: `Dear ${name} Thankyou...We have recieved your query.We will get back to you shortly`
        })
    } catch (error) {
        console.log(error);
    }
}