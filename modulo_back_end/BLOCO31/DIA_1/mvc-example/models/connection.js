const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'Alex',
  password: 'Alex@1390',
  database: 'mvc_example'});

module.exports = connection;