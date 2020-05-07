const connection = require('./connection')

const getListings = (db = connection) => (db('listings'))

module.exports = {
  getListings
}
