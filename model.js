const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
       type:String,
       required:[true,'Please enter yours name']
    },
    email:{
        type:String,
        required:[true,'Please enter yours email']
    },
    phone:{
        type:Number,
        required:[true,'Please enter yours phone']
    },
    message:{
        type:String,
    }
},{timestamps:true});

const userModel = mongoose.model('users',userSchema);

module.exports = userModel;