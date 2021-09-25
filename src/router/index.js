import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Video from '../views/Video.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/:category?',
    name: 'home',
    component: Home
  },
  {
    path: '/video/:id',
    name: 'video',
    component: Video
  },
  {
    path: '*',
    redirect: '/',
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
