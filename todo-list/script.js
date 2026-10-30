const todoList = [];
function renderTodoList(){
  let todoListHTML = '';
  for (let i = 0; i < todoList.length; i++ ){
    const todoObject = todoList[i];
    const {name, dueDate} = todoObject;

    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button onclick="
      todoList.splice(${i}, 1); renderTodoList();
      " class = "delete-button">Delete</button>`; 
    todoListHTML += html;
  } document.querySelector( '.display-todo-list').innerHTML = todoListHTML;
}

function addTodo(){
  const inputEelement = document.querySelector('.input');
  const dueDateElement = document.querySelector('.dueDate');

  const name = inputEelement.value;
  const dueDate = dueDateElement.value;

  todoList.push({ name, dueDate });
  inputEelement.value = '';
  renderTodoList();
}

