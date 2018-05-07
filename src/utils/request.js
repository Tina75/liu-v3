import axios from 'axios'
import './mock-login'

export const login = (params) => axios.post('/login', params)
