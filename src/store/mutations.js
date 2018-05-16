import * as types from 'mutation-types'
const mutations = {
  [types.LOGIN] (state, payload) {
    state.login = payload
  }
}
export default mutations
