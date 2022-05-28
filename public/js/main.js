let todoCheckboxes = document.getElementsByClassName('todo-checkbox');
let todoList = document.querySelector(".todo-list");
let todoHeader = document.querySelector(".todo-header");

function addEventToTodoCheckboxes () {
  for (let i = 0; i < todoCheckboxes.length; i++) {
    let todoCheckbox = todoCheckboxes[i];
  
    todoCheckbox.addEventListener('change', () => {
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
}

addEventToTodoCheckboxes();


let todoFilter = document.getElementById('todo-filter');

console.dir(todoFilter)

todoFilter.addEventListener('change', async (e) => {
  let todoFilterVal = e.target.value;
  todoHeader.textContent = `${todoFilterVal} Todos`

  try {
    let response = await fetch(`/api/v1/todos?filter=${todoFilterVal}`, {
      method: 'GET'
    })
    const {data: todos} = await response.json();
    console.log(todos);
    
    if (todos.length < 1) {
      todoList.innerHTML = `
        <li class="shadow shadow-lg rounded mb-5">
                <div class="flex flex-col items-center justify-center h-[200px] bg-yellow">
                  <span class="text-[30px]">No any ${todoFilterVal} tasks!</span>
                </div>
        </li>
      `
      return;
    }

    const allTodos = todos.map((todo) => {
      const {id, name, description, completed, date_time} = todo;
      return `
        <li class="shadow shadow-lg rounded p-6 mb-5">
          <div class="flex">
            <input type="checkbox" name="completed"  class="w-5 h-5 block mr-3 todo-checkbox" data-todo-id="${id}" ${completed === 1 ? 'checked' : ''} >
            <div>
              <h2 class="font-semibold mb-3">${name}</h2>
              <p class="mb-3">${description}</p>
              <p class="italic text-sm text-gray">${moment(date_time).format('dddd, MMMM Do YYYY, h:mm:ss a')}</p>
              <div class="mt-3">
                <a class="border rounded-sm border-blue px-3 py-1 mr-1 inline-block hover:bg-blue" href="/todos/edit-todo/${id}?edit=true">Edit</a>
                <form action="/todos/delete-todo" method="POST" class="inline">
                  <input type="hidden" name="id" value="${id}">
                  <button class="border rounded-sm border-pink px-3 py-1 mr-1 hover:bg-pink" type="submit">Delete</button>
                </form>
              </div>
            </div>
          </div>
        </li>
      `;
    })

    todoList.innerHTML = allTodos;
    addEventToTodoCheckboxes();

    // if ()
  } catch (error) {
    console.log(error);
  }


})

