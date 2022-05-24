const Todo = require("../models/todo");

const getAllTodos = (req, res) => {
  res.render("todos/todo-list", {
    pageTitle: "Todo List",
    path: "/todos",
  });
};

const getAddTodo = (req, res) => {
  res.render("todos/todo-form", {
    pageTitle: "Add Todo",
    path: "/todos/add-todo",
  });
};

const postAddTodo = async (req, res) => {
  const { name, description, date_time } = req.body;

  const todo = new Todo(name, description, date_time);

  try {
    await todo.save();
    res.redirect("/todos/");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllTodos,
  getAddTodo,
  postAddTodo,
};
