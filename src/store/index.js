import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    search: '',
    students: [
      {
        id: 1,
        studentNumber: 5469895,
        name: 'Carlos',
        cpf: '123456987-0',
        created_at: '02/10/1996'
      },
      {
        id: 2,
        studentNumber: 5469895,
        name: 'Joana',
        cpf: '123456987-0',
        created_at: '02/10/1996'
      }
    ]
  },
  mutations: {
    setSearch (state, value) {
      state.search = value
    }
  },
  actions: {
    setSearch ({commit}, value) {
      commit('setSearch', value)
    }
  },
  getters: {
    showSearchValue: (state) => {
      return state.search
    },
    showStudents: (state) => {
      return state.students
    }
  }
})
