const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");

const toDoList = document.getElementById("todo-list");

function paintTodo(newTodo) {
  //to do를 그리는 역할
  console.log(newTodo);
  const li = document.createElement("li");
  const span = document.createElement("span"); //나중에 todo list를 삭제할 버튼을 만들 것이기 때문에 <span></span>을 추가하여 다루기 쉽게 만든다.
  li.appendChild(span); //span은 li내부(자식)에 있어야 하므로.
  span.innerText = newTodo;
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";

  paintTodo(newTodo); //저장했던 newTodo를 paintTodo()함수의 인자로 보낸다.
}
toDoForm.addEventListener("submit", handleToDoSubmit);

//html에서 <input type="text" placeholder="Write a TO DO and Press Enter" required>에 required를 넣었기 때문에 공백 불가.
