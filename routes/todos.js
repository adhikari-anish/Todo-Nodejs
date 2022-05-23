const express = require("express");
const router = express.Router();

const { getAllTodos } = require("../controllers/todos");

router.route("/").get(getAllTodos);

module.exports = router;
