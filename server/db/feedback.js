const connection = require('./connection')

module.exports = {
  getUserFeedback,
  addFeedback
}

function getUserFeedback (id, db = connection) {
  return db('users')
    .join('users', 'feedback.user_id', 'users.id')
    .where('feedback.users_id', id)
    .select('feedback.id as id',
      'feedback.comment as comment',
      'feedback.date as date',
      'feedback.user_id as userId'
    )
}

function addFeedback (data, db = connection) {
  return db('feedback')
    .insert({
      date: data.date,
      comment: data.comment,
      user_id: data.userId
    })
    .catch(err => console.log(err.message))
}

function deleteFeedback (id, db = connection) {
  return db('feedback')
    .where({ 'feedback.users_id', id })
    .del()
}