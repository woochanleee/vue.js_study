import Vue from 'vue';
import App from './App.vue';
import store from './store';
import VueRouter from 'vue-router'

import { Home, About, ContactList, ContactForm, UpdatePhoto } from './components'

import 'bootstrap/dist/css/bootstrap.min.css';
import ES6Promise from 'es6-promise';

ES6Promise.polyfill();
Vue.use(VueRouter);
Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: ContactList,
      children: [
        {
          path: 'add',
          name: 'addContact',
          component: ContactForm,
        },
        {
          path: 'update/:no',
          name: 'updateContact',
          component: ContactForm,
          props: true
        },
        {
          path: 'photo/:no',
          name: 'updatePhoto',
          component: UpdatePhoto,
          props: true
        },
      ]
    },
  ]
})

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
