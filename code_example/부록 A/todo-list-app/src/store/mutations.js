import Constant from '../Constant';

export default {
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
};
