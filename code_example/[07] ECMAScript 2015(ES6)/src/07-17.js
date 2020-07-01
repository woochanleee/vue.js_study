import { add, var1, subtract, var2 } from './utils/utility1.js';
// 파일 단위로 모듈을 생성하므로 import 할때 파일의 경로를 지정하면 된다. .js 확장자는 생략할 수 있다. 근데 node 14버전에서는 생략하니까 안된당...

console.log(add(1, 2));
console.log(var1);
console.log(subtract(3, 1));
console.log(var2);
