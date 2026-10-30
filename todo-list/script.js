const todoList = [];
function renderTodoList(){
  let todoListHTML = '';
  for (let i = 0; i <todoList.length; i++ ){
    const todo = todoList[i];
    const html = `
    <p>${todo} 
      <button onclick="
      todoList.splice(${i}, 1); renderTodoList();
      ">Delete</button> 
    </p>`;
    todoListHTML += html;
    document.querySelector('.display-todo-list').innerHTML = todoListHTML;
  }
}

function addTodo(){
  const inputEelement = document.querySelector('.input');
  const name = inputEelement.value;
  todoList.push(name);
  inputEelement.value = '';
  renderTodoList();
}