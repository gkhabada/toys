import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Reviews from '@/views/Reviews'
import Portfolio from '@/views/Portfolio'
import About from '@/views/About'

import Smile from '@/views/Smile'

import Admin from '@/admin/Admin'
import AddToys from '@/admin/AddToys'
import AdminReviews from '@/admin/AdminReviews'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/reviews',
      name: 'reviews',
      component: Reviews
    },
    {
      path: '/toys',
      name: 'portfolio',
      component: Portfolio
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/smile',
      name: 'smile',
      component: Smile
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    },
    {
      path: '/admin/adminreviews',
      name: 'adminreviews',
      component: AdminReviews
    },
    {
      path: '/admin/adminaddtoys',
      name: 'addtoys',
      component: AddToys
    },
    { path: '/404', name: '404', component: () => import('@/views/page404') },
    { path: '*', redirect: '/404' }
  ]
})
