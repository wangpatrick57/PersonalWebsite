import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tapestry',
    name: 'Tapestry',
    component: () => import('@/views/Tapestry.vue')
  },
  {
    path: '/colorsseum',
    name: 'Colorsseum',
    component: () => import('@/views/Colorsseum.vue')
  },
  {
    path: '/robotics',
    name: 'Robotics',
    component: () => import('@/views/Robotics.vue')
  },
  {
    path: '/gdc',
    name: 'GameDevClub',
    component: () => import('@/views/GameDevClub.vue')
  },
  {
    path: '/textwall',
    name: 'TextWall',
    component: () => import('@/views/TextWall.vue')
  },
  {
    path: '/connect',
    name: 'connect',
    component: () => import('@/views/Connect.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
