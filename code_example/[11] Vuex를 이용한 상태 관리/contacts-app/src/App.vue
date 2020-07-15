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
      currentView: null, // null일 경우 component에 아무 컴포넌트도 나타나지 않는다.
      contact: {
        no: 0,
        name: '',
        tel: '',
        address: '',
        photo: '',
      },
      contactList: {
        pageno: 1,
        pagesize: CONF.PAGESIZE,
        totalcount: 0,
        contacts: [],
      },
    };
  },
  mounted() {
    this.fetchContacts();
    eventBus.$on('cancle', () => {
      this.currentView = null;
    });

    eventBus.$on('addSubmit', (contact) => {
      this.addContact(contact);
      this.currentView = null;
    });

    eventBus.$on('updateSubmit', (contact) => {
      this.updateContact(contact);
      this.currentView = null;
    });

    eventBus.$on('addContactForm', () => {
      this.currentView = 'addContact';
    });

    eventBus.$on('editContactForm', (no) => {
      this.fetchContactOne(no);
      this.currentView = 'updateContact';
    });

    eventBus.$on('deleteContact', (no) => {
      this.deleteContact(no);
    });

    eventBus.$on('editPhoto', (no) => {
      this.fetchContactOne(no);
      this.currentView = 'updatePhoto';
    });

    eventBus.$on('updatePhoto', (no, file) => {
      if (typeof file !== 'undefined') {
        this.updatePhoto(no, file);
      }
      this.currentView = null;
    });

    eventBus.$on('pageChanged', (page) => {
      this.pageChanged(page);
    });
  },
  methods: {
    pageChanged(page) {
      this.contactList.pageno = page;
      this.fetchContacts();
    },
    fetchContacts() {
      this.$axios
        .get(CONF.FETCH, {
          params: {
            pageno: this.contactList.pageno,
            pagesize: this.contactList.pagesize,
          },
        })
        .then((res) => (this.contactList = res.data))
        .catch((err) => {
          console.log('fetchContacts faild', err);
          this.contactList.contacts = [];
        });
    },
    addContact(contact) {
      this.$axios
        .post(CONF.ADD, contact)
        .then((res) => {
          if (res.data.status === 'success') {
            this.contactList.pageno = 1;
            this.contactList.pageSize = CONF.PAGESIZE;
            this.fetchContacts();
          } else {
            console.log('연락처 추가 실패 : ', res.data.message);
          }
        })
        .catch((err) => console.log('addContact failed : ', err));
    },
    updateContact(contact) {
      this.$axios
        .put(CONF.UPDATE(contact.no), contact)
        .then((res) => {
          if (res.data.status === 'success') {
            this.fetchContacts();
          } else {
            console.log('연락처 변경 실패 : ', res.data.message);
          }
        })
        .catch((err) => console.log('updateContact failed : ', err));
    },
    fetchContactOne(no) {
      this.$axios
        .get(CONF.FETCH_ONE(no))
        .then((res) => (this.contact = res.data))
        .catch((err) => console.log('fetchContactOne failed : ', err));
    },
    deleteContact(no) {
      this.$axios
        .delete(CONF.DELETE(no))
        .then((res) => {
          if (res.data.status === 'success') {
            this.fetchContacts();
          } else {
            console.log('연락처 삭제 실패 : ', res.data.message);
          }
        })
        .catch((err) => console.log('delete failed : ', err));
    },
    updatePhoto(no, file) {
      const data = new FormData();
      data.append('photo', file);
      this.$axios
        .post(CONF.UPDATE_PHOTO(no), data)
        .then((res) => {
          if (res.data.status === 'success') {
            this.fetchContacts();
          } else {
            console.log('연락처 사진 변경 실패 : ', res.data.message);
          }
        })
        .catch((err) => console.log('updatePhoto failed : ', err));
    },
  },
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
