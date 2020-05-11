import { ADDRESS } from '../actions/autocomplete'

export default function autocompleteReducer (state = [], action) {
  switch (action.type) {
    case ADDRESS:
      return action.address

    default:
      return state
  }
}
