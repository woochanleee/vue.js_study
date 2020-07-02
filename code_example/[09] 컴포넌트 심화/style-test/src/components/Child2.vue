<template>
  <div class="main">
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'child2',
  data: () => ({ msg: 'Child2' }),
};
</script>

<style scoped>
.main {
  border: 1px solid black;
  background-color: aqua;
}
</style>

<!--
  두 컴포넌트가 모두 전역으로 정의되어 있어서 마지막에 등록된 스타일만 적용이 된다. 이제 이걸
  범위 CSS로 변경하는 방법은 의외로 단순하다.
  <style> 태그를 <style scoped>로 변경하기만 하면 된다.

  콘솔로 엘리먼트를 확인해보면 컴포넌트 요소에 data-v-xxxxx 형태의 특성(Attribute) 가 부여된것을 확인할 수 있다.

  style 클래스에도 아래처럼 설정되어 있다.

  .main[data-v-3a3c19c6] {
    border: 1px solid black;
    background-color: aqua;
  }

  하나의 컴포넌트안에는 여러 개의 <style> 태그를 작성할 수 있다. 그러므로 전역 CSS와 범위 CSS를 구분해 작성할 수 있다.

  범위 CSS를 사용할 때는 몇 가지 사항을 기억하고 있어야 한다.

  첫 번째로 범위 CSS는 특정 성택자(Attribute Selector) 를 사용하기 때문에 브라우저에서 스타일을 적요하는 속도가 느리다.
  그렇기 때문에 반드시 속도가 빠른 ID 선택자, 클래스 선택자, 태그명 선택자로 요소를 선택해 스타일을 적용하도록 해야 한다. 그래
  야만 스타일 적용으로 인한 브라우저의 실행 속도가 느려지는 문제를 보완할 수 있다.

  두 번째로 부모 컴포넌트에 적용된 범위 CSS(Scoped CSS) 는 하위 컴포넌트에도 반영이 된다.
  부모 컴포넌트에서 범위 CSS를 적용하기 위해 생성되는 특성(Attribute)이 자식 컴포넌트의 루트 요소에도 등록되기 때문이다.
-->
