import { GET_USER_SUCCESS } from '../actions/users'

export default function categoriesReducer (state = {}, action) {
  switch (action.type) {
    case GET_USER_SUCCESS:
      return action.details
    default:
      return state
  }
}
