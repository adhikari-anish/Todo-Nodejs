const express = require("express");
const router = express.Router();

const {updateTodo, getTodos} = require('../../controllers/api/todos');

router.get('/', getTodos);
router.patch('/:id', updateTodo);

module.exports = router;