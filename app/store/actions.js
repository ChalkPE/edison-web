import axios from 'axios'
import * as types from './mutation-types'

export default {
  async auth (context, { username, password }) {
    try {
      const response = await axios.post('/auth', { username, password })
      context.commit(types.SAVE_TOKEN, response.data)
    } catch (err) {
      context.commit(types.AUTH_ERROR, err.response.data)
    }
  }
}
