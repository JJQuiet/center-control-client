import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ViceView from '../views/ViceView.vue'
import VolumeControl from '@/views/VolumeControl.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {path:'/video', name: 'video',component: HomeView},
  {
    path: '/voice',
    name: 'voice',
    component: ViceView
  },
  {
    path: '/volume',
    name: 'volume',
    component: VolumeControl
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
