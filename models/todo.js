const db = require("../util/database");

module.exports = class Todo {
  constructor(name, description, dateTime) {
    this.name = name;
    this.description = description;
    this.dateTime = dateTime;
  }

  save() {
    return db.query(
      "INSERT INTO todos (name, description, date_time) VALUES (?, ?, ?)",
      [this.name, this.description, this.dateTime]
    );
  }

  static fetchAll() {
    return db.execute("SELECT * FROM todos");
  }

  static findById(id) {
    return db.execute("SELECT * FROM todos WHERE todos.id = ?", [id]);
  }

  static deleteById(id) {
    return db.query("DELETE FROM todos WHERE todos.id = ?", [id]);
  }

  updateById(id) {
    return db.query(
      "UPDATE todos SET name = ?, description = ?, date_time = ? WHERE id = ?",
      [this.name, this.description, this.dateTime, id]
    );
  }
};
