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
    editing: false,
  });
};

const postAddTodo = async (req, res) => {
  const { name, description, date_time } = req.body;

  const todo = new Todo(null, name, description, false, date_time);

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
  const [todo] = await Todo.findById(todoId);

  if (todo.length === 0) {
    return res.redirect("/");
  }
  res.render("todos/todo-form", {
    pageTitle: "Edit Todo",
    path: "/todos/edit-todo",
    editing: editMode,
    todo: todo[0],
  });
};

const postEditTodo = async (req, res) => {
  let { id, name, description, completed, date_time } = req.body;

  completed = completed ? completed : false;
  const todo = new Todo(id, name, description, completed, date_time);

  try {
    await todo.updateById(id);
    res.redirect("/todos/");
  } catch (error) {
    console.log(error);
  }
}

const postDeleteTodo = async (req, res) => {
  const { id } = req.body;

  try {
    await Todo.deleteById(id);
    res.redirect("/todos/");
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getAllTodos,
  getAddTodo,
  postAddTodo,
  getEditTodo,
  postEditTodo,
  postDeleteTodo
};
