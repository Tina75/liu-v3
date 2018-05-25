import '../mock/index'
import request from '../utils/request'

function login (uname, pwd) {
  let data = {
    uname,
    pwd
  }
  return request({
    url: 'login/login',
    method: 'post',
    data
  })
}
export {login}
