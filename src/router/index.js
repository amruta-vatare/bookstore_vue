import Vue from 'vue'
import VueRouter from 'vue-router'
import SignIn from '../components/SignIn.vue'
import SignUp from '../components/SignUp.vue'
import BookCard from '../components/BookCard'
import BookCardList from '../components/BookCardList'
import UserCart from '../components/UserCart.vue'
import OrderAck from '../components/OrderAck.vue'
import requiresAuth from './middleware/requiresAuth'
import hideAppBar from './middleware/hideAppBar'
import middlewarePipeline from './middlewarePipeline'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'BookCardList',
    component: BookCardList,
    meta: {
      middlewares: [
        hideAppBar
      ]
    }
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn,
    meta: {
      middlewares: [
        hideAppBar
      ]
    }
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp,
    meta: {
      middlewares: [
        hideAppBar
      ]
    }
  },
  {
    path: '/bookCard',
    name: 'BookCard',
    component: BookCard,
    meta: {
      middlewares: [
        hideAppBar
      ]
    }
  },
  {
    path: '/bookCardList',
    name: 'BookCardList',
    component: BookCardList,
    meta: {
      middlewares: [
        hideAppBar,
        requiresAuth
      ]
    }
  },
  {
    path: '/usercart',
    name: 'UserCart',
    component: UserCart,
    meta: {
      middlewares: [
        hideAppBar,
        requiresAuth
      ]
    }
  },
  {
    path: '/order',
    name: 'OrderAck',
    component: OrderAck,
    meta: {
      middlewares: [
        hideAppBar
      ]
    }
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  // if there is no middleware on next route where we are going, just invoke default next.
  if (!to.meta.middlewares) {
    return next()
  }
  const middlewares = to.meta.middlewares
  // return middlewares[0]({ to, from, next })

  // run chain of middlewares
  return middlewares[0](
    { to, from, next: middlewarePipeline(to, from, next, middlewares, 1) }
  )
})

export default router
