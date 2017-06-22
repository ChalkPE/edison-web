import jwt from 'jsonwebtoken'

export default {
  payload (state) {
    return jwt.decode(state.token)
  }
}
