const H1 = document.querySelector("div.hello:first-child h1");

function handleH1Click() {
  H1.classList.toggle("clicked");
}

H1.addEventListener("click", handleH1Click);

//toggle 함수는 H1의 classList에 clicked class가 이미 있는지 확인해서 만약 있다면, toggle이 clicked를 제거해준다. 만약 없다면 clicked를 classList에 추가해준다.
//마치 스마트폰 홀드키처럼.
