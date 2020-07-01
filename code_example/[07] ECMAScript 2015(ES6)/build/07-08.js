'use strict';

function Person(name, yearCount) {
  var _this = this;

  this.name = name;
  this.age = 0;
  var incrAge = function incrAge() {
    _this.age++;
  };
  for (var i = 1; i <= yearCount; i++) {
    incrAge();
  }
}
var p1 = new Person('홍길동', 20);
console.log(p1.name + '님의 나이: ' + p1.age);

/*
  화살표 함수는 함수를 둘러싸고 있는 영역의 this를 화살표 함수 내부에서 this로 그대로 사용한다.
  따라서 앞의 두 가지 방법처럼 코드를 변경할 필요가 없다.
*/