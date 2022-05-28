const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "todo_nodejs",
  password: "secret123",
});

module.exports = pool.promise();
