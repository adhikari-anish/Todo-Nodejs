const express = require("express");
const router = express.Router();
const { body } = require("express-validator");

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

router.post("/add-todo", [
  body('name').not().isEmpty().withMessage('Todo name is required.'),
  body('description').not().isEmpty().withMessage('Todo description is required.'),
  body('date_time').notEmpty().withMessage('Todo date and time is required.')
], postAddTodo);

router.get("/edit-todo/:todoId", getEditTodo);

router.post("/edit-todo", [
  body('name').not().isEmpty().withMessage('Todo name is required.'),
  body('description').not().isEmpty().withMessage('Todo description is required.'),
  body('date_time').notEmpty().withMessage('Todo date and time is required.')
], postEditTodo);

router.post("/delete-todo", postDeleteTodo)

module.exports = router;
