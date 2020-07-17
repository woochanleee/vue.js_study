<template>
  <div>
    <hr class="divider" />
    <div>
      <table class="detail table table-bordered">
        <tbody>
          <tr class="active">
            <td>일련번호</td>
            <td>{{ contact.no }}</td>
          </tr>
          <tr class="active">
            <td>이름</td>
            <td>{{ contact.name }}</td>
          </tr>
          <tr class="active">
            <td>이름</td>
            <td>{{ contact.name }}</td>
          </tr>
          <tr class="active">
            <td>전화</td>
            <td>{{ contact.tel }}</td>
          </tr>
          <tr class="active">
            <td>주소</td>
            <td>{{ contact.address }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import contactList from '../ContactList';

export default {
  name: 'contactByNo',
  data: () => ({
    no: 0,
    contacts: contactList.contacts,
  }),
  created() {
    // this.$route.query.keyword 로 쿼리문자열 인 /user?keyword=test 에서 값을 얻을 수 있다.
    // Contacts.vue 에서 ContactByNo.vue로 컴포넌트가 변경될 때 마다 Vue 인스턴스가 만들어 진다. 그래서 created 훅을 통해 URI경로를 저장한다.
    // $route 객체를 통하여 파라미터값을 얻을 수 있다. 근데 왜 여기선 no일까? App.vue를 보면 /:no로 등록을 해놨기 때문이다.
    this.no = parseInt(this.$route.params.no);
  },
  watch: {
    $route(to, from) {
      console.log(to, from); // 왜 저자님은 인자를 두개받았을까 둘다 똑같은 객체이던데? 아 책에 나와있엇넹
      // to는 현재의 라우트 객체, from은 이전의 라우트 객체를 가리킨다고 한다. 여기선 to를 사용해야 함!
      this.no = parseInt(to.params.no);
    },
  },
  computed: {
    contact() {
      const no = this.no;
      const arr = this.contacts.filter((item) => item.no === no);
      if (arr.length === 1) return arr[0];
      return {};
    },
  },
};
</script>

<style>
table.detail {
  width: 400px;
}

.divider {
  height: 3px;
  margin: 0 auto;
  background-color: #ff0066;
  color: #ff0066;
  border: 0 none;
}
</style>
