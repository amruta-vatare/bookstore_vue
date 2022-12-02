import Vue from 'vue'
import VueRouter from 'vue-router'
import SignIn from '../components/SignIn.vue'
import SignUp from '../components/SignUp.vue'
import BookCard from '../components/BookCard'
import BookCardList from '../components/BookCardList'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'BookCardList',
    component: BookCardList
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/bookCard',
    name: 'BookCard',
    component: BookCard
  },
  {
    path: '/bookCardList',
    name: 'BookCardList',
    component: BookCardList
  }
]

const router = new VueRouter({
  routes
})

export default router
