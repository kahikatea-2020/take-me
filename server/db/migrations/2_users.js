exports.up = knex =>
  knex.schema.createTable('users', (table) => {
    table.increments('id').primary()
    table.string('username')
    table.string('first_name')
    table.string('last_name')
    table.string('email')
    table.string('phone_number')
    table.string('image_url')
    table.string('hash')
    table.string('location')
  })

exports.down = knex => knex.schema.dropTable('users')
