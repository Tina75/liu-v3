import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const login = r => require.ensure([], () => r(require('pages/login')), 'login')
const index = r => require.ensure([], () => r(require('pages/index')), 'index')
const myRule = r => require.ensure([], () => r(require('pages/myRule')), 'myRule')
const allRule = r => require.ensure([], () => r(require('pages/allRule')), 'allRule')

export default new Router({
  routes: [
    {
      path: '*', redirect: '/',
      path: '/index', redirect: '/index/myRule'
    },
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/index',
      name: 'index',
      component: index,
      children: [
        {
          path: '/index/myRule',
          name: '我的规则',
          component: myRule
        },
        {
          path: '/index/allRule',
          name: '全部规则',
          component: allRule
        }
      ]
    }
  ]
})
