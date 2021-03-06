// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'normalize.css'

Vue.config.productionTip = false

// jquery
window.$ = window.jQuery = require('jquery')

router.beforeEach((to, from, next) => {
  if (to.path.indexOf('admin') !== -1) {
    let signIn = localStorage.getItem('signIn')
    if (signIn === 'ILoveYou') {
      next()
    } else {
      next('/404')
    }
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
