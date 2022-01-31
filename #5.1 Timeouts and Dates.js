const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

getClock(); //website가 load되자마자 getClock()을 실행하기 위함.

setInterval(getClock, 1000); // setTimeout(실행하려는 function, 얼마나 기다릴지 ms단위)

//javascript가 가지고 있는 Date object
//호출하는 그 시점의 시간정보를 갖고있는 new Date(), 그 시간정보에서 .getMinutes 분 정보 가져오기.
//new Date().getSeconds()  =>   오늘을 가져오는 object에 매 초를 가져오는 법.
