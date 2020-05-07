const env = require('../../tests/test-enviroment')
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
