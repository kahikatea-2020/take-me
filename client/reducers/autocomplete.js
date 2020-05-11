import { ADDRESS, CLEAR_ADDRESS } from '../actions/autocomplete'

export default function autocompleteReducer (state = '', action) {
  switch (action.type) {
    case ADDRESS:
      return action.address

    case CLEAR_ADDRESS:
      return ''

    default:
      return state
  }
}
