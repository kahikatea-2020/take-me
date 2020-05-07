const connection = require('./connection')

function getListings (db = connection) {
  return db('listings')
}

module.exports = {
  getListings
}
