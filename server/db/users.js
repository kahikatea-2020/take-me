const connection = require('./connection')

const { generageHash } = require('authenticare/server')

module.exports = {
  createUser,
  userExists
}

function createUser (user, db = connection) {
  return userExists(user.emailAddress, db)
    .then(exists => {
      if (exists) {
        return Promise.reject(new Error('User exists'))
      }
    })
    .then(() => generageHash(user.password))
    .then(passwordHash => {
      const { firstName, lastName, emailAddress, phoneNumber, location } = user
      return db('users').insert({ first_name: firstName, last_name: lastName, email: emailAddress, phone_number: phoneNumber, hashed_password: passwordHash, location: location, image_url: 'pat.jpg' })
    })
}

function userExists (email, db = connection) {
  return db('users')
    .count('id as n')
    .where('email', email)
    .then(count => {
      return count[0].n > 0
    })
}
