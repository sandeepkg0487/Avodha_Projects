const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
var bodyParser = require('body-parser');
const {dbconnect} = require('./controller/mongodbconnect')
const login = require('./Route/Login/login')
const {registercontroll} = require('./controller/authcontroller')

const app = express();

const PORT = 3001;

app.use(cors())
app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'))


//mongodb cnnection 
dbconnect();

app.use('/login',login)

app.post('/signup',registercontroll)



app.listen(PORT, () => {
    console.log(`server listening on port :${PORT}`)
})