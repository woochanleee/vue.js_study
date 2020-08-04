<template>
  <div id="app">
    <div class="container">
      <div class="form-group">
        <button @click="fetchContacts">1페이지 연락처 조회</button>
      </div>
      <div class="form-group">
        <input type="text" v-model="name" placeholder="이름을 입력합니다." />
        <input type="text" v-model="tel" placeholder="전화번호를 입력합니다." />
        <input type="text" v-model="address" placeholder="주소를 입력합니다." />
        <button @click="addContact">연락처 1건 추가</button>
      </div>
      <div class="form-group">
        <input type="text" v-model="no" />
        <button @click="fetchContactOne">연락처 1건 조회</button>
      </div>
      <div class="form-group">
        <input type="text" v-model="no" />
        <input type="text" v-model="name" placeholder="이름을 입력합니다." />
        <input type="text" v-model="tel" placeholder="전화번호를 입력합니다." />
        <input type="text" v-model="address" placeholder="주소를 입력합니다." />
        <button @click="updateContact">수정</button>
      </div>
      <div class="form-group">
        <input type="text" v-model="no" />
        <button @click="deleteContact">삭제</button>
      </div>
      <div class="form-group">
        <input type="text" v-model="no" />
        <input type="file" ref="photoFile" name="photo" />
        <button @click="changePhoto">파일 변경</button>
      </div>
    </div>
    <span>JSON 출력</span>
    <div id="result" class="container">
      <xmp>{{ result }}</xmp>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "app",
  data() {
    return {
      no: 0,
      name: "",
      tel: "",
      address: "",
      result: null
    };
  },
  methods: {
    fetchContacts() {
      // axios 저수준 메서드의 특징은 모든 전달값을 config 객체로 전달한다는 점이다.
      axios
        .get("/api/contacts", {
          params: {
            pageno: 1,
            pagesize: 5
          }
        })
        .then(response => {
          console.log(response);
          this.result = response.data;
        })
        .catch(error => {
          console.log("ERROR!!! : ", error);
        });
    },
    addContact() {
      axios
        .post("/api/contacts", {
          name: this.name,
          tel: this.tel,
          address: this.address
        })
        .then(res => {
          console.log(res.data);
          this.result = res.data;
          this.no = res.data.no;
        })
        .catch(err => console.log(err));
    },
    fetchContactOne() {
      /*
        axios를 사용하면서 then()를 처리할 때는 콜백 함수로 화살표 함수를 사용할 것을 권장합니다.
        데이터를 수신한 후에 Vue 인스턴스 내부의 데이터를 변경해야 하는 경우가 많은데, 데이터 옵션을
        액세스하기 위해서는 this 객체가 Vue 인스턴스를 참조할 수 있어야 합니다. 따라서 화삺 함수를 사용해
        바깥 this(Vue 인스턴스)를 참조할수 있게 됩니다. 만약 기본 function을 사용하면 바깥에 this를 변수에
        할당시켜 놓고 콜백함수 안에서 그 변수를 사용해 수정해야 하는데 화살표 함수가 더 깔끔해 보입니다.

        methods 옵션의 각 메서드는 화살표 함수를 사용하면 안됩니다. 메서드를 화살표 함수 형태로
        작성하게 되면 메서드 내부에서의 this는 전역 객체를 가리키게 되기 때문입니다.
      */
      this.$axios
        .get(`/api/contacts/${this.no}`)
        .then(res => {
          console.log(res);
          this.result = res.data;
        })
        .catch(err => console.log(err));
    },
    updateContact() {
      axios
        .put(`/api/contacts/${this.no}`, {
          name: this.name,
          tel: this.tel,
          address: this.address
        })
        .then(res => {
          console.log(res.data);
          this.name = "";
          this.tel = "";
          this.address = "";
          this.result = res.data;
        })
        .catch(err => console.log(err));
    },
    deleteContact() {
      axios
        .delete(`/api/contacts/${this.no}`)
        .then(res => {
          console.log(res);
          this.no = 0;
          this.result = res.data;
        })
        .catch(err => console.log(err));
    },
    changePhoto() {
      const data = new FormData();
      const file = this.$refs.photoFile.files[0];

      data.append("photo", file);
      axios
        .post(`/api/contacts/${this.no}/photo`, data)
        .then(res => (this.result = res.data))
        .catch(err => console.log(`updatePhoto failed ${err}`));
    }
  }
};
</script>

<style>
@import url("https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css");
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
  border: 1px solid gray;
  padding: 10px;
  margin-bottom: 10px;
  text-align: left;
}
#result {
  text-align: left;
  padding: 20px;
  border: 1px solid black;
}
.form-group {
  border: 1px dashed gray;
  padding: 5px 5px 5px 20px;
}
</style>