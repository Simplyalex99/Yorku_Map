const mysql = require("mysql");
require("dotenv").config();
const db = async(params)=> new Promise(
  mysql.createConnection({
    user: process.env.user, // e.g. 'my-db-user'
    password: process.env.username, // e.g. 'my-db-password'
    database: process.env.password, // e.g. 'my-database'
    host: process.env.host, // e.g. '127.0.0.1'
  })
);



module.exports = db;