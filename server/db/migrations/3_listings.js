exports.up = knex =>
  knex.schema.createTable('listings', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('description', 3000)
    table.string('image_url', 3000)
    table.string('location')
    table.integer('user_id').references('users.id')
    table.integer('category_id').references('categories.id')
  })

exports.down = knex => knex.schema.dropTable('listings')
