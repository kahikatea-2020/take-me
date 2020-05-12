const connection = require('./connection')

module.exports = {
  getUserById,
  getUserFeedback
}

function getUserById (id, db = connection) {
  return db('users')
    .where('id', id)
    .select('id', 'username', 'image_url as imageUrl', 'location', 'first_name as firstName', 'last_name as lastName', 'email', 'phone_number as phoneNumber')
    .first()
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
