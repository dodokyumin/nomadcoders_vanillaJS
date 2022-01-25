const a = 5;
const b = 2;
let myName = "kyumin";
//constant(상수)는 값이 바뀔 수 없다.

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello " + myName);

myName = "hongkyumin";
//let의 updating은 creating이 아니기 때문에 let을 다시 쓰지 않는다.

console.log("your name is " + myName);

//always const, sometimes let, never var