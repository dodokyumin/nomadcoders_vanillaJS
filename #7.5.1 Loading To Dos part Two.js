const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

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

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);

  parsedToDos.forEach(paintTodo); //왜냐하면 이전에는 새로고침 하면 localStorage에 저장은 됐지만 document.body에 load(paint그리지) 못하고 list가 날라갔기 때문.
  //그러므로 localStorage에 저장된 string들을 parse를 통해 다시 array로 바꾸고, forEach로 각각 array내부의 item들에게 paintTodo를 각각 실행시킨다.
  //근데 여기서! 새로고침 후 새로 추가하면 예전것들은 없어지고 새걸로 교체된다!
  //왜냐하면 const toDos = []; 가 항상 비어있기 때문이다!!
}
