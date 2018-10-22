import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import VueAlert from '@vuejs-pt/vue-alert'

import './theme.css'

import App from './components/App'

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(VueAlert)

const lazyPage = page => () => import(`./pages/${page}.vue`)

// hack to force a reload
export const Reloader = Vue.extend({
  template: '<div/>',
  mounted () {
    setTimeout(() => {
      router.back()
    }, 100)
  }
})

const Logout = Vue.extend({
  template: '<div/>',
  mounted () {
    console.log('LOGOUT')
    window.localStorage.removeItem('token')
    router.push('/')
    router.push('/reload')
    this.$alert.success({ message: 'You have been logged out.' })
  }
})

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: lazyPage('Home') },
    { path: '/features', component: lazyPage('Features') },
    { path: '/stories', component: lazyPage('Stories') },
    { path: '/pricing', component: lazyPage('Pricing') },
    { path: '/login', component: lazyPage('Login') },
    { path: '/logout', component: Logout },
    { path: '/reload', component: Reloader }
  ]
})

export const vm = new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})
