exports.up = knex =>
  knex.schema.createTable('listings', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.text('description', 'longtext')
    table.text('image_url')
    table.string('location')
    table.integer('user_id').references('users.id')
    table.integer('category_id').references('categories.id')
  })

exports.down = knex => knex.schema.dropTable('listings')
