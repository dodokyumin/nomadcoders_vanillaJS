const quotes = [
  {
    quote:
      "서울시가 잠이든 시간에 아무 말 없는 밤하늘은 침착해. 그와 반대로 지금 내 심장은 오늘만 살 것처럼 아주 긴박해",
    author: "Jazzyfact(Always Awake))",
  },
  {
    quote:
      "살아있음을 느낄 때면, 난 산송장처럼 눕기 싫어! 지금 이 순간이 훗날 죽이 되더라도 취침 시간을 뒤로 미뤄, 미뤄, 미뤄",
    author: "Jazzyfact(Always Awake))",
  },
  {
    quote:
      "모두가 등한시하는 밤하늘에 뜬 달, 곁에 있는 별처럼 깨있는 나. 잠이든 자에게는 내일이 와, 허나 난 내가 먼저 내일을 봐",
    author: "Jazzyfact(Always Awake))",
  },
  {
    quote:
      "만약 오늘 내가 죽어도 시간은 가. 움직이는 시계바늘이 실감이나. 시간에 뒤쳐지거나, 같이 뛰거나, 선택하라면 난 신발을 신을거야.",
    author: "Jazzyfact(Always Awake))",
  },
  {
    quote:
      "커피 한잔을 비운 다음에, 심박수를 키운 다음에, 한숨을 쉼표처럼 찍고 다시 한밤중에 싸움을 해!",
    author: "Jazzyfact(Always Awake))",
  },
  {
    quote:
      "왜냐면 난 내가 내 꿈의 근처라도 가보고는 죽어야지 싶더라고! yo i gotta live my life now, not later!",
    author: "Jazzyfact(Always Awake))",
  },
  {
    quote:
      "꿈속에서 헤맬 바엔 어서 잠에서 깨길 바래! 멋쟁이들은 깨있는 밤에 게으름뱅이들은 I beg ya pardon?",
    author: "Jazzyfact(Always Awake))",
  },
  {
    quote:
      "어쨌든간 인생은 딱 한번! 이 모든것들이 끝이 난다면 그 순간 내가 기억할만한 건 잠에서 깬 나일 것 같아!",
    author: "Jazzyfact(Always Awake))",
  },
  {
    quote:
      "이 밤이 와도 이 밤이 가도 I'm always awake! 태양이 밤하늘의 달빛을 가려도 always awake!",
    author: "Jazzyfact(Always Awake))",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

//console.log(quotes[0-8]);
//0~8까지 숫자를 랜덤으로 주는 function. => Math module
//Math.random() => 0~1까지의 랜덤 유리수, Math.random() * 10

//소수점을 떼는 총 3가지 방법
//Math.round(1.232) > 1  소숫점 자리를 반올림하는 function.
//Math.ceil(1.1) > 2  소숫점 자리를 올림. ceilling까지 올린다는 뜻.
//Math.floor(1.999) 1 내림. floor까지 내린다.

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote; //quotes array 안의 명언&작가가 object이기 때문에, .quote .author 가능
author.innerText = todaysQuote.author;
