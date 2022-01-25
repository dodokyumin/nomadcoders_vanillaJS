//기존의 class "sexy-font"도 바뀌어 버린다.(Part two에서)
//그러므로 classList와 contains()를 통해 class들의 목록으로 작업하여 class변경하기.

const H1 = document.querySelector("div.hello:first-child h1");

function handleH1Click() {
  const clickedClass = "clicked";
  if (H1.classList.contains(clickedClass)) {
    //is classList contains "clicked?" true/false
    H1.classList.remove(clickedClass); //remove함수 사용하여 더 간결
  } else {
    H1.classList.add(clickedClass);
  }
}
H1.addEventListener("click", handleH1Click);
