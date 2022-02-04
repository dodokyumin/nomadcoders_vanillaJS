const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const toDos = [];

function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(toDos)); //JSON.stringify()는 object나 array 또는 어떤 JavaScript코드건 간에 그걸 string으로 만들어준다! 이제 todos키 안에 여러개를 array로 저장 가능!
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
  toDos.push(newTodo); //newTodo를 그리기 전에, toDos array에 newTodo를 push(저장)한다.
  paintTodo(newTodo);
  saveToDos(); //toDos array를 localStrage에 저장.(하지만 a,b,c,d 이렇게 하나의 텍스트로 저장됨. localStorage는 텍스트만 저장하기 때문) 여기서 사용할 브라우저의 기능이 바로 JASON.stringify
}
toDoForm.addEventListener("submit", handleToDoSubmit);
