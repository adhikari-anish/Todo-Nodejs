const todoForm = document.getElementById('todo-form');
const todoName = document.getElementById('name');
const todoDescription = document.getElementById('description');
const todoDateTime = document.getElementById('date-time');
const todoSaveBtn = document.getElementById('todo-save-btn');

const isRequired = value => value === '' ? false : true;

const checkName = () => {
  let valid = false;
  const name = todoName.value.trim();
  if (!isRequired(name)) {
    showError(todoName, 'Todo name is required');
  } else {
    showSuccess(todoName);
    valid = true;
  }
  return valid;
}

const checkDescription = () => {
  let valid = false;
  const name = todoDescription.value.trim();
  if (!isRequired(name)) {
    showError(todoDescription, 'Todo description is required');
  } else {
    showSuccess(todoDescription);
    valid = true;
  }
  return valid;
}

const checkDateTime = () => {
  let valid = false;
  const name = todoDateTime.value.trim();
  if (!isRequired(name)) {
    showError(todoDateTime, 'Todo date and time is required');
  } else {
    showSuccess(todoDateTime);
    valid = true;
  }
  return valid;
}

const showError = (inputEl, message) => {
  const errorEl = inputEl.nextElementSibling;
  if (errorEl) {
    errorEl.textContent = message;
  }
}

const showSuccess = (inputEl) => {
  const errorEl = inputEl.nextElementSibling;
  if (errorEl) {
    errorEl.textContent = '';
  }
}

todoForm.addEventListener('input', (e) => {
  switch (e.target.id) {
    case 'name':
      checkName();
      break;
    case 'description':
      checkDescription();
      break;
    case 'date-time':
      checkDateTime();
      break;
  }
})

