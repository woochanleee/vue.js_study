<template>
  <div>
    <h1>연락처</h1>
    <div class="wrapper">
      <div class="box" v-for="c in contacts" v-bind:key="c.no">
        <!-- { query: { pageno: 2 } } 쿼리도 당연히 가능 -->
        <router-link :to="{ name: 'contactByNo', params: { no: c.no } }">{{
          c.name
        }}</router-link>
      </div>
    </div>
    <router-view />
    <!-- children에 해당하는 컴포넌트를 렌더링 할 수 있다. -->
  </div>
</template>

<script>
import contactList from '../ContactList';

export default {
  name: 'contacts',
  data: () => ({
    contacts: contactList.contacts,
  }),
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
