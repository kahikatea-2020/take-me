import request from 'superagent'

export function getCommentsById (id) {
  return request.get(`/api/v1/comments/${id}`)
    .then(res => res)
}
