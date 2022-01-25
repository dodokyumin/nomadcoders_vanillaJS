const age = prompt("How old are you?")

console.log(typeof age)
//prompt는 사용자에게 창을 띄울 수 있게 해줌, 그러나 창 띄움과 동시에 js가 페이지를 멈추고, 그 창은 css적용도 안되는 단점.
//입력값이 어떠하든 모두 value(string)로 가져감.

console.log("15", parseInt("15"));
//parseInt는 string->number

console.log(age, parseInt(age));
//parseInt로 number타입으로 바꾸면 숫자간의 true/false 비교값 식을 만들 수 있음.
//age.prompt에서의 입력값이 숫자인지 아닌지 알 수도 있게 해줌(NaN=Not a Number.)



const ageCalculator = parseInt(prompt("How old are you?"));
//function은 안에서 부터 밖으로, prompt("How old are you?") 입력값이 15, => parseInt(15)