import Mock from 'mockjs'
import loginApi from './mock-login'
// 登陆相关
Mock.mock('login/login', 'post', loginApi.login)
