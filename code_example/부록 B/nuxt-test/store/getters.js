export default {
  getContactOne(state) {
    const no = parseInt(state.no);
    const array = state.contacts.filter((item) => item.no === no);
    console.log(state.contacts, no);
    if (array.length === 1) return array[0];
    else return {};
  },
  getContacts(state) {
    return state.contacts;
  },
};
