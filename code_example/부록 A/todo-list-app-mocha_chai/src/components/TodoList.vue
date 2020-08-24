<style>
* {
  box-sizing: border-box;
}
header {
  background-color: purple;
  padding: 30px 30px;
  color: yellow;
  text-align: center;
}
header::after {
  content: "";
  display: table;
  clear: both;
}
</style>

<template>
  <div id="todo-list-app">
    <header>
      <h2>Todo List App</h2>
      <input-todo></input-todo>
    </header>
    <list></list>
  </div>
</template>

<script>
import InputTodo from "./InputTodo";
import List from "./List";

export default {
  name: "todo-list", // name 속성은 컴포넌트의 이름, 필수 값이 아니라 생략 가능
  components: {
    // InputTodo 컴포넌트는 <input-todo /> 와 같이 작성해야 한다.
    InputTodo,
    List
  }
};
</script>