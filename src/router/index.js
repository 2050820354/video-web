import Vue from 'vue'
import VueRouter from "vue-router";
import login from '@/views/login'
import home from '@/views/home'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/login', component: login },
    { path: '/home', component: home },
  ]
})

export default router