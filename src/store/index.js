import Axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    message: {
      status: false,
      type: 'success',
      message: 'test'
    },
    formData: {
      index: '',
      data: {
        name: '',
        email: '',
        cpf: '',
        studentNumber: ''
      }
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
      state.formData.data = {
        name: '',
        email: '',
        cpf: '',
        studentNumber: ''
      }
    },
    deleteRegister (state, index) {
      state.students.items.splice(index, 1)
    },
    setEditData (state, index) {
      state.formData = {index: index, data: state.students.items[index]}
    },
    updateRegister (state, payload) {
      state.students.items[payload.index] = payload.data;
      // console.log(state.students.items)
      // console.log(payload)
    },
    setMessage (state, paylaod) {
      state.message = paylaod
    },
    closeMessage (state) {
      state.message.status = false;
    }
  },
  actions: {
    closeMessage ({commit}) {
      commit('closeMessage');
    },
    createRegister ({commit}, payload) {
      // console.log(payload)
      Axios.post('http://localhost:5000/api/v1/signups', payload)
        .then( res => {
          // console.log(res);
          if (res.status == 200) {
            commit('addRegistration', res.data);
            commit('clearFormData');
            commit('setMessage', {
              status: true,
              type: 'success',
              message: 'Cadastro realizado com sucesso.'
            });
          } else {
            commit('setMessage', {
              status: true,
              type: 'error',
              message: res.data.msg
            })
          }
        })
        .catch( () => {
          commit('setMessage', {
            status: true,
            type: 'error',
            message: 'Erro ao tentar realizar o cadastro.'
          })
        })
    },
    clearFormData ({commit}) {
      commit('clearFormData');
    },
    deleteRegister ({commit}, payload) {
      // console.log(payload)
      Axios.delete('http://localhost:5000/api/v1/signups/' + payload.id)
        .then( res => {
          commit('deleteRegister', payload.index);
          commit('setMessage', {
            status: true,
            type: 'success',
            message: res.data.msg
          })
        })
        .catch( () => {
          commit('setMessage', {
            status: true,
            type: 'error',
            message: 'Erro ao tentar deletar o cadastro.'
          })
        })
    },
    setEditData ({commit}, index) {
      // console.log(index);
      commit('setEditData', index);
      router.push('/signup');
    },
    setSignupData ({commit}) {
      commit('clearFormData');
      router.push('/signup')
    },
    getRegisters ({commit}, payload) {
      // console.log(payload)
      Axios.get(`http://localhost:5000/api/v1/signups?page=${payload.page}&search=${payload.search}`)
        .then( res => {
          // console.log(res);
          commit('setRegisters', res.data);
        })
        .catch( err => {
          console.log(err);
        })
    },
    updateRegister ({commit}, payload) {
      // console.log(payload)
      Axios.put('http://localhost:5000/api/v1/signups/' + payload.data.id, {name: payload.data.name, email: payload.data.email})
        .then( res => {
          // console.log(res);
          if (res.status == 200) {
            commit('updateRegister', payload);
            commit('clearFormData');
            commit('setMessage', {
              status: true,
              type: 'success',
              message: "Atualização realizada com sucesso."
            });
          } else {
            commit('setMessage', {
              status: true,
              type: 'success',
              message: res.data.msg
            })
          }
        })
        .catch( err => {
          // console.log(err);
          commit('setMessage', {
            status: true,
            type: 'success',
            message: err.data.msg
          })
        })
    }
  },
  getters: {
    showStudents: (state) => {
      return state.students.items
    },
    getPagination: (state) => {
      return {
        nextPage: state.students.nextPage,
        page: state.students.page,
        previousPage: state.students.previousPage,
        totalItems: state.students.totalItems,
        totalPages: state.students.totalPages,
        search: state.students.search
      }
    },
    getFormData: (state) => {
      return state.formData
    },
    getMessage: (state) => {
      return state.message
    }
  }
})
