// import axios from '@axios'

export default {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    fetchChatsAndContacts() {
      return new Promise((resolve, reject) => {
        axios
          .get('/chats')
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    getChat(ctx, { chatId }) {
      return new Promise((resolve, reject) => {
        axios
          .get(`/chats/${chatId}`)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    sendMessage(ctx, { chatId, message,file }) {
      return new Promise((resolve, reject) => {
        let fd = new FormData();
        fd.append("file", file);
        fd.append("chatId", chatId);
        fd.append("message", message);
        axios
          .post(`/chats/${chatId}`, fd)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
  },
}
