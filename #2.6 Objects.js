//method(생활코딩) = property(노마드코더)
const player = {
  name: "kyumin",
  points: 10,
  fat: true
};
//object는 property를 사진 데이터를 저장하도록 해준다. array는 elements들의 추가 설명이 필요없다. ex)한주= 월,화,수,목... 


console.log(player);
console.log(player.name);
console.log(player["name"]);
player.name


console.log(player);
player.fat = false;
console.log(player);
//우리가 하는 것은 object'안'의 값을 바꾸는 것, object는 아직 동일하기 때문에 const 에러가 안뜬다.

console.log(player);
player.hair = "brown";
console.log(player);

console.log(player);
player.sexy = "soon";
console.log(player);
//어떤 property든 존재하지 않아도 만들어 추가할 수 있다.

console.log(player.points);
player.points = player.points + 15;
console.log(player.points);
//object의 property를 업데이트 할 수 있다.


console.log(player, console);
//console도 object이기 때문에, 각 기능들 ex)log 같은 method(property) 들이 있고, console에 log된다.(내가 만든 player object처럼)