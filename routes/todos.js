const express = require("express");
const router = express.Router();

const {
  getAllTodos,
  getAddTodo,
  postAddTodo,
} = require("../controllers/todos");

router.get("/", getAllTodos);

router.get("/add-todo", getAddTodo);

router.post("/add-todo", postAddTodo);

module.exports = router;
