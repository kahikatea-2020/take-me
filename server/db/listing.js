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
      'users.email as userEmail'
    )
}

function deleteListingsById (id, db = connection) {
  return db('listings').where('id', id)
    .del()
}

function addListing (data, db = connection) {
  const description = JSON.stringify(data.description)
  const imageUrl = JSON.stringify(data.imageUrl)
  return db('listings').insert({
    name: data.name,
    description: description,
    image_url: imageUrl,
    user_id: data.userId,
    category_id: data.categoryId,
    location: data.location
  })
    .then(id => {
      return id
    })
}

function updateListingById (id, listing, db = connection) {
  return db('listings')
    .where('id', id)
    .update(listing)
}

function getUsersListingsById (id, db = connection) {
  return db('users')
    .join('listings', 'users.id', 'listings.user_id')
    .where('users.id', id)
    .select('users.id', 'listings.description', 'listings.name', 'listings.location', 'listings.id', 'listings.image_url as imageUrl')
}

module.exports = {
  getListings,
  getListingsById,
  deleteListingsById,
  addListing,
  updateListingById,
  getUsersListingsById
}
