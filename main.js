/**
Zahra Bonner
12/9/2020
To-Do List Project
Features:
- Add tasks styled with CSS
- Remove all tasks created
- Delete Individual Tasks
- 
**/

window.onload = function() {    

//DOM Selectors 
var todoInput = document.querySelector(".todoinput");
var todoButton = document.querySelector(".todobutton");
var todoList = document.querySelector(".todolist");
var todoClear = document.querySelector(".todoclear")

//Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteTodo);
todoClear.addEventListener("click", clearTodo);

//Functions
function addTodo() {

  //Create a div specifically for todos
  var todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  //Create the actual to-do list
  var newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;

  //Adds an item to the to-do list
  newTodo.classList.add("todoitem");
  todoDiv.appendChild(newTodo);

  //Returns text input to empty box after submission on button click
  todoInput.value = "";

  //Creates the trash button
  var trashButton = document.createElement("button");
  trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
  trashButton.classList.add("trashbtn");
  todoDiv.appendChild(trashButton);

  //Attach final to-do
  todoList.appendChild(todoDiv);
}

//This function is responsible for deleting individual tasks 
function deleteTodo(e) {
  var item = e.target;

  if (item.classList[0] === "trashbtn") {
    //Make the parent element the target
    var todo = item.parentElement;
      todo.remove();
}
}
function clearTodo(){

var ul = document.getElementById("todolist");
while((var lis = ul.getElementsByTagName("li")).length > 0) {
  ul.removeChild(lis[0]);
}
}
  };






