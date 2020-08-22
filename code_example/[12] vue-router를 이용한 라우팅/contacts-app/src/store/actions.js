import Constant from '../Constant';
import axios from 'axios';
import CONF from '../Config';

export default {
  [Constant.CHANGE_ISLOADING]: (store, payload) => {
    store.commit(Constant.CHANGE_ISLOADING, payload);
  },
  [Constant.FETCH_CONTACTS]: (store, payload) => {
    let pageNo;
    if (typeof payload === 'undefined' || typeof payload.pageNo === 'undefined')
      pageNo = 1;
    else pageNo = payload.pageNo;
    const pageSize = store.state.contacts.pageSize;
    store.dispatch(Constant.CHANGE_ISLOADING, { isLoading: true });
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
        store.dispatch(Constant.CHANGE_ISLOADING, { isLoading: false });
      });
  },
  [Constant.ADD_CONTACT]: (store) => {
    store.dispatch(Constant.CHANGE_ISLOADING, { isLoading: true });
    axios.post(CONF.ADD, store.state.contact).then((res) => {
      if (res.data.status === 'success') {
        store.dispatch(Constant.FETCH_CONTACTS, { pageNo: 1 });
      } else {
        console.log('연락처 추가 실패: ' + res.data);
      }
    });
  },
  [Constant.UPDATE_CONTACT]: (store) => {
    store.dispatch(Constant.CHANGE_ISLOADING, { isLoading: true });
    const currentPageNo = store.state.contacts.pageno;
    const contact = store.state.contact;
    axios.put(CONF.UPDATE(contact.no), contact).then((res) => {
      if (res.data.status === 'success') {
        store.dispatch(Constant.FETCH_CONTACTS, { pageNo: currentPageNo });
      } else {
        console.log('연락처 변경 실패: ' + res.data);
      }
    });
  },
  [Constant.UPDATE_PHOTO]: (store, payload) => {
    store.dispatch(Constant.CHANGE_ISLOADING, { isLoading: true });
    const currentPageNo = store.state.contacts.pageNo;
    const data = new FormData();
    data.append('photo', payload.file);
    axios.post(CONF.UPDATE_PHOTO(payload.no), data).then(() => {
      store.dispatch(Constant.FETCH_CONTACTS, { pageno: currentPageNo });
    });
  },
  [Constant.DELETE_CONTACT]: (store, payload) => {
    store.dispatch(Constant.CHANGE_ISLOADING, { isLoading: true });
    const currentPageNo = store.state.contacts.pageNo;
    axios.delete(CONF.DELETE(payload.no)).then(() => {
      store.dispatch(Constant.FETCH_CONTACTS, { pageno: currentPageNo });
    });
  },
  [Constant.FETCH_CONTACT_ONE]: (store, payload) => {
    store.dispatch(Constant.CHANGE_ISLOADING, { isLoading: true });
    axios.get(CONF.FETCH_ONE(payload.no)).then((res) => {
      store.commit(Constant.FETCH_CONTACT_ONE, { contact: res.data });
      store.dispatch(Constant.CHANGE_ISLOADING, { isLoading: false });
    });
  },
  [Constant.INITIALIZE_CONTACT_ONE]: (store) => {
    store.commit(Constant.INITIALIZE_CONTACT_ONE);
  },
};
