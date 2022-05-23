const getAllTodos = (req, res) => {
  res.render("todos/todo-list");
};

const getAddTodo = (req, res) => {
  res.render("todos/todo-form");
}

module.exports = {
  getAllTodos,
  getAddTodo
};
