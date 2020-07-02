<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<!--
  전역 컴포넌트와 비교하면 몇 가지 차이점이 있다.
  <template> 에는 id를 부여하지 않으며, <script> 영역에서는 Vue 컴포넌트의 template을
  지정하지 않으며, Vue.component() 로 이름과 template 속성을 지정하지 않는다. 반면에 name
  속성을 지정할 수 있으며, 반드시 객체를 export 해야 한다.
-->
