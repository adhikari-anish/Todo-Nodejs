const getAllTodos = (req, res) => {
  res.render("todos/todo-list");
};

module.exports = {
  getAllTodos,
};
