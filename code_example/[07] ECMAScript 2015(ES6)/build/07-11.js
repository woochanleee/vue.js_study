'use strict';

var d1 = new Date();
var name = '홍길동';
var r1 = name + ' \uB2D8\uC5D0\uAC8C ' + d1.toDateString() + '\uC5D0 \uC5F0\uB77D\uD588\uB2E4';

console.log(r1);

var product = '아이폰 SE2';
var price = 590000;
var str = product + '\uC758 \uAC00\uACA9\uC740 ' + price + '\uC6D0 \uC785\uB2C8\uB2E4.';

console.log(str);

/*
  템플릿 리터럴(Template Literal) 은 역따옴표(Backquote: `) 로 묶여진 문자열에서 템플릿
  대입문(${}) 을 이용해 동적으로 문자열을 끼워넣어 구성할 수 있는 방법을 제공한다.

  템플릿 대입문에는 수식 구문, 변수, 함수 호출 구문 등 대부분의 표현식을 사용할 수 있다. 또한 템플릿
  문자열은 개행 문자를 포함하여 여러 줄로 작성할 수 있다.
*/