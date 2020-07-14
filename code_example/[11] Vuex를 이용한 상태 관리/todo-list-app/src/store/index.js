import Vue from 'vue';
import Vuex from 'vuex';
import Constant from '../Constant';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    todoList: [
      {
        id: 1,
        todo: '영화보기',
        done: false,
      },
      {
        id: 2,
        todo: '주말 산책',
        done: true,
      },
      {
        id: 3,
        todo: 'ES6 학습',
        done: false,
      },
      {
        id: 4,
        todo: '잠실 야구장',
        done: false,
      },
    ],
  },
  mutations: {
    [Constant.ADD_TODO]: (state, payload) => {
      if (payload.todo !== '') {
        state.todoList.push(
          // 리덕스와는 다르게 불변성을 유지하지 않고 기존거에 추가를 하네?
          {
            id: new Date().getTime(),
            todo: payload.todo,
            done: false,
          }
        );
      }
    },
    [Constant.DONE_TOGGLE]: (state, payload) => {
      const index = state.todoList.findIndex((item) => item.id === payload.id);
      state.todoList[index].done = !state.todoList[index].done;
    },
    [Constant.DELETE_TOTO]: (state, payload) => {
      const index = state.todoList.findIndex((item) => item.id === payload.id);
      state.todoList.splice(index, 1);
    },
  },
  actions: {
    [Constant.ADD_TODO]: (store, payload) => {
      console.log('###addTodo!!!', payload);
      store.commit(Constant.ADD_TODO, payload);
    },
    [Constant.DELETE_TOTO]: (store, payload) => {
      console.log('###deleteTodo!!!', payload);
      store.commit(Constant.DELETE_TOTO, payload);
    },
    [Constant.DONE_TOGGLE]: ({ state, commit }, payload) => {
      console.log('###doneToglle!!!', payload);
      commit(Constant.DONE_TOGGLE, payload);
    },
  },
});

export default store;
