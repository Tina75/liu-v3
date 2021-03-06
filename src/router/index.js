import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const login = r => require.ensure([], () => r(require('pages/login')), 'login')
const index = r => require.ensure([], () => r(require('pages/index')), 'index')
const myRule = r => require.ensure([], () => r(require('pages/myRule')), 'myRule')
const allRule = r => require.ensure([], () => r(require('pages/allRule/allRule')), 'allRule')

export default new Router({
  routes: [
    {
      path: '*', redirect: '/'
    },
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/myRule',
      name: 'index',
      component: index,
      children: [
        {
          path: '',
          name: '我的规则',
          component: myRule
        },
        {
          path: '/allRule',
          name: '全部规则',
          component: allRule
        }
      ]
    }
  ]
})
