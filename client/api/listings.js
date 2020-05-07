import request from 'superagent'

export function getListings () {
  return request.get('/api/v1/listings')
    .then(res => res.body)
}

export function getListingById (id) {
  return request.get(`/api/v1/listings/${id}`)
    .then(res => res.body[0])
}
