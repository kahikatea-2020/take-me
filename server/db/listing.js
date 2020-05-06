const connection = require('./connection')

function getListings (db = connection) {
  return db('categories')
}

module.exports = {
  getListings
}
