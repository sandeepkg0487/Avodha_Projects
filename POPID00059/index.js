const express = require('express')
const app = express()
const port = 3000
const apicall = require('./controller/getapi');

app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get('/', apicall)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})