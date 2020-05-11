import request from 'superagent'

export function getCategories () {
  return request.get('/api/v1/categories')
    .then(res => {
    })
}
