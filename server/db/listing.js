const connection = require('./connection')

function getListings (db = connection) {
  return db('listings')
}

function getListingsById (id, db = connection) {
  return db('listings')
    .where('id', id)
    .select('listings.id as id',
    'listings.name as name',
    'listings.description as description',
    'listings.image_url as imageUrl',
    'listings.user_id as userId',
    'listings.category_id as categoryId')
}

module.exports = {
  getListings,
  getListingsById
}
