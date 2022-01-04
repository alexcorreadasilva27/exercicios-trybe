// models/connection.js

const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'Alex',
    password: 'Alex@1390',
    database: 'model_example' });

module.exports = connection;