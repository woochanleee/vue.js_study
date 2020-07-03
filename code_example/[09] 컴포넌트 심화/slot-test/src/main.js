import Vue from 'vue';
// import App from './App.vue'
// import App from './AppNamed';
import App from './AppScoped';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
