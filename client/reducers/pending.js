import {
  GET_LISTINGS_PENDING,
  GET_LISTINGS_SUCCESS,
  GET_USERS_LISTINGS_SUCCESS,
  GET_USERS_LISTINGS_PENDING
} from '../actions/listings'

import {
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  GET_USER_PENDING,
  GET_USER_SUCCESS
} from '../actions/users'

import {
  GET_CATEGORIES_PENDING,
  GET_CATEGORIES_SUCCESS
} from '../actions/categories'

import { ERROR } from '../actions/error'

export default function pendingReducer (pendingState = false, action) {
  switch (action.type) {
    case LOGIN_PENDING:
    case GET_USERS_LISTINGS_PENDING:
    case GET_LISTINGS_PENDING:
    case GET_USER_PENDING:
    case GET_CATEGORIES_PENDING:
      return true

    case LOGIN_SUCCESS:
    case GET_USERS_LISTINGS_SUCCESS:
    case GET_LISTINGS_SUCCESS:
    case GET_USER_SUCCESS:
    case GET_CATEGORIES_SUCCESS:
    case ERROR:
      return false

    default:
      return pendingState
  }
}
