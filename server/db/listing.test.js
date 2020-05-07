const env = require('../../tests/test-enviroment')
const db = require('./listing')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

test('test getListings function return test database', () => {
  const expected = 2

  return db.getListings(testDb)
    .then(listings => {
      const actual = listings.length
      expect(actual).toBe(expected)
    })
})

test('test getListings function return with the name we want', () => {
  const expected = 'Soccer Ball'

  return db.getListings(testDb)
    .then(listings => {
      const actual = listings[0].name
      expect(actual).toBe(expected)
    })
})