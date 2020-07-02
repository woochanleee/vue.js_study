<template>
  <div class="main">
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'child2',
  data: () => ({ msg: 'Child2' }),
};
</script>

<style>
.main {
  border: 1px solid black;
  background-color: aqua;
}
</style>
