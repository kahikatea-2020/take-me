const connection = require('./connection')

function getAllCategory (db = connection) {
  return db('categories')
}

function getListingsByCategoryId (categoryId, db = connection) {
  return db('listings')
    .where('listings.category_id', categoryId)
    .select('listings.id as id',
      'listings.name as name',
      'listings.description as description',
      'listings.image_url as imageUrl',
      'listings.user_id as userId',
      'listings.category_id as categoryId',
      'listings.location as location')
    .then(listings => {
      if (listings.length === 0) return null
      return listings
    })
    .catch(err => {
      console.error(err)
    })
}

module.exports = {
  getAllCategory,
  getListingsByCategoryId
}
