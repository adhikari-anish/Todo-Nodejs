const db = require("../config/database");

module.exports.seedTodosTable = async function () {
  try {
    await db.query(
      `INSERT INTO todos (id, name, description, completed, date_time) VALUES 
        (1, 'Complete the landing page', 'Implement the design of the landing page of the todo project', false, '2022-05-24T22:16'),
        (2, 'Do homework', 'Solve problems related to algebra...', true, '2022-05-24T03:16'),
        (3, 'Wash dishes', 'Wash dishes and clean kitchen', false, '2022-05-23T03:16')
      `
    );
    console.log("Todos inserted successfully");
    process.exit(0);
  } catch (err) {
    console.log(err.stack);
    process.exit(0);
  }
};

module.exports.undoSeedTodosTable = async function () {
  try {
    await db.query("DELETE FROM todos");
    console.log("Undo todo seeds successfully");
    process.exit(0);
  } catch (err) {
    console.log(err.stack);
    process.exit(0);
  }
};
