import Vue from 'vue'
import VueRouter from 'vue-router'

// Views
import Students from '../views/Students.vue'
import SignUp from '../views/SignUp.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Students',
    component: Students
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
