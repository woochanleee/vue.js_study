import { expect } from 'chai';
import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Vue from 'vue';
import store from '@/store';
import List from '@/components/List.vue';
import Constant from '@/Constant';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('List.vue', () => {
  let wrapper;

  before(() => {
    wrapper = mount(List, { store, localVue });
  });

  it('초기 렌더링 화면 테스트', (done) => {
    Vue.nextTick()
      .then(() => {
        expect(wrapper.vm.$el.querySelectorAll('li').length).to.equal(4);
        done();
      })
      .catch(done);
  });

  it('새로운 todo 추가후 목록 확인', (done) => {
    wrapper.vm.$store.dispatch(Constant.ADD_TODO, { todo: '라면' });
    wrapper.vm.$store.dispatch(Constant.ADD_TODO, { todo: '콜라' });
    Vue.nextTick()
      .then(() => {
        const list = wrapper.vm.$el.querySelectorAll('li');
        expect(list[list.length - 1].textContent).to.contain('콜라');
        expect(list[list.length - 2].textContent).to.contain('라면');
        expect(list.length).to.equal(6);
        done();
      })
      .catch(done);
  });
});
