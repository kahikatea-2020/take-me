const knex = require('knex')

const testConfig = require('../../../server/db/knexfile').test

module.exports = {
  // Test database connection
  getTestDb: () => knex(testConfig),

  // Create a separate in-memory database before each test
  initialise: db =>
    db.migrate.latest()
      .then(() => db.seed.run()),

  // Destroy the database connection after each test
  cleanup: db => db.destroy()
}
