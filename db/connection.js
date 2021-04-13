const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'm0m0nkey1010',
        database: 'election'
    }
);

module.exports = db;