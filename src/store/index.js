import Axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    formData: {
      name: '',
      email: '',
      studentNumber: '',
      cpf: ''
    },
    students: {
      // items: [
      //   {
      //     name: '',
      //     email: '',
      //     cpf: '',
      //     studentNumber: ''
      //   }
      // ],
      // nextPage: "",
      // page: "0",
      // previousPage: "",
      // totalItems: 0,
      // totalPages: 0
    }
  },
  mutations: {
    setRegisters (state, array) {
      state.students = array
    },
    addRegistration (state, payload) {
      state.students.items.push(payload)
    },
    clearFormData (state) {
      state.formData.name = ''
      state.formData.email = ''
      state.formData.studentNumber = ''
      state.formData.cpf = ''
    },
    deleteRegister (state, index) {
      Vue.delete(state.students, index)
    },
    editRegister (state, index) {
      state.formData = state.students[index]
    }
  },
  actions: {
    createRegister ({commit}, payload) {
      console.log(payload)
      Axios.post('http://localhost:5000/api/v1/signups', payload)
        .then( res => {
          console.log(res);
          commit('addRegistration', res.data)
          commit('clearFormData')
        })
        .catch( err => {
          console.log(err);
        })
    },
    clearFormData ({commit}) {
      commit('clearFormData')
    },
    deleteRegister ({commit}, index) {
      commit('deleteRegister', index)
    },
    editRegister ({commit}, index) {
      commit('editRegister', index)
      router.push('/signup')
    },
    getRegisters ({commit}, payload) {
      console.log(payload)
      Axios.get(`http://localhost:5000/api/v1/signups?page=${payload.page}&search=${payload.search}`)
        .then( res => {
          console.log(res);
          commit('setRegisters', res.data);
        })
        .catch( err => {
          console.log(err);
        })
    }
  },
  getters: {
    showStudents: (state) => {
      return state.students.items
    },
    payload: (state) => {
      return state.formData
    }
  }
})
