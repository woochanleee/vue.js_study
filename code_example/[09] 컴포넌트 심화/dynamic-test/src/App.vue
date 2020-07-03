<template>
  <div>
    <div class='header'>
      <h1 class='header-text'>(주) OpenSG</h1>
      <nav>
        <ul>
          <li>
            <a href="#" @click="changeMenu('home')">Home</a>
          </li>
          <li>
            <a href="#" @click="changeMenu('about')">About</a>
          </li>
          <li>
            <a href="#" @click="changeMenu('contact')">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="container">
      <component v-bind:is="currentView"></component>
    </div>
  </div>
</template>

<script>
import Home from './components/Home';
import About from './components/About'
import Contact from './components/Contact';

export default {
  name: 'app',
  components: {
    Home, About, Contact
  },
  data: () => ({
    currentView: 'home'
  }),
  methods: {
    changeMenu(view) {
      this.currentView = view;
    }
  }
}
</script>

<style scoped>
  .header {
    background-color: aqua;
    padding: 10px 0 0 0;
  }
  .header-text {
    padding: 0 20px;
  }
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: purple;
  }
  li {
    float: left
  }
  li a {
    display: block;
    color: yellow;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }
  li a:hover {
    background-color: aqua;
    color: black;
  }
</style>

<!--
  화면의 동일한 위치에 여러 컴포넌트를 표현해야 할땐 동적 컴포넌트(dynamic component)를 사용하면 된다.
  <component> 태그를 템플릿에 작성하고 v-bind 디렉티브를 이용해 is 특성 값으로 어떤 컴포넌트를 그 위치에 나타낼지 결정하면 된다.
  
  https://seulcode.tistory.com/262
-->