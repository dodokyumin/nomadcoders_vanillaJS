const age = parseInt(prompt("How old are you?"));

//console.log(isNaN(age));
//15입력 -> false( age는 Not a Number가 아니다(false))
//dsdas -> true( age는 NaN이다(ture))

// if(condition(불리언으로 판별이 가능하여야 함)){
//   // condition ===ture
// } else {
//   //condition === false
// }

if (isNaN(age)) {
  console.log("Please write a number");
} else {
  console.log("Thank you for writing your age.");
}
