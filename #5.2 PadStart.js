//padStart() 함수는 string이 항상 적어도 최소한 2개의 문자를 가지고 있게 만들어준다. 10:1 => 10:01
// "string".padStart(string의 글자가 x자가 아니라면, Start쪽에""을 padding한다.)
//"1".padStart(2,"0");
//String(안의 내용을 string으로 바꿔준다)

const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();

setInterval(getClock, 1000);
