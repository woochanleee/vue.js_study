<template>
  <p>
    이름 :
    <input
      type="text"
      v-model.trim="name"
      placeholder="두 글자 이상 입력 후 엔터!"
      @keyup.enter="keyupEvent"
    />
  </p>
</template>

<script>
import Constant from '../Constant';

export default {
  name: 'search',
  data: () => ({
    name: '',
  }),
  methods: {
    keyupEvent(e) {
      const value = e.target.value;
      if (value.length >= 2) {
        this.$store.dispatch(Constant.SEARCH_CONTACT, { name: value });
        this.name = '';
      } else {
        this.$store.dispatch(Constant.SEARCH_CONTACT, { name: '' });
      }
    },
  },
};
</script>
