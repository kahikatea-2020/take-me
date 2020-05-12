import request from 'superagent'
import { getEncodedToken } from 'authenticare/client'

export function getUserById (id) {
  return request.get(`/api/v1/users/${id}`)
    .then(res => res.body)
}

export function getUserDetails () {
  return request.get(`/api/v1/users/getuser`)
    .set({ 'Authorization': `Bearer ${getEncodedToken()}` })
    .then(res => {
      return res.body
    })
}

export function editUser (user) {
  return request.put('/api/v1/users/edit')
    .send(user)
    .set({ 'Authorization': `Bearer ${getEncodedToken()}` })
    .then(res => {
      console.log(res)
    })
}
