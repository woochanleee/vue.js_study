import CONF from '../Config';

export default {
  currentView: null,
  mode: 'add',
  contact: {
    no: 0,
    name: '',
    tel: '',
    address: '',
    photo: '',
  },
  contacts: {
    pageNo: 1,
    pageSize: CONF.PAGESIZE,
    totalCount: 0,
    contacts: [],
  },
};
