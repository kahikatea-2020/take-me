exports.up = knex =>
  knex.schema.createTable('feedback', (table) => {
    table.increments('id').primary()
    table.text('comment')
    table.string('date')
    table.integer('user_id').references('users.id')
  })

exports.down = knex => knex.schema.dropTable('feedback')
