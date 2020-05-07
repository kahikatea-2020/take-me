const connection = require('./connection')

function getAllCategory (db = connection) {
  return db('categories')
}


module.exports = {
  getAllCategory
}