import request from 'superagent'

export function getUserById (id) {
  return request.get(`/api/v1/users/${id}`)
    .then(res => res.body)
}
