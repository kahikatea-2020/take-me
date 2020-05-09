import { showError } from './error'
import * as api from '../api/users'

export const GET_USER_SUCCESS = 'GET_USER_SUCCESS'
export const LOGIN_PENDING = 'LOGIN_PENDING'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'

export function getUserSuccess (details) {
  return {
    type: GET_USER_SUCCESS,
    details
  }
}

export function getUserDetails () {
  return dispatch => {
    return api.getUserDetails()
      .then(details => {
        dispatch(getUserSuccess(details))
      })
      .catch(err => dispatch(showError(err.message)))
  }
}

export function userPending () {
  return {
    type: LOGIN_PENDING
  }
}

export function userSuccess () {
  return {
    type: LOGIN_SUCCESS
  }
}
