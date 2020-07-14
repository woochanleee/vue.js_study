<template>
  <div>
    <search placeholder="두글자 이상 입력 후 엔터!"></search>
    <contact-list />
  </div>
</template>

<script>
import Search from './components/Search';
import ContactList from './components/ContactList';

export default {
  name: 'app',
  components: {
    Search,
    ContactList,
  },
};
</script>
