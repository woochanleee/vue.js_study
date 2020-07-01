/*
  var test1 = function(a, b) {
    return a + b;
  }
  let test2 = (a, b) => {
    return a + b;
  }
  let test3 = (a, b) => a + b;

  위 3개의 함수는 동일한 기능을 수행한다.
  
  ES6(ES2015)의 화살표 함수는 기존 함수  표현식에 비해 매우 간결함을 제공한다. 또한
  함수를 정의하는 영역의 this를 그대로 전달받을 수 있다.

  하지만 화살표 함수와 전통적인 함수는 서로 다른 this 값이 바인딩 된다는 점은 주의해야 한다.
*/

function Person(name, yearCount) {
  this.name = name;
  this.age = 0;
  var outerThis = this; // 또는 바까쪽 영역의 this를 다른 변수에 할당하고 참조하는 방법을 사용할 수도 있다.
  var incrAge = function () {
    // this.age++;
    outerThis.age++;
  };
  for (var i = 1; i <= yearCount; i++) {
    incrAge();
    // incrAge.apply(this); // 함수 수준의 apply 메서드를 이용해 incrAge 함수를 둘러싸고 있는 영역의 this를 incrAge 함수 내부의 this로 강제 지정하는 것이다.
  }
}
var p1 = new Person('홍길동', 20);
// this.age는 0이 출력됨.
console.log(p1.name + '님의 나이: ' + p1.age);

/*
  위 코드에서 Person 함수 안에서의 this는 객체 p1을 가리킨다.
  incrAge 함수는 Person 함수 안에 정의되어 있고, 반복적으로 호출되고 있다.
  간단히 생각하면 this.age에 this는 incrAge 함수를 둘러싸고 있는 환경의 this가 전달될 것 같지만 그렇지 않다.
  
  아하~ 이해가 안됐는데, 내가 이해한 바로는 function은 스코프내에 독립적인 this를 가지는 것 같다. 그래서
  Person안에서 this는 Person것이고 incrAge 안에 있는 this는 incrAge function것이다.
*/
