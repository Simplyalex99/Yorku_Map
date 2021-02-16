const express = require('express');
const app = express();
const api = require('./routes/api.js') //Module that handles http request for database
const mongoose = require("mongoose");
var bodyParser = require("body-parser"); // for http request with json format data
app.use(bodyParser.json());
require('dotenv').config(); //Mandatory to use .env or environement variables 



const uri =  process.env.URI;// mongoDB cluster uri to connect to app.

//@desc: sets up connection to database
mongoose.connect(uri, { userNewUrlParser: true, useUnifiedTopology: true });

//@desc: checks if connection is successful
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("connected to mongoDB!"); // we're connected!
});


const port = process.env.port || 3000;
app.use('/',api)
app.listen(port,()=> console.log(`listing on port ${[port]}`));