// console.dir(element) 을 통해서 element를 console에 출력시켜줘.
//엄청 많은 property 중 사용가능한 event는, property앞에 on이 붙어있는 것. 그것이 바로 event listener.
//사용할 때는 "on"을 빼고. onclick -> click

const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  title.style.color = "blue";
}
function handleMouseEnter() {
  title.innerText = "Mouse is here!";
}
function handleMouseLeave() {
  title.innerText = "Mouse is gone!";
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
