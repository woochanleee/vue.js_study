'use strict';

var arr = [10, 20, 30, 40];
var a1 = arr[0],
    a2 = arr[1],
    a3 = arr[2];

console.log(a1, a2, a3);

var p1 = {
  name: '홍길동',
  age: 20,
  gender: 'M'
};

var n = p1.name,
    a = p1.age,
    gender = p1.gender; // name 속성을 변수 n에 할당한다. p1객체의 속성와 할당하려는 변수의 이름이 동일할 때는 (: 변수명) 을 생략할 수 있다.

console.log(n, a, gender);

/*
  ES6(ES2015)에서는 배열, 객체의 값들을 추출하여 여러 변수에 할당할 수 있는 기능을 제공한다.
*/

/*
'use strict';

var arr = [10, 20, 30, 40];
var a1 = arr[0],
    a2 = arr[1],
    a3 = arr[2];

console.log(a1, a2, a3);

var p1 = {
  name: '홍길동',
  age: 20,
  gender: 'M'
};

var n = p1.name,
    a = p1.age,
    gender = p1.gender;

console.log(n, a, gender);
*/