'use strict';

function addContact(_ref) {
  var name = _ref.name,
      phone = _ref.phone,
      _ref$email = _ref.email,
      email = _ref$email === undefined ? '이메일 없음' : _ref$email,
      _ref$age = _ref.age,
      age = _ref$age === undefined ? 0 : _ref$age;

  console.log('이름: ' + name);
  console.log('전화번호: ' + phone);
  console.log('이메일: ' + email);
  console.log('나이: ' + age);
}

addContact({
  name: '이몽룡',
  phone: '010-3434-8989'
});

/*
  구조분해 할당은 함수의 파라미터에서도 사용할 수 있다.
*/