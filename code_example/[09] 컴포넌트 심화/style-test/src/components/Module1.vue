<template>
  <div>
    <button v-bind:class="$style.hand">CSS Module을 적용한 버튼</button>
    <div :class="[$style.box, $style.border, $style.test]">Hello World</div>
    <!-- 
      <style module></style> 로 CSS 스타일을 모듈화 했다. 이 스타일은
      Vue 인스턴스 내에서 $style 이라는 계산형 속성(Computed Property) 을 통해서 이용할 수 있다.
      
      개발자 도구로 엘리먼트를 보면 Module1_hand_1l2s2 처럼 .hand가 아닌 충돌하지 않도록 생성된
      다른 이름을 사용하고 있음을 알 수 있다.

      또 적용해야 할 CSS 클래스가 여러 개라면 위 처럼 배열 문법을 이용해 한 번에 적용할 수 있다.
    -->
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.$style);
  }
};
</script>

<style module>
.hand {
  cursor: pointer;
  background-color: purple;
  color: yellow;
}
.box {
  width: 100px;
  height: 100px;
  background-color: aqua;
}
.border {
  border: solid 1px orange;
}
#test {
  color: blue;
}
/* 
  위처럼 아이디랑 클래스 명이 같으면 어떻게 될지 실험해봤는데 class것이 적용되는 모습이다.
  근데 아이디 선택자는 스타일이 적용이 안된 모습인데 이걸 보니 그냥 css module 에서는
  class만 지원하는것 같다.
*/
</style>

<!--
  CSS 모듈은 CSS 스타일을 마치 객체처럼 다룰 수 있게 한다. 설정하는 방법은
  매우 간단하다. <style module></style> 처럼 사용하면 된다.
-->
