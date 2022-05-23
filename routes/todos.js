const express = require("express");
const router = express.Router();

const { getAllTodos, getAddTodo } = require("../controllers/todos");

router.get("/", getAllTodos);

router.get("/add-todo", getAddTodo);

module.exports = router;
