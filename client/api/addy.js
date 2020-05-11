import request from 'superagent'

// /api/v1/addy
export function getAddress (address) {
  return request.get(`/api/v1/addy/${address}`)
    .then(res => {
      console.log(res)
    })
    .catch(err => console.log(err.message))
}
