exports.up = knex =>
  knex.schema.createTable('q_and_a', (table) => {
    table.increments('id').primary()
    table.text('comment')
    table.string('date')
    table.integer('user_id').references('users.id')
    table.integer('listing_id').references('listings.id')
  })

exports.down = knex => knex.schema.dropTable('q_and_a')
