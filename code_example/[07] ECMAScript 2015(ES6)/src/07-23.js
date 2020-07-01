let obj1 = {
  name: '박문수',
  age: 29,
};
let obj2 = { ...obj1 };
let obj3 = {
  ...obj1,
  email: 'mspark@gmail.com',
};

console.log(obj2);
console.log(obj3);
console.log(obj1 === obj2); // false, obj2는 새로운 객체를 만든 후 obj1의 속성 값들을 새로 할당했을 뿐입니다.

let arr1 = [100, 200, 300];
let arr2 = ['hello', ...arr1, 'world'];
console.log(arr2);

/*
  가변 파라미터를 공부할때 ... 연산자를 본적이 있습니다. ... 연산자를 함수의 인자로 사용하면
  가변 파라미터(Rest Parameter)라고 부릅니다. 가변 파라미터는 개별 값을 나열하여 함수의 인자로
  전달하면 함수의 내부에서 배열로 사용할 수 있도록 합니다.

  전개 연산자(Spread Operator) 는 가변 파라미터와 사용 방법이 다릅니다. 배열이나 객체를 ... 연산
  자와 함께 객체 리터럴, 배열 리터럴에서 사용하면 분해된 값으로 전달합니다.

  이와 같이 기존 객체의 속성이나 배열의 요소들을 포함하여 새로운 객체, 배열을 생성하고자 할 때 사용합니다.
*/
