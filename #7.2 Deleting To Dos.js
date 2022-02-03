const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");

const toDoList = document.getElementById("todo-list");

function deleteTodo(event) {
  //여러 X버튼들은 같은 event를 기다리고, 같은 function을 실행한다. 우리는 버튼들을 개별적으로 나누기위해  click의 event(parentNode or parentElement)를 사용한다.
  //console.log(event); //click의 event(properties)들 중 path를 보면 어떤 element에서 클릭이 일어난 건지를 경로를 보여준다. event가 클릭 된 위치를 보여주는 path(property).=>클릭 target이 무엇인지를 확인할 수 있다는 의미. 아하! "li"부모태그를 target해서 지워야겠네!
  //console.dir(event.target); // event.target까지의 경우, 우리는 그저 어떤게 click되었는지만 알 수 있다. -> button, 그러나 어떤 button인지 모름. 그래서 dir하여보면, 그중에 parentNode (or parentElement)(누가 그 button의 부모냐는 것)를 찾았다! (윗줄에서 확인했던 부모태그 li)가 있다.
  //console.dir(event.target.parentElement);//여기서 여러 버튼들의 innerText property를 찾아보면 각각 입력값에 따라 구분된 걸 볼 수 있다!! -->console.dir(event.target.parentElement.innerText);로도 쉽게 확인가능하다.
  const li = event.target.parentElement; //이것이 바로 우리가 삭제하고 싶은 li
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
  toDoList.appendChild(li); //apend 함수는 항상 맨 마지막에.
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";

  paintTodo(newTodo);
}
toDoForm.addEventListener("submit", handleToDoSubmit);
