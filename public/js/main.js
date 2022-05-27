let todoCheckboxes = document.getElementsByClassName('todo-checkbox');

for (let i = 0; i < todoCheckboxes.length; i++) {
  let todoCheckbox = todoCheckboxes[i];

  todoCheckbox.addEventListener('change', () => {
    // console.log('cheage');
    let data = todoCheckbox.checked ? { completed: true } : { completed : false };
    let todoId = todoCheckbox.dataset.todoId;

    console.log(JSON.stringify(data));    

    fetch(`/api/v1/todos/${todoId}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json'
      } 
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  })
}


