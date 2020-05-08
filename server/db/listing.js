const connection = require('./connection')

function getListings (db = connection) {
  return db('listings')
    .select('listings.id as id', 'listings.name as name', 'listings.image_url as imageUrl', 'listings.user_id as userId', 'listings.category_id as categoryId')
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
      'users.first_name as userFirstName',
      'users.last_name as userLastName',
      'users.image_url as userImage',
      'users.phone_number as userPhoneNumber',
      'users.email as userEmail',
      'users.location as userLocation')
}

function updateListingById (id, listing, db = connection) {
  return db('listings')
    .where('id', id)
    .update(listing)
}

module.exports = {
  getListings,
  getListingsById,
  updateListingById
}
