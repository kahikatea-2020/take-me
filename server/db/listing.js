const connection = require('./connection')

function getListings (db = connection) {
  return db('listings')
    .select('listings.id as id', 'listings.name as name', 'listings.image_url as imageUrl', 'listings.user_id as userId', 'listings.category_id as categoryId')
}

module.exports = {
  getListings
}
