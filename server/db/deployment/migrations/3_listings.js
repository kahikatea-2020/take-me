exports.up = knex =>
  knex.schema.createTable('listings', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.text('description')
    table.text('image_url')
    table.string('location')
    table.integer('user_id').references('users.id')
    table.integer('category_id').references('categories.id')
  })

exports.down = knex => knex.schema.dropTable('listings')

exports.up = function (knex, Promise) {
  const createQuery = `CREATE TABLE listings (
    id int SERIAL PRIMARY KEY NOT NULL ,
    id int NOT NULL UNIQUE,
    name text,
    description text,
    image_url text,
    location text,
    INTEGER text,
    INTEGER text,
    username text,
  )`
  return knex.raw(createQuery)
}

exports.down = function (knex, Promise) {
  const dropQuery = 'DROP TABLE <examples>'
  return knex.raw(dropQuery)
}
