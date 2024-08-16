const userModel = require("./model");

const sendData = async(req,res) => {
    try {
        const user = await new userModel(req.body);
        await user.save();
        res.status(200).send({
            success:true,
            message:'Message sent to vishal successfully.'
        });
    } catch (error) {
        console.log(error);
        res.status(501).send({
            success:false,
            message:`Error in sending data is ${error}.`
        });
    };
};

module.exports = sendData;