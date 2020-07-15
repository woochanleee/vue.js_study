import Constant from '../Constant';
import axios from 'axios';
import CONF from '../Config';

export default {
  [Constant.ADD_CONTACT_FORM]: (store) => {
    store.commit(Constant.ADD_CONTACT_FORM);
  },
  [Constant.ADD_CONTACT]: (store) => {
    axios.post(CONF.ADD, store.state.contact).then((res) => {
      if (res.data.status === 'success') {
        store.dispatch(Constant.CANCEL_FORM);
        store.dispatch(Constant.FETCH_CONTACTS, { pageNo: 1 });
      } else {
        console.log('연락처 추가 실패: ' + res.data);
      }
    });
  },
  [Constant.EDIT_CONTACT_FORM]: (store, payload) => {
    axios.get(CONF.FETCH_ONE(payload.no)).then((res) => {
      store.commit(Constant.EDIT_CONTACT_FORM, { contact: res.data });
    });
  },
  [Constant.UPDATE_CONTACT]: (store) => {
    const currentPageNo = store.state.contacts.pageNo;
    const contact = store.state.contact;
    axios.put(CONF.UPDATE(contact.no), contact).then((res) => {
      if (res.data.status === 'success') {
        store.dispatch(Constant.CANCEL_FORM);
        store.dispatch(Constant.FETCH_CONTACTS, { pageNo: currentPageNo });
      } else {
        console.log('연락처 변경 실패: ' + res.data);
      }
    });
  },
  [Constant.EDIT_PHOTO_FORM]: (store, payload) => {
    axios.get(CONF.FETCH_ONE(payload.no)).then((res) => {
      store.commit(Constant.EDIT_PHOTO_FORM, { contact: res.data });
    });
  },
  [Constant.UPDATE_PHOTO]: (store, payload) => {
    const currentPageNo = store.state.contacts.pageNo;
    const data = new FormData();
    data.append('photo', payload.file);
    axios.post(CONF.UPDATE_PHOTO(payload.no), data).then(() => {
      store.dispatch(Constant.CANCEL_FORM);
      store.dispatch(Constant.FETCH_CONTACTS, { pageno: currentPageNo });
    });
  },
  [Constant.FETCH_CONTACTS]: (store, payload) => {
    let pageNo;
    if (typeof payload === 'undefined' || typeof payload.pageNo === 'undefined')
      pageNo = 1;
    else pageNo = payload.pageNo;
    const pageSize = store.state.contacts.pageSize;

    axios
      .get(CONF.FETCH, {
        params: {
          pageno: pageNo,
          pagesize: pageSize,
        },
      })
      .then((res) => {
        store.commit(Constant.FETCH_CONTACTS, {
          contacts: res.data,
        });
      });
  },
  [Constant.CANCEL_FORM]: (store) => {
    store.commit(Constant.CANCEL_FORM);
  },
  [Constant.DELETE_CONTACT]: (store, payload) => {
    const currentPageNo = store.state.contacts.pageNo;
    axios.delete(CONF.DELETE(payload.no)).then(() => {
      store.dispatch(Constant.FETCH_CONTACTS, { pageno: currentPageNo });
    });
  },
};
