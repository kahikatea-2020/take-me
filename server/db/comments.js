const connection = require('./connection')

function getCommentsById (id, db = connection) {
  return db('q_and_a')
    .join('users', 'q_and_a.user_id', 'users.id')
    .where('q_and_a.listing_id', id)
    .select('q_and_a.id as id',
      'q_and_a.comment as comment',
      'q_and_a.date as date',
      'q_and_a.user_id as userId',
      'users.first_name as userFirstName',
      'users.image_url as userImage'
    )
}

function addComment (data, db = connection) {
  return db('q_and_a')
    .insert({
      date: data.date,
      comment: data.comment,
      user_id: data.userId,
      listing_id: data.listingId
    })
    .catch(err => console.log(err.message))
}

module.exports = {
  getCommentsById,
  addComment
}
