import request from 'superagent'

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

export function getUsersListings (id) {
  return request.get(`/api/v1/listings/user/${id}`)
    .then(res => res.body)
}
