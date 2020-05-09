import * as api from '../api/listings'
import { showError } from './error'

export const GET_USER_SUCCESS = 'GET_USER_SUCCESS'

export function getUserSuccess (details) {
  return {
    type: GET_USER_SUCCESS,
    details
  }
}

export function getUsersDetails (username) {
  return dispatch => {
    return api.getUser(username)
      .then(details => {
        dispatch(getUserSuccess(details))
      })
      .catch(err => dispatch(showError(err.message)))
  }
}
