<template>
  <div>
    <div class="header">
      <h1 class="header-text">(주) OpenSG</h1>
      <nav>
        <ul>
          <li>
            <router-link to="/home">Home</router-link>
          </li>
          <li>
            <router-link to="/about">About</router-link>
          </li>
          <li>
            <router-link to="/contacts">Contacts</router-link>
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
import VueRouter from 'vue-router';

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/home',
      component: Home,
    },

    {
      path: '/about',
      component: About,
    },

    {
      path: '/contacts',
      component: Contacts,
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
