const express = require('express');
const app = express();
const api = require('./api.js')

const port = process.env.port || 3000;
app.use('/',api)
app.listen(port,()=> console.log(`listing on port ${[port]}`));