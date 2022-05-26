const Todo = require("../models/todo");

const getAllTodos = async (req, res) => {
  const todos = await Todo.fetchAll();
  // console.log(todos[0]);
  res.render("todos/todo-list", {
    pageTitle: "Todos",
    path: "/todos",
    todos: todos[0],
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

const getEditTodo = async (req, res) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect("/");
  }

  const todoId = req.params.todoId;
  console.log("here");
  const [todo] = await Todo.findById(todoId);
  console.log(todo);

  if (todo.length === 0) {
    return res.redirect("/");
  }
  res.render("todos/todo-form", {
    pageTitle: "Edit Todo",
    path: "/todos/edit-todo",
    editing: editMode,
    todo: todo,
  });
};

module.exports = {
  getAllTodos,
  getAddTodo,
  postAddTodo,
  getEditTodo,
};
