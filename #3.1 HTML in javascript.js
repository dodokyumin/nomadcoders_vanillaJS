//document는 우리가 Javascript에서 HTML에 접근할 수 있는 방법이다.

const title = document.getElementById("title");

console.dir(title);
//dir함수를 통해 콘솔창에서(HTML) element를 더 자세히 볼 수있다. title인 <h1>태그 하나에서 가져올 수 있는 모든 것들.(이렇게 JS에서 HTML을 읽을 수 있다.)

title.innerText = "Got you!";
//Javascript를 통해 HTML을 바꿨다! 1.HTML에서 h1태그에 id를 추가했고, 2. getElementById라는 함수로 id를 가져온 것이다.
//GetElementById는 document의 함수이고, document(Javascript의 관점에서)는 HTMl을 뜻한다.

//title.id = "canyoudoit"; 이렇게 HTML의 Id"title"인 Element를 JS로 가져와 수정까지 가능!!
console.log(title.id);
console.log(title.className);
