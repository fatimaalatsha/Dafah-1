const http = require('http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const database = require('../database-mongo/database.js');
const uri = process.env.ATLAS_URI;

//Route Handler
app.use(express.static(__dirname + '../client'));
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


const port = 3000;
//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); 
  res.end(); 
}).listen(port,function() {
    console.log('Server is connected at http://localhost:3000')
})

