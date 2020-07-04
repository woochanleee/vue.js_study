<template>
  <div id="container">
    <div class="page-header">
      <h1 class="text-center">연락처 관리 애플리케이션</h1>
      <p>(Dynamic Component + EventBus + Axios)</p>
    </div>
    <component :is="currentView" :contact="contact"></component>
    <contactList :contact-list="contactList"></contactList>
  </div>
</template>

<script>
import {
  AddContact,
  ContactList,
  UpdateContact,
  UpdatePhoto,
} from './components';
import CONF from './Config';
import eventBus from './EventBus';

export default {
  name: 'app',
  components: {
    AddContact,
    ContactList,
    UpdateContact,
    UpdatePhoto,
  },
  data() {
    return {
      currentView: null,
      contact: {
        no: 0,
        name: '',
        tel: '',
        address: '',
        photo: '',
      },
      contactList: {
        pageNo: 1,
        pageSize: CONF.PAGESIZE,
        totalCount: 0,
        contacts: [],
      },
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped>
#container {
  font-family: 'Avenir', Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  columns: #2c3e50;
  margin-top: 60px;
}
</style>
