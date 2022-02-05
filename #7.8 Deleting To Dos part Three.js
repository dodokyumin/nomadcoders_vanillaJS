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
  console.log(typeof li.id); //2. li id 는 string타입이였다. 그리고 밑줄에서 toDo.id는 number타입이다. 그래서 애초에 둘이 다르니 모두 true가 되어서 변한게 없다!]
  //2.1 그럼 왜 li id는 string 타입일까? ====> 26,27라인을 보면 li는 직접 DOM을 건드린건데, DOM의 id는 문자열이라고 함(MDN애서). 즉 우리가 newTodo.id로 number를 넣어주었어도, DOM에서는 string으로 형변환해서 받아들이는 것 같다...
  //1. toDos = toDos.filter((toDo) => toDo.id !== li.id);
  //1.(삭제 후에)남아있는 toDos(들)은, filter를 거쳐 남은애들이다. filter내용은 toDos DB에 있는 항목 각자 스스로의 toDo의 id와, li의 id가 같지 않은(!==) 항목의 친구들이 바로 true가 되므로, 그 toDo들은 남고,
  //1.2 id와 li의 id가 같은 친구들은 (false가 되므로) filter에서 걸려져 기존 toDos array에서 제외된 채로 새 toDos array를 새로고침할 때 없어진다. ==> 우리가 클릭한 li.id와 다른 toDo는 남겨두고 싶어.
  //하지만 이 상태로 브라우저에서 X버튼으로 지워봐도 toDos array의 내용은 같다. 왜 그럴까?
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //3. 그러므로 문자열을 숫자로 바꿔주는 parseInt를 더해주어 식을 완성해준다.
  saveToDos(); //4.toDos DB에서 todo를 지운 뒤에 saveToDos를 한번 더 불러야 하는 것을 잊으면 안돼!
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
}
