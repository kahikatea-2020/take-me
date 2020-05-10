import request from 'superagent'
import { getEncodedToken } from 'authenticare/client'

export function getListings () {
  return request.get('/api/v1/listings')
    .then(res => res.body)
}

export function getListingById (id) {
  return request.get(`/api/v1/listings/${id}`)
    .then(res => res.body[0])
}

export function addListing (listing) {
  return request.post('/api/v1/listings/new')
    .send(listing)
    .then(res => res.body.id)
}

export function deleteListingById (id) {
  return request.delete(`/api/v1/listings/${id}`)
    .set({ 'Accept': 'application/json' })
    .set({ 'Authorization': `Bearer ${getEncodedToken()}` })
    .then(res => res.status)
    .catch(err => console.log(err.message))
    
  }

  export function getUsersListings (id) {
    return request.get(`/api/v1/listings/user/${id}`)
      .set({ 'Accept': 'application/json' })
      .set({ 'Authorization': `Bearer ${getEncodedToken()}` })
      .then(res => res.body)
    }
    
export function editListing (id, listing) {
  return request.post(`/api/v1/listings/${id}`)
    .set({ 'Authorization': `Bearer ${getEncodedToken()}` })
    .set({ 'Accept': 'application/json' })
    .send(listing)
    .then(res => res.body[0])
    .catch(err => console.log(err))
}

