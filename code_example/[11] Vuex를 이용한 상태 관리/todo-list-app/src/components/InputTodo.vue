<style>
* {
  box-sizing: border-box;
}
input {
  border: none;
  width: 75%;
  height: 35px;
  padding: 10px;
  float: left;
  font-size: 16px;
}
.add-button {
  padding: 10px;
  width: 25%;
  height: 35px;
  float: left;
  background-color: #d9d9d9;
  font-size: 13px;
  cursor: pointer;
  transition: 0.3s;
}
.add-button:hover {
  background-color: #bbb;
}
</style>

<template>
  <div>
    <input type="text" v-model.trim="todo" placeholder="입력 후 엔터!" v-on:keyup.enter="addTodo" />
    <span class="add-button" @click="addTodo">추 가</span>
  </div>
</template>

<script>
import Constant from "../Constant";

export default {
  name: "input-todo",
  data: () => ({ todo: "" }),
  methods: {
    addTodo() {
      // mutation을 발생할때 store.commit 이라는걸 쓰는구나!
      this.$store.commit(Constant.ADD_TODO, {
        todo: this.todo
      });
    }
  }
};
</script>