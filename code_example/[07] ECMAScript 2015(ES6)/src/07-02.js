let msg = 'GLOBAL';
function outer(a) {
  let msg = 'OUTER';
  console.log(msg);
  if (true) {
    let msg = 'block';
    console.log(msg);
  }
}

outer();

// 트랜스파일 된 코드

/*
('use strict');

var msg = 'GLOBAL';
function outer(a) {
  var msg = 'OUTER';
  console.log(msg);
  if (true) {
    var _msg = 'block'; // let으로 선언한 변수가 트랜스파일된 코드에서는 변수명을 _msg로 변경하여 이름 충돌을 피한 모습을 볼수 있다.(var는 함수 단위만 지원하기 때문)
    console.log(_msg);
  }
}

outer();
*/
/*
  const는 상수 기능을 제공한다. 즉 한번 값이 주어지면 다시 변경할 수 없다. const 또한 블록 스코프를 제공하낟.

  기존 var는 변수의 중복 선언을 허용한다. 즉, 아래 코드는 오류를 일으키지 않는다.

  var a = 100;
  var a = 'hello';
  var a = { name: '홍길동', age: 20 };
*/

/*
  ES2015(ES6)가 등장하기 전까지는 변수를 선언할때 var 키워드를 주로 사용했다. 하지만
  var 키워드는 호이스팅하기 때문에 초급 개발자들이 자바스크립트를 어려워 하는 이유 중 하나
  였다. 
  
  호이스팅이란?: 실행 컨텍스트가 만들어진 후에 var 키워드가 부여된 변수를 미리 생성하는 것이다.
  이러한 이유로 var 키워드로 변수를 중복 선언해도 오류가 발생하지 않는다.
  
  또한 블록 단위의 스코프를 지원하지 않는다. var 키워드는 함수 단위의 스코프만 지원한다. {} 로
  묶여진 블록 내에서 선언한 변수는 별도의 스코프를 만들지 않는다는 것을 의미한다.

  ES6(ES2015)에서는 이러한 문제를 해결하기 위해 let 키워드를 지원한다. 블록 단위의 스코프도
  해결했고, 변수의 중복 선언을 방지할 수 있다.
*/
