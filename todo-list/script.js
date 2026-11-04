const todoList = [];

function renderTodoList() {
  let todoListHTML = '';
  todoList.forEach((todoObject) => {
    const { name, dueDate } = todoObject;

    todoListHTML += /*html*/`
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="delete-button js-delete-todo-button">Delete</button>`;
  });

  document.querySelector('.display-todo-list').innerHTML = todoListHTML;


  document.querySelectorAll('.js-delete-todo-button').forEach((deleteButton, index) => {
    deleteButton.addEventListener('click', () => {
      todoList.splice(index, 1);
      renderTodoList();
    });
  });
}

document.querySelector('.js-add-todo-button').addEventListener('click', () => {
  addTodo();
});

function addTodo() {
  const inputElement = document.querySelector('.input');
  const dueDateElement = document.querySelector('.dueDate');

  const name = inputElement.value;
  const dueDate = dueDateElement.value;

  todoList.push({ name, dueDate });
  inputElement.value = '';
  renderTodoList();
}