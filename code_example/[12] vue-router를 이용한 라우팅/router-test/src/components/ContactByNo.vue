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
    // Contacts.vue 에서 ContactByNo.vue로 컴포넌트가 변경될 때 마다 Vue 인스턴스가 만들어 진다. 그래서 created 훅을 통해 url경로를 저장한다.
    // $route 객체를 통하여 파라미터값을 얻을 수 있다. 근데 왜 여기선 no일까? App.vue를 보면 /:no로 등록을 해놨기 때문이다.
    this.no = parseInt(this.$route.params.no);
    console.log('** created');
  },
  beforeRouteUpdate(to, from, next) {
    // 컴포넌트가 렌더링 된후 url이 변경될 경우 호출된다. /contacts에서 /contacts/1001로 갈경우엔 아래 콘솔이 안되고 created 에서 콘솔이 찍히지만
    // /contacts/1001 에서 /contacts/1002 로 갈 경우 이미 created는 /contacts/1001에서 찍히고 이미 렌더링 됐기 때문에 beforeRouteUpdate가 실행된다.
    // 컴포넌트 수준의 내비게이션 보호 기능
    console.log('** beforeRouteUpdate');
    this.no = to.params.no;
    next(); // 안해주면 url이 변경되지 않는다. 라는데 왜 변경되지;;
    // 자세히 보니까 this.no만 바껴서 내가 착각했다. 진짜 url이 그대로다!!
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
