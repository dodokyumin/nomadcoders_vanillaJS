//function은 계속 반복해서 사용할 수 있는 코드 조각. 어떤 코드를 캡슐화해서, 실행을 여러번 할 수 있게 해준다.
function sayHi() {
  console.log("Hi!");
}
sayHi();
sayHi();
sayHi();
//()괄호는 실행버튼.

//argument(인수) 는 function을 실행하는 동안 어떤 정보를 function에게 보낼 수 있는 방법이다.
function sayHello(nameOfPerson, age) {
  console.log("Hello my name is" + nameOfPerson + " and I'm " + age);
}
//인수의 function의 body에서만 존재한다.
sayHello("nico", 10);
sayHello("dal", 23);
sayHello("lynn", 21);

function plus(potato, salad) {
  console.log(potato + salad);
}
//arguments name doesn't matter. there're for you. it's just place holder (자리표시자).
plus(8, 60);

function devide(a, b) {
  //2. (argument)로 8과 3이라는 data를 받는 방법.
  console.log(a / b);
}
devide(8, 3);
//1. ()로 function에게 8과 3이라는 data를 보내는 방법.

function minusFive(tomato) {
  console.log(tomato - 5);
}
minusFive(5, 10, 12, 14, 34, 5, 6, 7);
//minusFive함수의 argument를 여럿 받을 준비가 안됨, 0번째 argument만 받음. => 0.

//Created our own object + function (1)
const player = {
  name: "nico",
  sayHello: function (otherPersonsName) {
    console.log("hello " + otherPersonsName + " nice to meet you");
  },
};
console.log(player.name);
player.sayHello("lynn");
player.sayHello("nico");

//Created our own object + function (2)
const calculator = {
  add: function (a, b) {
    console.log(a + b);
  },
  minus: function (a, b) {
    console.log(a - b);
  },
  times: function (a, b) {
    console.log(a * b);
  },
  devide: function (a, b) {
    console.log(a / b);
  },
  power: function (a, b) {
    console.log(a ** b);
  },
};

calculator.add(5, 1);
calculator.minus(11, 1);
calculator.times(10, 10);
calculator.devide(18, 3);
calculator.power(2, 3);
