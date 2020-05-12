const connection = require('./connection')

module.exports = {
  getUserById
}

function getUserById (id, db = connection) {
  return db('users')
    .where('id', id)
    .select('id', 'username', 'image_url as imageUrl', 'location', 'first_name as firstName', 'last_name as lastName', 'email', 'phone_number as phoneNumber')
    .first()
}
