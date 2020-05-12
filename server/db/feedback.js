const connection = require('./connection')

module.exports = {
  getUserFeedback
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

func