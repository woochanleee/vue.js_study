export default {
  getContactOne(state) {
    const no = state.no;
    const array = state.contacts.filter((item) => item.no === no);
    if (array.length === 1) return array[0];
    else return {};
  },
  getContacts(state) {
    return state.contacts;
  },
};
