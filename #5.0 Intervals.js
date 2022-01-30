const clock = document.querySelector("h2#clock"); //=("#clock")
//h2 #id means #id inside of h2. h2 #id means an h2 with an ID of 'id'.

//interval 만들기. interval이란? '매번'일어나야 하는 무언가를 말한다.
function sayHello() {
  console.log("hello");
}

//setInterval(호출되는 function, 호출되는 function 간격을 몇ms로 할 지);
setInterval(sayHello, 5000);
