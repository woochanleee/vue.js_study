function addContact(
  name,
  mobile,
  home = '없음',
  address = '없음',
  email = '없음'
) {
  var str = `name=${name}, mobile=${mobile}, home=${home}, address=${address}, email=${email}`;
  console.log(str);
}

addContact('홍길동', '010-222-3331');
addContact('홍길동', '010-222-3331', '02-3422-9900', '서울시');

/*
  ES2015(ES6)에서는 기본 파라미터(Default Parameter) 를 이용해 함수 파라미터의 기본값을 지정할 수 있다.
*/
