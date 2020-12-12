const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const port = 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'))

app.get('/',function(req,res){
    res.send("Hello world!");
});


app.listen(port,()=>console.log('Listening....' + port));