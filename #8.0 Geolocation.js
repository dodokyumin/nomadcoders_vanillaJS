function onGeoOk(position) {
  //console.log(position); //getCurrentPosition으로 받은 정보를 임의의 argument로 받아 console.log로 확인. 거기서 position.coords.latitude와 longitude를 가져옴.
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log("You live in", lat, lng);
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
//navigator.geolocation.getCurrentPosition(모든게 잘 됐을 때 실행될 함수,에러가 발생했을 때)
//이 코드 만으로 브라우저가 위치 좌표 등등 정보를 함수로 전달해주는데, 임의의 인자를 만들어줌으로써 함수로 활용을 하자.

//다음 단계로 openweathermap.org 로 들어가 API를 받자!
