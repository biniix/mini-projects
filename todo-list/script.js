const todoList = [];

function renderTodoList(){
  let todoListHTML = '';
  todoList.forEach((todoObject, index) => {
    const {name, dueDate} = todoObject;

    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button class="delete-button js-delete-todo-button">Delete</button>`;
    todoListHTML += html;
  });

  document.querySelector('.display-todo-list').innerHTML = todoListHTML;
}

document.querySelectorAll('.js-delete-todo-button').forEach((deleteButton,index) => {
  deleteButton.addEventListener('click',() => {
   todoList.splice(index, 1); renderTodoList(); 
  });
});

document.querySelector('.js-add-todo-button').addEventListener('click',() => {
  addTodo();

});

function addTodo(){
  const inputEelement = document.querySelector('.input');
  const dueDateElement = document.querySelector('.dueDate');

  const name = inputEelement.value;
  const dueDate = dueDateElement.value;

  todoList.push({ name, dueDate });
  inputEelement.value = '';
  renderTodoList();
}