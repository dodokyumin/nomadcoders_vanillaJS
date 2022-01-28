const loginInput = document.querySelector("#login-form input");
const loginForm = document.getElementById("login-form");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
//일반적으로 string만 포함된 변수는 대문자로 표기하고 string을 저장하고 싶을 때 사용함.
//위 세개 변수처럼 중요한 정보를 담은게 아니라서 대문자로 작성
function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  greeting.innerText = `Hello ${username}`;
  //greeting.innerText = "Hello " + username;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);

// `string ${variable name}`  `(백틱)
// 변수를 string안으로 집어넣고 싶다면 ${변수명}
