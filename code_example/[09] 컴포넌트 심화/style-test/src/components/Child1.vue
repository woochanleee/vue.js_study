<template>
  <div class="main">
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'child1',
  data: () => ({ msg: 'Child1' }),
};
</script>

<style>
.main {
  border: 1px solid black;
  background-color: yellow;
}
</style>

<!--
  컴포넌트의 스타일은 <style> 태그 내에 작성하는데 이것은 전역 스타일이므로 페이지 전체에서 사용된다. 그러므로 다른
  컴포넌트에서도 동일한 CSS 클래스명을 사용한다면 충돌이 발생한다. 특정 컴포넌트만의 스타일을 지정하려면
  범위 CSS(Scoped CSS) 와 CSS 모듈(CSS Module) 의 두 가지 방법을 사용할 수 있다.
-->
