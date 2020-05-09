import request from 'superagent'

export function getUserById (id) {
  return request.get(`/api/v1/users/${id}`)
    .then(res => res.body)
}

export function getUserDetails (username) {
  return request.get(`/api/v1/user/${username}`)
    .then(res => res.body)
}