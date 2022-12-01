import Vue from 'vue'
import VueRouter from 'vue-router'
import VHomeView from '../views/VHomeView.vue'
import SignIn from '../components/SignIn.vue'
import SignUp from '../components/SignUp.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: VHomeView
  },
  {
    path: '/signIn',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  }
]

const router = new VueRouter({
  routes
})

export default router
