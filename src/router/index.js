import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const login = r => require.ensure([], () => r(require('pages/login')), 'login')
const index = r => require.ensure([], () => r(require('pages/index')), 'index')
const myRule = r => require.ensure([], () => r(require('pages/myRule')), 'myRule')

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/index',
      name: 'index',
      component: index,
      children: [{
        path: '',
        name: 'myRule',
        component: myRule
      }]
    }
  ]
})
