import calc from './utils/utility3.js';
// import calc2 from './utils/utility3.js';

console.log(calc.add(2, 5));
console.log(calc.multiply(2, 4));

// console.log(calc2.add(2, 5));
// console.log(calc2.multiply(2, 4));

/*
  단일 객체를 export하기 위해 default를 사용했다.
  단일 객체를 import 할 때는 import { calc } from ... 와 같이 구조분해 할당(destructuring assignment)를 사용하지 않고
  import calc from ... 와 같이 단일 객체로 가져올 수 있다.
  또한 단일 객체는 import 할때 import calc2 from ... 처럼 가져올 변수명을 지정해줄 수 있다.
*/
