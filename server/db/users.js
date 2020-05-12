const connection = require('./connection')

const { generateHash } = require('authenticare/server')

module.exports = {
  createUser,
  userExists,
  getUserByName
}

function createUser (user, db = connection) {
  return userExists(user.username, db)
    .then(exists => {
      if (exists) {
        return Promise.reject(new Error('Email Taken'))
      }
    })
    .then(() => generateHash(user.password))
    .then(passwordHash => {
      const { firstName, lastName, emailAddress, phoneNumber, location, username, imageUrl } = user
      var address = location.slice(0, -5)
      return db('users').insert({ first_name: firstName, last_name: lastName, email: emailAddress, phone_number: phoneNumber, username: username, hash: passwordHash, location: address, image_url: imageUrl })
    })
}

function userExists (username, db = connection) {
  return db('users')
    .count('id as n')
    .where('username', username)
    .then(count => {
      return count[0].n > 0
    })
}

function getUserByName (username, db = connection) {
  return db('users')
    .where('username', username)
    .first()
}

