const hellos = document.getElementsByClassName("hello");

//console.log(hellos);
//이때 콘솔창에 hello class의 elements들이 []로 Array 되어있다.(object는 {})
//하지만 hellos.~~ 로 뭔가 할 수 없다. 왜냐하면 hellos가 hellos object자체가 아니고 array기 때문.

const title2 = document.getElementsByTagName("h1");
console.log(title2);
//h1 태그로 감싸여진 모든 Element들을 Array로 가져옴.

const title = document.querySelector(".hello h1");
//querySelector는 element를 CSS방식으로 검색할 수 있다.=> hello라는 class내부에 있는 h1을 가지고 올 수 있단 것을 의미.
//★★★이것은 css 셀렉터이기 때문에 .hello라고 적음. hello가 class name이라는 것과 그 안의 h1을 명시해줘야 한다.★★★

//const title = document.querySelector("div h1"); =>div 안의 h1태그.

//const title = document.querySelectorAll(".hello h1"); hello class의 모든 h1태그가 들어있는 Array를 가져옴.
// const title = document.querySelectorl(".hello h1:first-child");

// const title = document.querySelector("#hello"); ID hello로 찾기
// = const title = document.getElementById("hello");

title.innerText = "Hello";
