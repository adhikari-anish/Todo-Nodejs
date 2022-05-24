const db = require("../util/database");

module.exports.dropTodosTable = async function () {
  try {
    await db.query("DROP TABLE IF EXISTS todos");
    console.log("Todos table dropped successfully");
    process.exit(0);
  } catch (err) {
    console.log(err.stack);
    process.exit(0);
  }
};

module.exports.createTodosTable = async function () {
  try {
    await db.query(`CREATE TABLE todos (
      id INT NOT NULL AUTO_INCREMENT,
      name VARCHAR(50) NOT NULL,
      description VARCHAR(250) NOT NULL,
      date_time DATETIME NOT NULL,
      PRIMARY KEY (id)
    )`);
    console.log("Todos table created successfully");
    process.exit(0);
  } catch (err) {
    console.log(err.stack);
    process.exit(0);
  }
};
