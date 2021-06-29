// models/connection.js

// Utilizar user Layo para conexão com o banco

const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'Layo',
    password: 'secret',
    database: 'model_example'});

module.exports = connection;
