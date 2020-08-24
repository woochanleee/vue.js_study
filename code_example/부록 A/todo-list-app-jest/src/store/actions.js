import Constant from '../Constant';

export default {
  [Constant.ADD_TODO]: (store, payload) => {
    console.log('###addTodo!!!', payload);
    store.commit(Constant.ADD_TODO, payload);
  },
  [Constant.DELETE_TOTO]: (store, payload) => {
    console.log('###deleteTodo!!!', payload);
    store.commit(Constant.DELETE_TOTO, payload);
  },
  [Constant.DONE_TOGGLE]: ({ commit }, payload) => {
    console.log('###doneToglle!!!', payload);
    commit(Constant.DONE_TOGGLE, payload);
  },
};
