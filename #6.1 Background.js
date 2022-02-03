const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

//Javascript에서 뭔가를 생성해서 그걸 html에 추가하는 법. (지금까지는 html에서 만들어 querySelector로 가져옴)
//(html에서 <img src="img/2.jpg" /> 이렇게 하면 X. 0.jpg,1.jpg,2.jpg가 될 수도 있기 때문에)

const bgImage = document.createElement("img");
console.log(bgImage); //요소에서 찾을 수 없지만 콘솔에는 보인다. 즉 img라는 bgImage소스가 html이 아닌 js에 생성되었다는 뜻.
//=>그말은 bgImage.src 처럼 뒤에 .~로 응용가능.
bgImage.src = `img/${chosenImage}`;
console.log(bgImage); // 오른클릭 '요소 패널에서 보기' => 찾을 수 없음. document에 존재하지 않고 JS에만 있기 때문.

//그래서 마지막으로 bgImage를 (document의)body내부에 추가한다.(html에서 src=""에 해당하는 부분)
document.body.appendChild(bgImage);
//append 덫붙이다,추가하다. 가장 뒤에.
//prepend 가장 위에 추가하기.
