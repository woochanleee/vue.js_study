<template>
  <div class="main test">
    <!-- 위 태그랑 -->
    {{ msg }}
    <!-- 아래 태그 둘다 똑같은 data-v-xxxx가 들어감 -->
    <child11 />
    {{ msg }}
  </div>
</template>

<script>
import Child11 from './Child11';
export default {
  name: 'child1',
  data: () => ({ msg: 'Child1' }),
  components: {
    Child11,
  },
};
</script>

<style scoped>
.main {
  border: 1px solid black;
  background-color: yellow;
}
.test {
  padding: 10px;
  text-decoration: underline;
  border: 1px solid black;
}
</style>

<!--
  컴포넌트의 스타일은 <style> 태그 내에 작성하는데 이것은 전역 스타일이므로 페이지 전체에서 사용된다. 그러므로 다른
  컴포넌트에서도 동일한 CSS 클래스명을 사용한다면 충돌이 발생한다. 특정 컴포넌트만의 스타일을 지정하려면
  범위 CSS(Scoped CSS) 와 CSS 모듈(CSS Module) 의 두 가지 방법을 사용할 수 있다.
-->
