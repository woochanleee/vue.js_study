<template>
  <div class="modal">
    <div class="form" @keyup.esc="cancleEvent">
      <h3 class="heading">:: {{ headingText }}</h3>
      <div v-if="mode === 'update'" class="form-group">
        <label for="no">일련련번호</label>
        <input type="text" id="no" class="long" disabled v-model="contact.no" />
      </div>
      <div class="form-group">
        <label for="name">이름</label>
        <input
          type="text"
          id="name"
          class="long"
          v-model="contact.name"
          ref="name"
          placeholder="이름을 입력하세요."
        />
      </div>
      <div class="form-group">
        <label for="tel">전화번호</label>
        <input
          type="text"
          id="tel"
          class="long"
          v-model="contact.tel"
          placeholder="전화번호를 입력하세요."
        />
      </div>
      <div class="form-group">
        <label for="address">주소</label>
        <input
          type="text"
          id="address"
          class="long"
          v-model="contact.address"
          placeholder="주소를 입력하세요."
        />
      </div>
      <div class="form-group">
        <div>&nbsp;</div>
        <input
          type="button"
          class="btn btn-primary"
          v-bind:value="btnText"
          @click="submitEvent"
        />
        <input
          type="button"
          class="btn btn-danger"
          value="취소"
          @click="cancleEvent"
        />
      </div>
    </div>
  </div>
</template>

<script>
import eventBus from '../EventBus';

export default {
  name: 'contactForm',
  props: {
    mode: {
      type: String,
      default: 'add',
    },
    contact: {
      type: Object,
      default: function() {
        return {
          no: '',
          name: '',
          tel: '',
          address: '',
          photo: '',
        };
      },
    },
  },
  mounted() {
    this.$refs.name.focus();
  },
  computed: {
    btnText() {
      if (this.mode === 'update') return '수 정';
      else return '추 가';
    },
    headingText() {
      if (this.mode === 'update') return '연락처 변경';
      else return '새로운 연락처 추가';
    },
  },
  methods: {
    submitEvent() {
      if (this.mode === 'update') {
        eventBus.$emit('updateSubmit', this.contact);
      } else {
        eventBus.$emit('addSubmit', this.contact);
      }
    },
    cancleEvent() {
      eventBus.$emit('cancle');
    },
  },
};
</script>

<style scoped>
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

.form {
  background-color: white;
  margin: 100px auto;
  max-width: 400px;
  min-width: 200px;
  font: 13px 'verdana';
  padding: 10px;
}

.form div {
  padding: 0;
  display: block;
  margin: 10px 0 0 0;
}

.form label {
  text-align: left;
  margin: 0 0 3px 0;
  padding: 0;
  display: block;
  font-weight: bold;
}

.form #no {
  background-color: #bbb6b699;
}
.form input,
select {
  box-sizing: border-box;
  border: 1px solid #bebebe;
  padding: 7px;
  margin: 0;
  outline: none;
}

.form .long {
  width: 100%;
}

.form .button {
  background-color: #2b798d;
  padding: 8px 15px;
  border: none;
  color: #fff;
}

.form .button:hover {
  background-color: #4691a4;
}

.form .heading {
  background-color: #33a17f;
  font-weight: 300;
  text-align: left;
  padding: 20px;
  color: #fff;
  margin: 5px 0 30px 0;
  padding: 10px;
  min-width: 200px;
  max-width: 400px;
}
</style>
