<template>
  <div class="modal">
    <div class="form" @keyup.esc="cancelEvent">
      <form method="post" enctype="multipart/form-data">
        <h3 class="heading">:: 사진 변경</h3>
        <input
          type="hidden"
          name="no"
          class="long"
          disabled
          v-model="contact.no"
        />
        <div>
          <label>현재 사진</label>
          <img class="thumb" :src="contact.photo" />
        </div>
        <div>
          <label for="photo">사진 파일 선택</label>
          <input
            type="file"
            ref="photoFile"
            id="photo"
            class="long btn btn-default"
          />
        </div>
        <div>
          <div>&nbsp;</div>
          <input
            type="button"
            class="btn btn-primary"
            value="변 경"
            @click="photoSubmit"
          />
          <input
            type="button"
            class="btn btn-danger"
            value="취 소"
            @click="cancelEvent"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Constant from '../Constant';
import { mapState } from 'vuex';

export default {
  name: 'updatePhoto',
  props: ['no'],
  computed: mapState(['contact', 'contacts']),
  mounted() {
    this.$store.dispatch(Constant.FETCH_CONTACT_ONE, { no: this.no })
  },
  methods: {
    cancelEvent() {
      this.$router.push({  name: 'contacts', query: { page: this.contacts.pageno } });
    },
    photoSubmit() {
      const file = this.$refs.photoFile.files[0];
      this.$store.dispatch(Constant.UPDATE_PHOTO, {
        no: this.contact.no,
        file,
      });
      this.$router.push({ name: 'contacts', query: { page: this.contacts.pageno } });
    },
  },
};
</script>

<style scoped>
.modal {
  z-index: 10;
  display: block;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.form {
  z-index: 10;
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

img.thumb {
  width: 160px;
}
</style>
