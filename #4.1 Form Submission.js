const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

// function onLoginBtnClick() {
//   const username = loginInput.value;
//   if (username === "") {
//     alert("Please write your name");
//   } else if (username.length > 15) {
//     alert("Your name is too long.");
//   }
// }
// HTML의 form과 input기능을 사용하여 JS를 간단히. 밑 내용처럼 만들기

function onLoginBtnClick() {
  const username = loginInput.value;
  console.log(username);
}
loginButton.addEventListener("click", onLoginBtnClick);

/**<!--HTML의 form과 input기능을 사용하여 JS를 간단히.
required : 이 input을 필수입력 항목으로 만들어준다.
maxlength : 최대 글자수 조절.
input의 이러한 기능들을 작동시키기 위해서는 input이 <form> 안에 있어야 한다.
버튼을 누르거나 엔터를 하면 form이 submit 되어 페이지가 새로고침이 된다. 새로고침을 막고 form이 저장된 채로 있게 만들어야한다.
-->**/
