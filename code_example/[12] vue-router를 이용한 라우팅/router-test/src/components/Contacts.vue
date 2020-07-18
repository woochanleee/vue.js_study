<template>
  <div>
    <h1>연락처</h1>
    <div class="wrapper">
      <div class="box" v-for="c in contacts" v-bind:key="c.no">
        <!-- { query: { pageno: 2 } } 쿼리도 당연히 가능 -->
        <span @click="navigate(c.no)">[ {{ c.name }} ]</span>
      </div>
    </div>
    <router-view />
    <!-- children에 해당하는 컴포넌트를 렌더링 할 수 있다. -->
  </div>
</template>

<script>
import contactList from "../ContactList";

export default {
  name: "contacts",
  data: () => ({
    contacts: contactList.contacts
  }),
  methods: {
    navigate(no) {
      if (confirm("상세 정보를 보시겠습니까?")) {
        // this.$router.push("/contacts/" + no); // 이렇게도 동작한다!
        // this.$router.push(location, [, completeCallback] [, abortCallback])
        // 성공, 실패했을때 처리할 콜백을 넣어줄 수 있다.
        this.$router.push({ name: "contactByNo", params: { no } }, () =>
          console.log(`/contacts/${no} 로 이동 완료!`)
        );
      }
    }
  }
};
</script>

<style scoped>
.wrapper {
  background-color: #ffffff;
  clear: both;
  display: table;
}

.box {
  float: left;
  background-color: aqua;
  border-radius: 5px;
  padding: 10px;
  margin: 3px;
  text-align: center;
  font-size: 120%;
  width: 100%;
  font-weight: bold;
}

a:link,
a:visited {
  text-align: center;
  text-decoration: none;
  display: inline-block;
}
</style>
