const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"; //todos가 한개 이상이 되므로 효율적으로 관리해준다.

const toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  toDos.push(newTodo);
  paintTodo(newTodo);
  saveToDos();
}
toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello(item) {
  //eventListener가 event(argument)를 그냥 제공해 주는 것처럼. forEach가 item(argument)를 제공한다.
  console.log("this is the turn of", item);
}

//이전에 배웠던 greetings의 savedUserName과 비슷하다!
const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos); //우리가 stringify를 통해 넣은 그냥 string이다.
if (savedToDos) {
  //if (savedToDos !== null)과 같은 의미
  const parsedToDos = JSON.parse(savedToDos); //JSON.parse()는 string을 살아있는 JavaScript object또는 array(원형)로 변하게 해준다. stringyfy <-> parse
  console.log(parsedToDos); //넣었던 그냥 string을 parse를 통해 array로 만들어준걸 보여준다.

  parsedToDos.forEach(sayHello);
  //forEach는 array에 있는 각각의 item에 대해 function(sayHello)을 실행하게 해준다.
}
//forEach를 사용할 때. function(sayHello)을 추가로 만들 필요 없이
// parsedToDos.forEach((item) => console.log("this is the turn of", item)); 이렇게 shortcut 가능.
// => called "arrow function"

