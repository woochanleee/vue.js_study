var p = new Promise(function (resolve, reject) {
  setTimeout(() => {
    var num = Math.round(Math.random() * 20);
    var isValid = num % 2;
    if (isValid) {
      resolve(num);
    } else {
      reject(num);
    }
  }, 2000);
});

p.then((num) => {
  console.log('홀수: ' + num);
}).catch((num) => {
  console.log('짝수: ' + num);
});

console.log('20까지의 난수중 홀수/짝수?');
console.log('결과는 2초후에 나옵니다.!!');
/*
  이전까지는 AJAX 처리를 위한 비동기 처리를 할 때 비동기 처리가 완료되면 콜백 함수가 호출되도록
  작성하는 것이 일반적인 형태였다. 하지만 이 방법은 비동기로 처리할 작업이 반복되면 콜백함수들이 중첩되어 예외 처리가 힘들어진다.

  ES6(ES2015)에서는 Promise 객체를 지원해 비동기 처리를 좀 더 깔끔하게 수행할 수 있게 한다.
  서버와 통신하기 위한 여러 라이브러리 superagent, axios, vue-resource, fetch 등이 대부분 Promise 객체를 사용한다.
*/
