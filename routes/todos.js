const express = require("express");
const router = express.Router();

const {
  getAllTodos,
  getAddTodo,
  postAddTodo,
  getEditTodo,
  postEditTodo,
  postDeleteTodo
} = require("../controllers/todos");

router.get("/", getAllTodos);

router.get("/add-todo", getAddTodo);

router.post("/add-todo", postAddTodo);

router.get("/edit-todo/:todoId", getEditTodo);

router.post("/edit-todo", postEditTodo);

router.post("/delete-todo", postDeleteTodo)

module.exports = router;
