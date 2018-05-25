import axios from 'axios'
import {Message} from 'element-ui'

let request = axios.create({
  baseURL: '',
  timeout: 5000
})

request.interceptors.request.use(config => config, error => Promise.reject(error))
request.interceptors.response.use(
  response => response,
  error => {
    Message.error(error.message)
    return Promise.reject(error)
  })

export default request
