const connection = require('./connection')

module.exports = {
  getUserById,
  getUserDetails
}

function getUserById (id, db = connection) {
  return db('users')
    .where('id', id)
    .select('username', 'image_url as imageUrl', 'location', 'first_name as firstName', 'last_name as lastName')
    .first()
}

function getUserDetails (username, db = connection) {
  return db('users')
    .where('username', username)
    .first()
}
