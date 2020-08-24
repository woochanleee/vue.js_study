import { expect } from 'chai';
import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Vue from 'vue';
import store from '@/store';
import TodoList from '@/components/TodoList';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('TodoList.vue', () => {
  let wrapper;

  before(() => {
    wrapper = mount(TodoList, { store, localVue });
  });

  it('TodoList 초기 렌더링 테스트', (done) => {
    Vue.nextTick()
      .then(() => {
        expect(wrapper.vm.$el.querySelectorAll('li').length).to.equal(4);
        done();
      })
      .catch(done);
  });

  it('클릭 이벤트 후 렌더링 결과 확인', (done) => {
    // 입력값을 TodoList의 첫 번째 자식 컴포넌트인
    // InputTodo 컴포넌트의 로컬 데이터에 새로운 todo 입력
    wrapper.vm.$children[0].$data.todo = '테스트 연습';

    const eventClick = new window.Event('click');
    const addButton = wrapper.vm.$el.querySelector('span.add-button');
    addButton.dispatchEvent(eventClick);
    wrapper.vm._watcher.run();

    Vue.nextTick()
      .then(() => {
        const list = wrapper.vm.$el.querySelectorAll('li');
        expect(list[list.length - 1].textContent).to.contain('테스트 연습');
        expect(list.length).to.equal(5);
        done();
      })
      .catch(done);
  });
});
