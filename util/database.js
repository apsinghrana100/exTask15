const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'database1',
    password: 'root'
});

module.exports = pool.promise();