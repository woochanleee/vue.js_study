<style>
* {
  box-sizing: border-box;
}
ul {
  margin: 0;
  padding: 0;
}
ul li {
  cursor: pointer;
  position: relative;
  padding: 8px 8px 8px 40px;
  background: #eee;
  font-size: 14px;
  transition: 0.2s;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
ul li:hover {
  background: #ddd;
}
ul li.checked {
  background: #bbb;
  color: #fff;
  text-decoration: line-through;
}
ul li.checked::before {
  content: "";
  position: absolute;
  border-collapse: #fff;
  border-style: solid;
  border-width: 0 1px 1px 0;
  top: 10px;
  left: 16px;
  transform: rotate(45deg);
  height: 8px;
  width: 8px;
}
.close {
  position: absolute;
  right: 0;
  top: 0;
  padding: 8px 12px;
}
.close:hover {
  background-color: #f44336;
  color: white;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.5s;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(50px);
}
</style>

<template>
  <transition-group name="list" tag="ul">
    <li
      v-for="a in todoList"
      v-bind:key="a.id"
      :class="checked(a.done)"
      v-on:click="doneToggle({ id: a.id })"
    >
      <span @click="() => todoList = null">{{ a.todo }}</span>
      <!-- 위 코드처럼 computed는 이러하게 변경이 불가하다. -->
      <span v-if="a.done">(완료)</span>
      <span class="close" v-on:click.stop="deleteTodo({ id: a.id })">&#x00D7;</span>
    </li>
  </transition-group>
</template>

<script>
import Constant from "../Constant";
import { mapState } from "vuex";
// import { mapMutations, mapActions } from "vuex";

export default {
  name: "List",
  // computed: {
  // 이런식으로도 안되낭...
  // todoList: mapState({
  //     todoList: (state) => state.todoList
  //   })
  // },
  computed: mapState(["todoList"]),

  /*
  // 궁금해서 테스트 해본 코드. 
  computed: {
    todoList() {
      return this.$store.state.todoList;
    }
  },
  data: function() {
    return {
      todoList: this.$store.state.todoList
    };
  },

  */
  // data: function() { // data에 mapState 사용법을 모르겠넹
  //   return {
  //   mapState({
  //       todoList: (state) => state.todoList
  //     })
  //   };
  // },
  methods: {
    checked(done) {
      if (done) return { checked: true };
      else return { checked: false };
    },
    deleteTodo(payload) {
      this.$store.dispatch(Constant.DELETE_TOTO, payload);
    },
    doneToggle(payload) {
      this.$store.dispatch(Constant.DONE_TOGGLE, payload);
    }
    // ...mapActions([Constant.DELETE_TOTO, Constants.DONE_TOGGLE])
    // ...mapMutations([Constant.DELETE_TOTO, Constant.DONE_TOGGLE])
  }
};
/*
  mapState 헬퍼 메서드를 이용하면 computed 속성을 사용하지 않아도 된다.
  여러 개의 상태를 바인딩 하려면 배열에 스토어 상태 객체의 속성명을 나열하면 된다.
  이렇게 할 경우 저장소(store) 상태의 이름과 동일한 이름으로 바인딩 되므로 다른 이름으로 하고 싶다면
  아래와 같이
  computed: mapState({
    todoList2: (state) => state.todoList
  })

  mapMutations 헬퍼 메서드는 변이(store에 mutation에 등록된 키 값?)를 동일한 이름의 메서드에 자동으로 연결한다.
  
  한 가지 주의할 점은 컴포넌트에서 mapMutations 헬퍼 메서드를 이용해 변이를 메서드에 바인딩한 경우
  호출할 때 변이의 인자 형식을 따랴야 한다는 것이다.

  컴포넌트의 메서드 이름을 변이의 이름과 다르게 사용하고 싶다면 다음과 같이 객체 구조로 변경하면 된다.
  methods: {
    ...mapMutations({
      removeTodo: Constant.DELETE_TODO,
      toggleDone: Constant.DONE_TOGGLE
    })
  }
  
  ⚠️ 강조 ⚠️
  변이: 상태를 변경하기 위한 존재, 동기적인 처리만 가능

  내가 궁금했던거...
  Q. Vuex의 상태를 왜 컴포넌트의 계산형 속성에 바인딩하는가?
  A. 컴포넌트 수준에서 상태를 직접 변경하지 않았으면 하기 때문이다. 현재는 수정이 가능하긴 한다.
  직접 변경하는 것을 막을 때 쓰는 옵션이 Vuex Store 객체의 string: true 옵션이다. 이 옵
  션을 사용하면 컴포넌트에서 직접 상태를 변경하려 할 경우 오류를 발생시킨다.
  
  하지만 실무에선 이 옵션을 사용하면 엄격하게 검증하기 위해 오히려 성능이 저하되기 때문에 사용하지 마라.

*/
</script>
