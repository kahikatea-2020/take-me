const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports ={
  addListing: addListing,
}

function addListing (data, db = connection) {
  return db('listings').insert({
    name: data.name,
    description: data.description,
    image_url: data.imageUrl,
    user_id: data.userId,
    category_id: data.categoryId
  })
}