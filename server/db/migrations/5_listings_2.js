exports.up = knex =>
  knex.schema.table('listings', (table) => {
    table.boolean('taken')
    table.string('date_taken')
  })

exports.down = knex => knex.schema.table('listings', (table) => {
  table.dropColumn('taken')
  table.dropColumn('date_taken')
})
