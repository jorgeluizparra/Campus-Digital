import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    search: '',
    formData: {
      name: '',
      email: '',
      studentNumber: '',
      cpf: ''
    },
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
    },
    addRegistration (state, payload) {
      state.students.push(payload)
    },
    clearFormData (state) {
      state.formData.name = ''
      state.formData.email = ''
      state.formData.studentNumber = ''
      state.formData.cpf = ''
    }
  },
  actions: {
    setSearch ({commit}, value) {
      commit('setSearch', value)
    },
    submit ({commit, state}) {
      commit('addRegistration', state.formData)
      commit('clearFormData')
    },
    clearFormData ({commit}) {
      commit('clearFormData')
    },
  },
  getters: {
    showSearchValue: (state) => {
      return state.search
    },
    showStudents: (state) => {
      return state.students
    },
    payload: (state) => {
      return state.formData
    }
  }
})
