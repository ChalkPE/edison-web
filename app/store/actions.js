import axios from 'axios'
import * as types from './mutation-types'

export default {
  async auth (context, query) {
    const res = await axios.post('/auth', query)
    context.commit(types.SET_TOKEN, res.data)
  },

  async signOut (context) {
    context.commit(types.SET_TOKEN, { token: null })
  }
}
