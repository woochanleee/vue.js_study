<template>
  <div class="parent">
    <child>
      <template v-slot:type1="p1">
        <div>{{ p1.cx }} + {{ p1.cy }}</div>
      </template>
      <template v-slot:type2="p2">
        <div>{{ p2.cx }} 더하기 {{ p2.cy }} 는 {{ parseInt(p2.cx) + parseInt(p2.cy) }}</div>
      </template>
    </child>
  </div>
</template>

<script>
import Child from "./components/ScopedSlot";

export default {
  components: { Child }
};
</script>

<style>
.parent {
  border: 2px dashed black;
  padding: 5px;
}
</style>

<!--
  https://github.com/vuejs/rfcs/blob/master/active-rfcs/0001-new-slot-syntax.md
  https://kr.vuejs.org/v2/guide/components-slots.html
  https://kr.vuejs.org/v2/guide/components-slots.html#%EC%82%AD%EC%A0%9C%EB%90%A0-%EB%AC%B8%EB%B2%95
  
  범위 슬롯이 정상 작동하지 않아서 구글링을 해봤는데, vue 2.5 이후부터는 slot scope가 지원이 안된다고 한다.
  대신 v-slot 디렉티브로 통합하였다고 한다.

  이로써 자식 컴포넌트에서 부모 컴포넌트로 속성을 전달하여 부모 컴포넌트 측에서 출력할 내용을 커스터마이징 할 필요가 있을때 유용하다.
-->