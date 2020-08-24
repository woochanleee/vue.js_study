import { expect } from 'chai';
import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Vue from 'vue';
import store from '@/store';
import List from '@/components/List.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('List.vue', () => {
  it('초기 렌더링 화면 테스트', (done) => {
    const wrapper = mount(List, { store, localVue });
    Vue.nextTick()
      .then(() => {
        expect(wrapper.vm.$el.querySelectorAll('li').length).to.equal(4);
        done();
      })
      .catch(done);
  });
});
