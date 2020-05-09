const env = require('../../tests/server/db/test-enviroment')
const db = require('./categories')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

test('db.getAllCategory to return an array 0f 9 categories', () => {
  const expected = 9

  return db.getAllCategory(testDb)
    .then(categories => {
      const actual = categories.length
      expect(actual).toBe(expected)
    })
})

test('db.getListingByCategoryId returns an array of objects containing listing by category_id with right length', () => {
  const expected = 1
  const id = 1

  return db.getListingsByCategoryId(id, testDb)
    .then(listings => {
      const actual = listings.length
      expect(actual).toBe(expected)
    })
})

test('db.getListingsByCategoryId returns null if category id number is invalid', () => {
  return db.getListingsByCategoryId(12, testDb)
    .then(result => {
      expect(result).toBeNull()
    })
})
