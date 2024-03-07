const {mongoose,Schema,model } =require('mongoose');
const bcrypt = require('bcrypt');

 
const userschema = new Schema({

    username:{
        type:String ,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    created_at:{
        type : Date, 
        default: Date.now 
    }

})
module.exports =  model('Login123',userschema);