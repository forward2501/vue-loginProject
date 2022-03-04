import { createStore } from 'vuex'

export default createStore({
  state: {
    lists: [],
    currentUser: ''
  },
  getters: {
  },
  mutations: {
    addItem (state, value) {
      state.lists.push(value)
    },
    updateCurrentUser (state, userName) {
      state.currentUser = userName
    }
  },
  actions: {
  },
  modules: {
  }
})
