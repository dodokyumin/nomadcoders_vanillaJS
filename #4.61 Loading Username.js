const loginInput = document.querySelector("#login-form input");
const loginForm = document.getElementById("login-form");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}

//greeting.innerText = `Hello ${username}`;
//greeting.classList.remove(HIDDEN_CLASSNAME);
// 중복하는 이 두줄을 함수로 만들어 간략하게 줄이는 과정.

//코드를 읽을 때 함수는 넘기고 if문 먼저 보자. 차례차례 변수와 함수가 이어져 로직이 읽혀진다.
