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
  console.log(user)
  const { firstName, lastName, email, phoneNumber, imageUrl } = user
  return db('users')
    .where('id', user.id)
    .update({
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone_number: phoneNumber,
      image_url: imageUrl
    })
    .then(id => console.log(id))
}
