const env = require('../../tests/server/db/test-enviroment')
const db = require('./profiles')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

describe('getUserById', () => {
  it('should return a user object when passed an id', () => {
    const testId = 3
    return db.getUserById(testId, testDb)
      .then(res => {
        expect(Object.keys(res)).toHaveLength(5)
        expect(res.location).toBe('Auckland')
        expect(res.firstName).toBe('Pat')
      })
  })
  it('should return undefined if the user doesn\'t exist', () => {
    const testId = 7
    return db.getUserById(testId, testDb)
      .then(res => {
        expect(res).toBe(undefined)
      })
  })
})
