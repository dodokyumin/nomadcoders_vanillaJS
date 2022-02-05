const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
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
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveToDos();
}
toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintTodo);
} //1.forEach 함수는 이 paintToDo를 parsedToDos 배열의 각 요소마다 실행을 한다.
//2. forEach함수는 paintToDo를 요소마다 실행하면서 각각의 item을 준다. 그러면 이 item이 object가 된다.

//array에서 뭔가를 삭제할 때 실제로 array에서 그걸 지우는게 아니라, 지우고 싶은 item을 빼고 새 array를 만드는 것이다.
//sexyFilter함수는 반드시 true를 리턴해야한다. 만약 새 array에서 이 object를 유지하고 싶으면.
//만약 false를 리턴하면 그 item은 새 array에 포함되지 않을 것이다.

//sexyFilter()의 괄호 안에 1,2,3,4가 차례대로 실행될 거다. 이때 sexyFilter는 1,2,3,4 각각의 item을 부르게 된다. 그러므로 item을 저장할 공간을 만들어야한다. 이때 argument의 이름이 어떤 글자여도 상관x
function sexyFilter(item) {
  return item !== 3;
}
[1, 2, 3, 4].filter(sexyFilter); //=====> [1,2,4]

const arr = ["pizza", "banana", "tamato"];
function sexyFilter2(food) {
  return food !== "banana";
}
arr.filter(sexyFilter2); //=====> ["pizza","tomato"]

const arr2 = [1234, 5454, 223, 122, 45, 6775, 334];
function sexyFunction(potato) {
  return potato <= 1000;
}
arr2.filter(sexyFunction); //=======>[223, 122, 45, 334]

const todos = [
  { text: "a", id: 1621229339744 },
  { text: "b", id: 32247434432 },
  { text: "c", id: 768376729 },
];
function kyuminIdFilter(canBeAnyThing) {
  return canBeAnyThing.id !== 1621229339744;
}
todos.filter(kyuminIdFilter); //=======>[{text: "b", id: 32247434432},{text: "c", id: 768376729}]

const makeLaLoArr = [{ text: "lalala" }, { text: "lololo" }];
function lalaFilter(tomato) {
  return tomato.text !== "lololo";
}
makeLaLoArr.filter(lalaFilter); //=====> [{ text: "lalala" }]
