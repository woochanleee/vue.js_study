import Vue from 'vue';
import TodoList from './components/TodoList';
import store from './store';

Vue.config.devtools = true;
Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(TodoList),
}).$mount('#app');

/*
  Vue.use(vuex) 와 new Vue({ store }) 를 통해
  this.$store로 저장소(store) 객체를 접근할수 있다.
*/
