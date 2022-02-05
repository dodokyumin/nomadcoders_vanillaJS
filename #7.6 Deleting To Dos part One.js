//toDos를 지울 때 마다 local storage에 업데이트를 하지 않네?
//console에서 toDos array가 DB, localStorage는 toDos array를 복사해두는 곳. toDos array =x locatStorage
//JS,HTML입장에서 deleteToDo는 화면에서 어떤 HTML의 element(li)를 지워야 하는지 알고 있다. 그치만 DB(콘솔창에서 toDos를 쳤을 때 나오는 array)에서 어떤 것을 target하고 지워야 하는 지 몰라.
//toDos array의 각 element를 object화 하여서 id를 부여하고 array에 넣자! ex)[{id:121212, text:"drink"}]

const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";

let toDos = []; //our toDos DB

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  console.log(li.id);//우리가 X버튼을 눌렀을 때, 해당 버튼의 li(부모태그)의 고유 id를 console창에서 확인. 즉 무엇을 지우려 하는지 특정 타겟을 알 수 있음
  li.remove();
}

function paintTodo(newTodo) {
  //2-3. 밑에 paintTodo(newTodoObj);의 ewTodoObj인자를 연결받았기 때문에 여기서 newTodo는 이제 object를 받는다
  const li = document.createElement("li");
  li.id = newTodo.id; //3.HTML의 list에게 1.에서 했던 id를 부여하자! 이제 localStorge와 html li에서도 같은 id와 같은 text를 넣어줬으니 item들을 선택 삭제할 수 있다는 얘기. 하지만 그에따른 x를 누른 버튼의 id도 얻어야함.
  const span = document.createElement("span");
  span.innerText = newTodo.text; //2-4. obeject를 받는 newTodo는 ~.text or ~.key의 형태로 쓸 수 있게 되었다. newTodo.text;를 통해서 HTML에 obj id값을 주자!
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value; //2-1.newTodo는 오직 text인 newTodo만 갖고있다.
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(), //1.Todo array에 매 밀리초까지 계산하는 함수를 id로 넣어서 각각의 li item을 구별한다.
  };
  toDos.push(newTodoObj);
  paintTodo(newTodoObj); //2.newTodo는 오직 text인 newTodo만 갖고있다. 2-2.인자를 newTodoObj로 바꿈-> newTodo는 이제 object를 받는다(=paintTodo는 이제 obj와 함께 call되고 있다). 하지만! 새로고침하면 [object Object]가 나옴. 그래서 HTML에도 obj id값을 둬야한다!
  saveToDos();
}
toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintTodo);
}
