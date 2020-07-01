'use strict';

/*
  맵(Map)은 키-값 쌍의 집합체이며, 키는 고유한 값이어야 한다.
*/

var teams = new Map();
teams.set('LG', '트윈스');
teams.set('삼성', '라이온스');
teams.set('NC', '다이노스');
teams.set('기아', '타이거스');
teams.set('한화', '이글즈');
teams.set('롯데', '자이언츠');

console.log(teams.has('SK')); // false
console.log(teams.has('lg')); // false
console.log(teams.get('lg')); // undefined
console.log(teams.get('LG')); // 트윈스