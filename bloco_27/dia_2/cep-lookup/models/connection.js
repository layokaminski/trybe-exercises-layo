// models/connection.js
require('dotenv').config();
const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB_NAME });

module.exports = connection;