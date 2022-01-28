const loginInput = document.querySelector("#login-form input");
const loginForm = document.getElementById("login-form");

const link = document.querySelector("a");

function onLoginSubmit(event) {
  event.preventDefault();
  console.log(loginInput.value);
}

function handleLinkClick(event) {
  event.preventDefault();
  console.dir(event);
  alert("clicked!");
}
// handleLinkClick({information about the event that just happened})
loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);

//sometimes we want to default our behavior, 가끔은 뭐가 클릭됐는지 등 정보를 알고 싶을 떄가 있다.
