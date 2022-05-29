const Todo = require("../models/todo");
const { validationResult } = require('express-validator');

const getAllTodos = async (req, res, next) => {
  try {
    const todos = await Todo.fetchAll();

    res.render("todos/todo-list", {
      pageTitle: "Todos",
      path: "/todos",
      todos: todos[0],
    });
  } catch (error) {
    return next(error);
  }

};

const getAddTodo = (req, res) => {
  res.render("todos/todo-form", {
    pageTitle: "Add Todo",
    path: "/todos/add-todo",
    editing: false,
    hasError: false,
    validationErrors: []
  });
};

const postAddTodo = async (req, res, next) => {
  const { name, description, date_time } = req.body;
  const todo = new Todo(null, name, description, false, date_time);
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    let validationErrors; 
    if (errors.array().length) {
      validationErrors = errors.array().reduce((prev, curr) => {
        return {...prev, [curr.param]: curr.msg}
      }, {});
    }
    return res.status(422).render('todos/todo-form', {
      pageTitle: "Add Todo",
      path: "/todos/add-todo",
      editing: false,
      hasError: true,
      todo: {
        name,
        description,
        date_time
      },
      validationErrors: validationErrors
    })
  }

  try {
    await todo.save();
    res.redirect("/todos/");
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

const getEditTodo = async (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect("/");
  }

  const todoId = req.params.todoId;

  try {
    const [todo] = await Todo.findById(todoId);

    if (todo.length === 0) {
      return res.redirect("/");
    }
    res.render("todos/todo-form", {
      pageTitle: "Edit Todo",
      path: "/todos/edit-todo",
      editing: editMode,
      todo: todo[0],
      validationErrors: []
    });
  } catch (error) {
    return next(error);
  }

};

const postEditTodo = async (req, res, next) => {
  let { id, name, description, completed, date_time } = req.body;

  completed = completed ? completed : false;
  const todo = new Todo(id, name, description, completed, date_time);
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    let validationErrors; 
    if (errors.array().length) {
      validationErrors = errors.array().reduce((prev, curr) => {
        return {...prev, [curr.param]: curr.msg}
      }, {});
    }
    return res.status(422).render('todos/todo-form', {
      pageTitle: "Edit Todo",
      path: "/todos/edit-todo",
      editing: true,
      hasError: true,
      todo: {
        id,
        name,
        description,
        date_time
      },
      validationErrors: validationErrors
    })
  }

  try {
    await todo.updateById(id);
    res.redirect("/todos/");
  } catch (error) {
    console.log(error);
    return next(error);
  }
}

const postDeleteTodo = async (req, res, next) => {
  const { id } = req.body;

  try {
    await Todo.deleteById(id);
    res.redirect("/todos/");
  } catch (error) {
    console.log(error);
    return next(error);
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
