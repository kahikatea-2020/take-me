import request from 'superagent'

export function getFeedbackById (id) {
  return request.get(`/api/v1/feedback/${id}`)
    .then(res => res.body)
}

export function addFeedback (commentObj) {
  return request.post('/api/v1/feedback/add')
    .send(commentObj)
    .then(res => res.body)
}
