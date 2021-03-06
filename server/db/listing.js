const connection = require('./connection')

function getListings (db = connection) {
  return db('listings')
    .join('categories', 'listings.category_id', 'categories.id')
    .join('users', 'listings.user_id', 'users.id')
    .select('listings.id as id', 'listings.name as name', 'listings.image_url as imageUrl', 'listings.location as location', 'listings.user_id as userId', 'listings.category_id as categoryId', 'categories.name as category', 'users.image_url as userImage', 'listings.taken as taken')
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
      'listings.taken as taken',
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
    .returning('id')
}

function updateListingById (id, listing, db = connection) {
  const { name, description, location, imageUrl } = listing
  const NewDescription = JSON.stringify(description)
  const NewImageUrl = JSON.stringify(imageUrl)
  return db('listings')
    .where('id', id)
    .update({ name: name, description: NewDescription, location: location, image_url: NewImageUrl })
}

function getUsersListingsById (id, db = connection) {
  return db('users')
    .join('listings', 'users.id', 'listings.user_id')
    .where('users.id', id)
    .select('users.id as userId', 'listings.description', 'listings.name', 'listings.location', 'listings.id', 'listings.image_url as imageUrl', 'listings.taken')
}

function getUserByListingId (id, db = connection) {
  return db('listings')
    .where('id', id)
    .select('user_id as userId')
    .first()
}

function setItemToTaken (id, date, db = connection) {
  return db('listings')
    .where('id', id)
    .update({ taken: true, date_taken: date })
}

module.exports = {
  getListings,
  getListingsById,
  deleteListingsById,
  addListing,
  updateListingById,
  getUsersListingsById,
  getUserByListingId,
  setItemToTaken
}
