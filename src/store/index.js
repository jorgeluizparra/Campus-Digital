import Axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apis: {
      searchForSignups: 'http://localhost:5000/api/v1/signups/',
      registerSignup: 'http://localhost:5000/api/v1/signups/',
      updateSignup: 'http://localhost:5000/api/v1/signups/',
      deleteSignup: 'http://localhost:5000/api/v1/signups/'
    },
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
    signups: {
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
      state.signups = array
    },
    addRegistration (state, payload) {
      state.signups.items.push(payload)
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
      state.signups.items.splice(index, 1)
    },
    setEditData (state, index) {
      state.formData = {index: index, data: state.signups.items[index]}
    },
    updateRegister (state, payload) {
      state.signups.items[payload.index] = payload.data;
      // console.log(state.signups.items)
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
    createRegister ({commit, state}, payload) {
      // console.log(payload)
      Axios.post(state.apis.registerSignup, payload)
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
    deleteRegister ({commit, state}, payload) {
      // console.log(payload)
      Axios.delete(state.apis.deleteSignup + payload.id)
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
    getRegisters ({commit, state}, payload) {
      // console.log(payload)
      Axios.get(state.apis.searchForSignups + `?page=${payload.page}&search=${payload.search}`)
        .then( res => {
          // console.log(res);
          commit('setRegisters', res.data);
        })
        .catch( err => {
          console.log(err);
        })
    },
    updateRegister ({commit, state}, payload) {
      // console.log(payload)
      Axios.put(state.apis.updateSignup + payload.data.id, {name: payload.data.name, email: payload.data.email})
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
    showsignups: (state) => {
      return state.signups.items
    },
    getPagination: (state) => {
      return {
        nextPage: state.signups.nextPage,
        page: state.signups.page,
        previousPage: state.signups.previousPage,
        totalItems: state.signups.totalItems,
        totalPages: state.signups.totalPages,
        search: state.signups.search
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
