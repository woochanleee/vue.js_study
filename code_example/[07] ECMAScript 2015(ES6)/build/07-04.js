'use strict';

function foodReport(name, age) {
  console.log(name + ', ' + age);

  for (var _len = arguments.length, favoriteFoods = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    favoriteFoods[_key - 2] = arguments[_key];
  }

  console.log(favoriteFoods);
}

foodReport('이몽룡', 20, '짜장면', '냉면', '불고기');
foodReport('홍길동', 16, ' 초밥');

/*
  가변 파라미터(Rest Parameter)는 여러 개의 파라미터 값을 배열로 받을 수 있도록 한다.
  전달하는 파라미터의 개수는 가변적으로 적용할 수 있다.
*/