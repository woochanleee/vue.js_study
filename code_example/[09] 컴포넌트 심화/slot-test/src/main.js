import Vue from 'vue';
// import App from './App.vue'
import App from './AppNamed';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
