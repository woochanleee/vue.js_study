<template>
  <ul>
    <li v-for="s in subs" v-bind:class="s.type" v-bind:key="s.name">
      {{ s.name }}
      <tree :subs="s.subs"></tree>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'tree',
  props: ['subs']
}
</script>
<!--
  재귀 컴포넌트(Recursive Components)는 템플릿에서 자기 자신을 호출하는 컴포넌트 이다.
  주의할 점은 반드시 name 옵션을 지정해줘야 한다. 그래야 만약에 name을 tree 라 했다면
  <tree></tree> 로 재귀적으로 호출할 수 있다.
-->