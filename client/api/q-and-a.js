import request from 'superagent'

export function getCommentsById (id) {
  return request.get(`/api/v1/comments/${id}`)
    .then(res => res.body)
}

export function addComment (commentObj) {
  return request.post('/api/v1/comments/add')
    .send(commentObj)
    .then(res => res.body)
}
