const myAge = 25;
const krAgeCalculator = {
  add: function(myKrAge, b){
    return myKrAge + b;
  },
};

const nowMyAge = krAgeCalculator.add(myAge, 2);
  // function이 작업을 하고 그 작업의 결과를 알려주는(내게 보내주는) function, 그것이 return의 기능.
  // function의 결과 값을 얻지못했었다. console만 알고있는 결과를 내 코드로
  
  // add부분을 함수myKrAge + b 의 결과로 대체하는 것. 그것을 가능하게 해주는 return.
  //return을 하면, function은 작동을 멈추고 결과 값을 return하고 끝내버려.


  const calculator = {
    plus: function (a, b) {
      return a + b ;
    },
    minus: function (a, b) {
      return a - b ;
    },
    times: function (a, b) {
      return a * b ;
    },
    devide: function (a, b) {
      return a / b ;
    },
    power: function (a, b) {
      return a ** b;
    },
  };

  const plusResult = calculator.plus(2, 3);
  const minusResult = calculator.minus(plusResult, 10);
  const timesResult = calculator.times(10, minusResult);
  const devideResult = calculator.devide(timesResult, plusResult);
  const PowerResult = calculator.power(devideResult, minusResult);
  