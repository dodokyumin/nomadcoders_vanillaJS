const H1 = document.querySelector("div.hello:first-child h1");

function handleH1Click() {
  const currentColor = H1.style.color; //(getter)
  let newColor;
  if (currentColor === "blue") {
    newColor = "tomato";
  } else {
    newColor = "blue";
  }
  H1.style.color = newColor; //(setter)
}

H1.addEventListener("click", handleH1Click);

//처음에 newColor라는 빈 let 변수를 선언했고, if, else를 거치면서 초기화 값을 할당받게 된다.
//그리고 그 값을 h1에 넣어주는 것이기 때문에 newColor = H1.style.color; 가 아니라, H1.style.color = newColor; 가 된다. 왼쪽으로 쑉!
// "=" (equal)은 오른쪽의 값을 왼쪽에 대입한다는 뜻.
