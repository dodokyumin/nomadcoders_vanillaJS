const H1 = document.querySelector("div.hello:first-child h1");

function handleH1Click() {
  const clickedClass = "clicked"; // raw string이 반복되면 변수로 만들어 에러를 줄이자!
  if (H1.className === clickedClass) {
    //Javascript에서 H1에게 class "active" 부여하기.
    H1.className = "";
  } else {
    H1.className = clickedClass;
  }
}
H1.addEventListener("click", handleH1Click);

//cleaning code part.1 : raw string이 반복되면 변수로 설정하자!
