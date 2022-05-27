const Todo = require("../../models/todo");

const getTodos = async (req, res) => {
  console.log(req.query);
  let {filter} = req.query;
  const [todos] = await Todo.fetchAll();
  console.log(todos);
  let results = []

  if (filter === 'done') {
    results = todos.filter(todo => todo.completed === 1);
  } else if (filter === 'upcomings') {
    let completedTodos = todos.filter(todo => todo.completed === 1);
    results = completedTodos.sort(function (a,b) {
      return new Date(a.date) - new Date(b.date);
    });
  } else {
    results = todos;
  }


  // if (filter === 'upcoming') {

  // }

  return res.status(200).json({message: 'success', data: results});
}

const updateTodo = async (req, res) => {
  try {
    const todoId = req.params.id;
    const [todo] = await Todo.findById(todoId);
    if (!todo.length) {
      return res.status(404).json({message: 'No todo found!'});
    }
    const updatedTodo = {...todo[0], ...req.body}

    const newTodo = new Todo(updatedTodo.id, updatedTodo.name, updatedTodo.description, updatedTodo.completed, updatedTodo.date_time);

    await newTodo.updateById(todoId);

    res.status(200).json({message: 'success', data: updatedTodo});

  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getTodos,
  updateTodo
}