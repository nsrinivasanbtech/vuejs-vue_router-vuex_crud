import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import webdevelopment from '../views/webdevelopment.vue'
import java from '../views/java.vue'
import database from '../views/database.vue'
import technology from '../views/technology.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/webdevelopment',
    name: 'webdevelopment',
    component: webdevelopment
  },
  {
    path: '/java',
    name: 'java',
    component: java
  },
  {
    path: '/database',
    name: 'database',
    component: database
  },
  {
    path: '/technology/:tech/:name/:id',
    name: 'technology',
    component: technology
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
