import {
  GET_LISTINGS_PENDING,
  GET_LISTINGS_SUCCESS,
  GET_USERS_LISTINGS_SUCCESS,
  GET_USERS_LISTINGS_PENDING
} from '../actions/listings'

import { LOGIN_PENDING, LOGIN_SUCCESS } from '../actions/users'

export default function pendingReducer (pendingState = false, action) {
  switch (action.type) {
    case LOGIN_PENDING:
    case GET_USERS_LISTINGS_PENDING:
    case GET_LISTINGS_PENDING:
      return true

    case LOGIN_SUCCESS:
    case GET_USERS_LISTINGS_SUCCESS:
    case GET_LISTINGS_SUCCESS:
      return false

    default:
      return pendingState
  }
}
