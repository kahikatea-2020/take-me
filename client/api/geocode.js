import request from 'superagent'

export function geocode (location) {
  return request.get(`https://geocode.search.hereapi.com/v1/geocode?q=${location}&apiKey=uN1WhcgRWJ65oDALDq61ckz9Cig5UWu5KzXOiDhvA1I`)
    .then(res => {
      return res.body
    })
    .catch(err => console.log(err.message))
}
