const H1 = document.querySelector("div.hello:first-child h1");

function handleH1Click() {
  H1.style.color = "blue";
}
function handleMouseEnter() {
  H1.innerText = "Mouse is here!";
}
function handleMouseLeave() {
  H1.innerText = "Mouse is gone!";
}

//H1.addEventListener("click", handleH1Click);
H1.onclick = handleH1Click;
//H1.addEventListener("mouseenter", handleMouseEnter);
H1.onmouseenter = handleMouseEnter;
//H1.addEventListener("mouseleave", handleMouseLeave);
H1.onmouseleave = handleMouseLeave;
//이렇게도 표현이 가능, 전자의 경우 .removeEventListener 로 자유롭게 지울 수 있다.

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}
//document.의 body, head, title 이런 것들은 object뒤에 바로 쓸 수 있음. document.div(x) <- querySelector getElementById 등으로 찾아와야 함
function handleWindowCopy() {
  alert("copier!");
}
function handleWindowOffline() {
  alert("SOS no WIFI");
}
function handleWindowOnline() {
  alert("ALL GOOOOOD");
}

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
