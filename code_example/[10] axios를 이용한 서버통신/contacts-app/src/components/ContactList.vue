<template>
  <div>
    <p class="add-new">
      <button class="btn btn-primary" @click="addContact">
        새로운 연락처 추가하기
      </button>
    </p>
    <div id="example">
      <table id="list" class="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>이름</th>
            <th>전화번호</th>
            <th>주소</th>
            <th>사진</th>
            <th>편집/삭제</th>
          </tr>
        </thead>
        <tbody id="contacts">
          <tr v-for="contact in contactList.contacts" :key="contact.no">
            <td>{{ contact.name }}</td>
            <td>{{ contact.tel }}</td>
            <td>{{ contact.address }}</td>
            <td>
              <img
                class="thumbnail"
                :src="contact.photo"
                @click="editPhoto(contact.no)"
              />
            </td>
            <td>
              <button class="btn btn-primary" @click="editContact(contact.no)">
                편집
              </button>
              <button class="btn btn-danger" @click="deleteContact(contact.no)">
                삭제
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div>
        <paginate
          ref="pageButtons"
          :page-count="totalPage"
          :page-range="7"
          :margin-pages="3"
          :click-handler="pageChanged"
          :prev-text="'이전'"
          :next-text="'다음'"
          :container-class="'pagination'"
          :page-class="'page-item'"
        ></paginate>
      </div>
    </div>
  </div>
</template>

<script>
import eventBus from '../EventBus';
import Paginate from 'vuejs-paginate';

export default {
  name: 'contactList',
  components: {
    Paginate,
  },
  props: ['contactList'],
  computed: {
    totalPage() {
      return (
        Math.floor(
          (this.contactList.totalcount - 1) / this.contactList.pagesize
        ) + 1
      );
    },
  },
  watch: {
    ['contactList.pageno']: function() {
      this.$refs.pageButtons.selected = this.contactList.pageno - 1;
    },
  },
  methods: {
    pageChanged(page) {
      eventBus.$emit('pageChanged', page);
    },
    addContact() {
      eventBus.$emit('addContactForm');
    },
    editContact(no) {
      eventBus.$emit('editContactForm', no);
    },
    deleteContact(no) {
      if (confirm('정말로 삭제하시겠습니까?') === true) {
        eventBus.$emit('deleteContact', no);
      }
    },
    editPhoto(no) {
      eventBus.$emit('editPhoto', no);
    },
  },
};
</script>

<style scoped>
.add-new {
  margin: 10px auto;
  max-width: 820px;
  min-width: 820px;
  padding: 40px 0 0 0;
  text-align: left;
}

#example {
  margin: 10px auto;
  max-width: 820px;
  min-width: 820px;
  padding: 0;
  position: relative;
  font: 13px 'verdana';
}

#example .long {
  width: 100%;
}

#example .short {
  width: 50%;
}

#example input,
textarea,
select {
  box-sizing: border-box;
  border: 1px solid #bebebe;
  padding: 7px;
  margin: 0;
  outline: none;
}

#list {
  width: 800px;
  font: 13px 'verdana';
}

#list thead tr {
  color: yellow;
  background-color: purple;
}

#list th:nth-child(5n + 1),
#list td:nth-child(5n + 1) {
  width: 200px;
}

#list th:nth-child(5n + 2),
#list td:nth-child(5n + 2) {
  width: 150px;
}

#list th:nth-child(5n + 3),
#list td:nth-child(5n + 3) {
  width: 250px;
}

#list th:nth-child(5n + 4),
#list td:nth-child(5n + 4) {
  width: 60px;
}

#list th:nth-child(5n),
#list td:nth-child(5n) {
  width: 150px;
}

#list th {
  padding: 10px 5px;
}

#list tr {
  border-bottom: 1px solid blakc;
}

#list td,
#list th {
  text-align: center;
  vertical-align: middle;
}

img.thumbnail {
  width: 48px;
  height: 48px;
  margin-top: auto;
  margin-bottom: auto;
  display: block;
  cursor: pointer;
}
</style>

<!--
  자신의 데이터를 가지지 못하고 상위 컴포넌트로부터 props를 통해 전달받은 데이터(contactList)를 화면에 나타내기만 합니다.
  이러한 컴포넌트를 상태가 없는 컴포넌트(Stateless Component) 라고 부릅니다. 자신의 상태(데이터)가 없기 때문에 반드시
  props를 통해 전달 받아야 합니다.
-->
