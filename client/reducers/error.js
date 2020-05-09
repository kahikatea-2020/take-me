import { ERROR, HIDE_ERROR } from '../actions/error'

export default function (state = null, action) {
  switch (action.type) {
    case ERROR:
      return action.message

    case HIDE_ERROR:
      return null

    default:
      return state
  }
}
