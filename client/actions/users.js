import * as api from '../api/users'

export const GET_USER_SUCCESS = 'GET_USER_SUCCESS'

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
  }
}
