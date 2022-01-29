const loginInput = document.querySelector("#login-form input");
const loginForm = document.getElementById("login-form");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, loginInput.value);
  paintGreetings();
}

function paintGreetings() {
  const username = localStorage.getItem(USERNAME_KEY);
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}
//사실 여기서 paintGreetings는 따로 인자를 받을 필요가 없다. 왜냐하면 우리는 localStorage에 유저정보가 존재하는걸 알고 있다.
//그러니 const username = localStorage.getItem(USERNAME_KEY); 를 통해 localStorage에 있는 username을 찾도록 해준다.
//하지만 이 방법은 localStorage를 두번 호출한다.

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings();
}
