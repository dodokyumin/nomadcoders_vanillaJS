const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

// 이렇게 표현도 가능
// const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
  console.log("Hello", loginInput.value); //console.dir(loginInput)을 통해 value라는 object를 알아냄.
}

loginButton.addEventListener("click", onLoginBtnClick);
