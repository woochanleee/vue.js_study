<template>
  <div id="app">
    <layout>
      <h1 slot="header">헤더 영역</h1>
      <!--
        위처럼 태그에다가 slot="slot-name" 속성을 주면
        child-component 에 선언된 slot태그 와 그에 맞는 slot-name을 찾아서
        그 공간에 대체시킨다.
      -->
      <div slot="side-bar">
        <ul class="menu">
          <li v-for="sideBar in sideBars" :key="sideBar.menu">
            <a v-bind:href="sideBar.link">{{ sideBar.menu }}</a>
          </li>
        </ul>
      </div>

      <div slot="content">
        <h2>컨텐트 영역</h2>
        <p>
          김수한무 거북이와 두루미 삼천갑자 동방삭 치치카포 사리사리센타
          워리워리 세브리깡 무두셀라 구름이 허리케인에 담벼락 담벼락에 서생원
          서생원에 고양이 고양이엔 바둑이 바둑이는 돌돌이
        </p>
        <p>
          김수한무 거북이와 두루미 삼천갑자 동방삭 치치카포 사리사리센타
          워리워리 세브리깡 무두셀라 구름이 허리케인에 담벼락 담벼락에 서생원
          서생원에 고양이 고양이엔 바둑이 바둑이는 돌돌이
        </p>
        <p>
          김수한무 거북이와 두루미 삼천갑자 동방삭 치치카포 사리사리센타
          워리워리 세브리깡 무두셀라 구름이 허리케인에 담벼락 담벼락에 서생원
          서생원에 고양이 고양이엔 바둑이 바둑이는 돌돌이
        </p>
        <p>
          김수한무 거북이와 두루미 삼천갑자 동방삭 치치카포 사리사리센타
          워리워리 세브리깡 무두셀라 구름이 허리케인에 담벼락 담벼락에 서생원
          서생원에 고양이 고양이엔 바둑이 바둑이는 돌돌이
        </p>
      </div>
      <p slot="footer">Footer text</p>
    </layout>
  </div>
</template>

<script>
import Layout from "./components/NamedSlot";

export default {
  data: () => ({
    sideBars: [
      { menu: "Home", link: "#" },
      { menu: "About", link: "#" },
      { menu: "Contact", link: "#" },
      { menu: "Vue.js", link: "#" }
    ]
  }),
  components: {
    Layout
  }
};
</script>
<style scoped>
ul.menu {
  position: relative;
  padding: 5px;
  list-style: none;
  font-style: italic;
}
ul.menu a {
  text-decoration: none;
}
</style>
