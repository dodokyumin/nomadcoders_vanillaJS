const title = document.querySelector("div.hello:first-child h1");

//console.dir(title);

//title.style.color = "blue"; 이렇게  HTML element를 Javascript로 가져와 수정가능.

function handleTitleClick() {
  console.log("title was clicked!");
}

title.addEventListener("click", handleTitleClick);
//event를 listen하게 해주는 함수.
//title이란 HTML element가 하나 있다고 가정. addEventListener를 호출.(listen하고 싶은 event이름, event가 발생하면 호출할 function)
//handleTitleClick()라고 실행버튼을 누르길 원하지 않아. JavaScript에 function만 넘겨주고, 유저가 click할 경우 JavaScript가 실행버튼을 대신 눌러주길 바라기때문.
