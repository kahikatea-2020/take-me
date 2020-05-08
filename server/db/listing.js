const connection = require('./connection')

function getListings (db = connection) {
  return db('listings')
    .select('listings.id as id', 'listings.name as name', 'listings.image_url as imageUrl', 'listings.location as location', 'listings.user_id as userId', 'listings.category_id as categoryId')
}

function getListingsById (id, db = connection) {
  return db('listings')
    .join('users', 'listings.user_id', 'users.id')
    .where('listings.id', id)
    .select('listings.id as id',
      'listings.name as name',
      'listings.description as description',
      'listings.image_url as imageUrl',
      'listings.user_id as userId',
      'listings.category_id as categoryId',
      'listings.location as location',
      'users.username as username',
      'users.first_name as userFirstName',
      'users.last_name as userLastName',
      'users.image_url as userImage',
      'users.phone_number as userPhoneNumber',
      'users.email as userEmail',
    )
}

module.exports = {
  getListings,
  getListingsById
}
