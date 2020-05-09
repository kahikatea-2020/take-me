import { showError } from './error'
import * as api from '../api/users'

export const GET_USER_SUCCESS = 'GET_USER_SUCCESS'

export function getUserSuccess (details) {
  return {
    type: GET_USER_SUCCESS,
    details
  }
}

export function getUserDetails (username) {
  return dispatch => {
    return api.getUserDetails(username)
      .then(details => {
        dispatch(getUserSuccess(details))
      })
      .catch(err => dispatch(showError(err.message)))
  }
}
