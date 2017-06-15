import * as types from './mutation-types'

export default {
  [types.AUTH_ERROR] (state, { message }) {
    state.authError = message
  },

  [types.SAVE_TOKEN] (state, { token }) {
    state.token = token
  }
}
