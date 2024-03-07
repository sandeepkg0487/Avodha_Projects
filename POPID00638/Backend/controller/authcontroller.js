const usermodel = require('../Model/userschema')
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const { generateJWT } = require('./jwt');



async function registercontroll(req, res, next) {

    const { username, password, email } = req.body;
    console.log('req.body:', req.body);

    console.log(username, password);
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log(hashedPassword);
        const user = new usermodel({ username: username, password: hashedPassword, email: email })
        await user.save();
        res.json("registerd successfully");

    } catch (err) {
        console.log("error happend in register function", err);
        res.status(300).json({ err: err })
    }

}

const logincontroll = async (req, res, next) => {
    const { username, password } = req.body;
    console.log(password)
    try {

        //FETCHING USER DATA FROM DB
        const user = await usermodel.findOne({ username })
        console.log(user);

        //USERNAME VALIDATION
        if (!user) {
            return res
                .status(400)
                .send({
                    message: "Usaer name does not match",
                   
                });
        }

        //PASSWORD VALIDATION
        const passwordmatch = await bcrypt.compare(password, user.password)
        console.log('is password match :', passwordmatch);
        if (!passwordmatch) {
            console.log('passworddoesent match');
          return  res.status(400)
                .send({
                    message: "Password does not match",
                    
                });
        }
        console.log('generating token');
        // generete tocken
        const token = generateJWT(user)
        console.log("token:", token);
        //SEND RESPONSE
        res
            .status(200)
            .json({
                message: "Login Successful",
                email: user.email,
                token,
            });

    } catch (err) {
        console.log('error happen in login authcontroll.js'.err);
    }

}




module.exports = { registercontroll, logincontroll };


