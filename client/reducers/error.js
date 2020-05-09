import { ERROR } from '../actions/error'

export default function (state = null, action) {
  switch (action.type) {
    case ERROR:
      return action.message

    default:
      return state
  }
}
