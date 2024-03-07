const mongoose = require('mongoose')
async function  dbconnect(req,res) {
   try{
    await mongoose.connect('mongodb://localhost:27017/Bookingapp', {
        serverSelectionTimeoutMS: 3000,
        useNewUrlParser: true,
        useUnifiedTopology: true
      
    })
        .then(() => {
            console.log('mongodb connected');
        },
            err => { console.log("mongodb connection error:", err); }
        );
   }catch(err){
    console.log("err1:",err);
   }
  
}
module.exports = { dbconnect }