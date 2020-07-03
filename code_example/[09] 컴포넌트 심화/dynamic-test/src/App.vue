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
      <!-- <keep-alive include="about,home"> -->
        <keep-alive exclude="about,home">
        <!-- include할때 ,(쉼표) 사이에 공백이 있으면 적용이 안된다. -->
        <component v-bind:is="currentView"></component>
      </keep-alive>
    </div>
  </div>
</template>
<!--
  실행 결과를 자세히 살펴보면 메뉴를 클릭할 때마다 출력되는 시간 정보가 계속 변경되는 모습이다.
  매번 실행된다는 의미이다. 만일 <component> 로 표현될 자식 컴포넌트들이 정적 콘텐츠라면 매번
  실행되는 것은 비효율적이다. 이런 경우엔 <component> 요소를 <keep-alive> 요소로 감싸서 캐싱하면 된다.

  만약 특정 컴포넌트만 캐싱하거나 캐싱하고 싶지 않다면 include, exclude 특성으로 컴포넌트들을 콤마로 구분하여 나열하면 된다.
  이때 지정된 이름이 있어야 하므로 각 컴포넌트마다 name 옵션을 부여해야 하며 이 이름으로 include, exclude 할 수 있다.
-->

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
