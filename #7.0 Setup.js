const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
//= const toDoInpit = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value; //<-----input의 현재 value를 새로운 newTodo에 넣는 것. 추가설명)이때 다음 라인 toDoInput.value = "";로 value값이 사라지기 전에, const newTodo = toDoInput.value; 를 정의함으로써 기입한 value가 newTodo라는 변수에 잡아놓을 수 있게 된다.
  toDoInput.value = ""; //Enter누를 때 마다 입력값을 비워준다. <-----라인8의 newTodo와는 아무런 상관이 없다.

  //기본값 방지;
  //텍스트 저장;
  //text상자 비우기;
  //이 세가지 동작은 한번에 이루어져야 하는 세트상품. 효율성 및 편의를 위해 함수 handleToDoSubmit으로 묶어준다.
}
toDoForm.addEventListener("submit", handleToDoSubmit);
