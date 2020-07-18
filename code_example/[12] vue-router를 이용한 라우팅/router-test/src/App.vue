<template>
  <div>
    <div class="header">
      <h1 class="header-text">(주) OpenSG</h1>
      <nav>
        <ul>
          <li>
            <router-link :to="{ name: 'home' }">Home</router-link>
            <!-- name: ''를 설정해주면 이에 해당하는 라우트 정보를 찾아 그 path로 설정해준다. 여기서는 /home -->
          </li>
          <li>
            <router-link v-bind:to="{ name: 'about' }">About</router-link>
            <!-- 객체를 바인딩 하므로 v-bind 디렉티르를 이용한다. -->
          </li>
          <li>
            <router-link :to="{ name: 'contacts' }">Contacts</router-link>
            <!-- 근데 왜 개발자 도구로 보면 #/contacts 이런식으로 등록이 돼있을까? 궁금하넹... -->
          </li>
        </ul>
      </nav>
    </div>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts';
import ContactByNo from './components/ContactByNo';
import VueRouter from 'vue-router';

/*
  명명된 라우트(Named Routes):
  라우트 정보에 고유한 이름을 부여하는 것이다. 이것을 사용할 경우 URI 경로가 아닌 부여된 라우트 이름(Route Name)
  으로 내비게이션하도록 할 수 있다. 복잡한 URI 경로가 만들어질 때 전체 경로(path) 를 입력해야 하지만 명명된 라우트
  를 사용하면 좀 더 간단하게 입력할 수 있다. 또한 URI 경로가 바뀓라도 애플리캐이션에서의 내비게이션 정보는 바뀌지 않는다.
*/

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },

    {
      path: '/about',
      name: 'about', // name 옵션은 필수 지정 항목은 아니지만 각각의 라우트 정보마다 고유한 값을 지정해야 한다.
      component: About,
    },

    {
      path: '/contacts',
      name: 'contacts',
      component: Contacts,
      children: [
        {
          path: ':no', // /:no 이렇게하면 동작을 안한다 ㅋㅋ
          name: 'contactByNo',
          component: ContactByNo,
        },
      ],
    },
  ],
});

export default {
  name: 'app',
  router,
};
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
  float: left;
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
