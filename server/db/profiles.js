const connection = require('./connection')

module.exports = {
  getUserById,
  editUser
}

function getUserById (id, db = connection) {
  return db('users')
    .where('id', id)
    .select('id', 'username', 'image_url as imageUrl', 'location', 'first_name as firstName', 'last_name as lastName', 'email', 'phone_number as phoneNumber')
    .first()
}

function editUser (user, db = connection) {
  const { firstName, lastName, emailAddress, phoneNumber, imageUrl, location } = user
  return db('users')
    .where('id', user.id)
    .update({
      first_name: firstName,
      last_name: lastName,
      email: emailAddress,
      phone_number: phoneNumber,
      image_url: imageUrl,
      location: location
    })
    .then(id => console.log(id))
}
