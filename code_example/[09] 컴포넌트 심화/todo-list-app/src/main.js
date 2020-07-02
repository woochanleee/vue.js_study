import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');

/*
  App.vue 컴포넌트를 화면에 보여주기 위해서 main.js를 사용한다
  App 컴포넌트를 렌더링한 결과물을 #app인 요소에 출력한다.
*/
