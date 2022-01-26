const loginInput = document.querySelector("#login-form input");
const loginForm = document.getElementById("login-form");

function onLoginSubmit(event) {
  event.preventDefault();
  console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginSubmit);
//submit을 감지하기 위한 "submit" event. submit은 엔터를 누르거나 버튼을 클릭할 때 발생한다.

//1. form을 submit할 때 입력값을 받아내는 것.

//브라우저는 enter/버튼 클릭을 할 때 form을 submit하고 새로고침 하도록 기본설정 되어있음. 이 기본 동작을 멈춰야 함.

//브라우저는 브라우저에서 event로 얻은 정보들을 잡아내서 onLoginSubmit()을 실행시키고 있어. 내게 중요할지도 모르는 정보를 가지고 있는 채로.
//event가 발생할 때 브라우저 내 이 function을 호출하게 되는데, onLoginSubmit(xxxxxx)여기에 첫번째 argument 로써 추가적인 정보를 가진채로 호출하게 된다.
//그리하여 어떤 정보를 브라우저가 주고 있는지 보여주기 위해서 onLoginSubmit() 함수에 event(여기서 event는 암묵적인 약속의 상수)를 argument로 설정, event.preventDefault();하고 consol.log(event);를 해보자

// function onLoginSubmit(event) {
//   event.preventDefault();
//   console.log(event);
// }

// loginForm.addEventListener("submit", onLoginSubmit);

//우리는 공간만 제공하면 된다. argument공간만 제공하면 JS가 알아서 방금 일어난 event에 대한 정보를 지닌 argument를 채워 넣을 것이다.
//.preventDefault()가 하는 일은, 어떤 event의 기본 행동이든지 브라우저의 기본 동작을 발생되지 않도록 막는 것

//결국, loginForm.addEventListener("submit", onLoginSubmit);는 즉 브라우저가 "submit" 이 event가 감지되면, onLoginSubmit 함수를 "submit"event에서 발생한 정보를
//onLoginSubmit 함수식의 ()괄호안 첫 argument로 넣어 실행한다는 것.
//우리가 이 부분을 공백이 아닌 임의의 상수로 채워넣어(대체로 event로 표기), 브라우저가 주는 event에서 발생한 정보를 활용가능케 만들어주는 것이다.
//event(=임의의 상수).preventDefault(); 이렇게 활용.
//preventDefault()가 하는 일은, 어떤 브라우저의 기본 동작(event의 기본 행동)을 발생되지 않도록 막는 것. ex)submit하면 즉시 브라우저가 페이지를 새로고침하는 행동. 새로고침하여 정보가 바로 휘발하기 때문.
