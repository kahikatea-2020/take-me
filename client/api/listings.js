import request from 'superagent'

export function getListings () {
  return request.get('/api/v1/listings')
    .then(res => res.body)
}
