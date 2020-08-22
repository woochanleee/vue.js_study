<template>
  <div class="modal">
    <spinner
      class="spinner"
      v-bind:line-size="10"
      v-bind:size="100">
    </spinner>
  </div>
</template>

<script>
import Spinner from 'vue-simple-spinner';

export default {
  components: {
    Spinner
  }
}
</script>

<style>
.modal {
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -50px 0 0 -50px;
}
</style>