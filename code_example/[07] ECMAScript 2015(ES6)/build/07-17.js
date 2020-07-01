'use strict';

var _utility = require('./utils/utility1');

// 파일 단위로 모듈을 생성하므로 import 할때 파일의 경로를 지정하면 된다. .js 확장자는 생략할 수 있다.

console.log((0, _utility.add)(1, 2));
console.log(_utility.var1);
console.log((0, _utility.subtract)(3, 1));
console.log(_utility.var2);