import { GET_USERS_LISTINGS_SUCCESS } from '../actions/listings'

export default function UserListingsReducer (state = [], action) {
  switch (action.type) {
    case GET_USERS_LISTINGS_SUCCESS :
      return action.listings

    default:
      return state
  }
}
