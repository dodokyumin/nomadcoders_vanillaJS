const API_KEY = "32c016b7a74d13ef10b9cb88cde86fad";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log("You live in", lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  console.log(url); //위 url로 잘 이동되는지 확인.
  //fetch(url); //네트워크(wifi에서 어떤일이 일어나는지 보여줌)로 진입, request를 보면 JS가 fetch를 사용하여 url을 요청했다!=>실제로 url에 갈 필요없이 JS가 대신 URL을 부를거야.
  //여기서 온도는 화씨이므로 홈페이지검색-> units를 url에 같이 보낼 수 있음. => 뒷 주소창에 &units=metric를 더함.

  //fetch는 promise야. 당장 뭔가 일어나지 않고 시간이 좀 걸린 뒤에 일어나는거야. 서버 응답시간이 5분이면, 5분을 기다려야해. 그러므로 .then를 사용해야해.
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      //weather.innerText = data.weather[0].main;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`; // 온도까지 표현
    });
  //URP을 getch하고. 그 다음(then)으로 response를 받아야해 그리고 response의 json을 얻어야해. 그리고 내용을 추출했으면 data를 얻을거야.(이 과정들은 wetube 강의에서...). 그리고 html태그를 만들자
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

//이렇게 해서 받는 나의 lat과 lng값, 그리고 openweathermap.org에서 받은 내 API keys를 복사한 geolocation weather API 에 대입하여 주소창 이동.
//latitude, longitude, API Key와 함께 API를 불렀다.
