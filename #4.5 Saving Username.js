//localStrage라는 API는 우리가 브라우저에 뭔가를 저장할 수 있게 해줘. 그래서 나중에 가져다 쓸 수 있지. 마치 youtube의 볼륨처럼.
//localStorage에 뭐가 들어있는지 보고싶으면 개발자도구-애플리케이션-로컬스토리지
//https://developer.mozilla.org/ko/docs/Web/API/Window/localStorage
//우리는 key(username)와 value(dodokyumin)만 준비하면 돼.

const loginInput = document.querySelector("#login-form input");
const loginForm = document.getElementById("login-form");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem("username", username); //username(string)이라는 key + username(const)라는 value
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);
