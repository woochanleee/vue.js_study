import Vue from 'vue';
import App from './App.vue';
// import App from './AppAxiosTest';
// import axios from 'axios';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import ES6Promise from 'es6-promise';

ES6Promise.polyfill();

// Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');

/*
  Vue 인스턴스 내부에서 axios를 이용하기 위해 Vue.prototype에 axios를 추가하면 더욱 간단하게 사용할 수 있다.
  
  이제 Vue 인스턴스 내부에서는 axios를 import 하지 않고도 this.$axios 를 사용할 수 있다.
*/
