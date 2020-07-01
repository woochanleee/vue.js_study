export let var1 = 1000;
export function add(a, b) {
  return a + b;
}

// 변수나 함수를 export하기 위해선 export 키워드를 앞에 붙여주면 된다. 다른 방법으로 아래와 같이 일단 함수나 변수, 클래스를 선언한 후 한번에 export 하는 방법이다.

let var2 = 2000;
function subtract(a, b) {
  return a - b;
}
export { var2, subtract };

/*
  전통적인 자바스크립트에서는 모듈(Moduel) 이라는 개념이 희박하다. 굳이 모듈이라는 용어를
  사용한다면 <script> 태그로 js 파일을 참조하는 정도를 의미했다. ES6(ES2015)부터는 공식
  적으로 모듈 기능을 제공한다.
  
  모듈이란?: 독립성을 가진 재사용 가능한 코드 블록이다. 여러 개의 코드 블록을 각각의 파일로 분
  리한 후 필요한 모듈들을 조합해 애플리케이션을 개발할 수 있다.

  ES6(ES2015)에서는 모듈을 JS 코드를 포함하고 있는 파일이라고 간주해도 무방하다. 코드 블록
  안에서 import, export 구문을 이용해서 모듈을 가져오거나 내보낼 수 있다 모듈 내부에서 선언
  된 모든 변수, 함수, 객체, 클래스는 지역적인 것(local) 으로 간주된다.

  따라서 재사용 가능한 모듈을 만들려면 반드시 외부로 공개하고자 하는 것을 export해야 한다.
  export된 모듈은 다른 모듈에서 import 구문으로 참조하여 사용할 수 있다. export 할
  수 있는 대상은 변수, 함수, 객체, 클래스 등이며 다음과 같이 export 할 수 있다.

  export let a = 1000;
  export function f1(a) { ... }
  export { n1, n2 as othername, ... }
*/
