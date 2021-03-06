const env = require('../../tests/server/db/test-enviroment')
const db = require('./listing')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

test('test getListings function return test database', () => {
  const expected = 3

  return db.getListings(testDb).then((listings) => {
    const actual = listings.length
    expect(actual).toBe(expected)
  })
})

test('test getListings function return with the name we want', () => {
  const expected = 'Soccer Ball'

  return db.getListings(testDb).then((listings) => {
    const actual = listings[0].name
    expect(actual).toBe(expected)
  })
})

describe('getListingById tests', () => {
  it('test getListingsById function return with the correct user email', () => {
    const expected = 'john@gmail.com'

    return db.getListingsById(1, testDb).then((listing) => {
      const actual = listing[0].userEmail
      expect(actual).toBe(expected)
    })
  })

  it('test getListingsById function return with the correct user first name', () => {
    const expected = 'Mathias'

    return db.getListingsById(2, testDb).then((listing) => {
      const actual = listing[0].userFirstName
      expect(actual).toBe(expected)
    })
  })

  it('test getListingsById function return with the correct user listing name', () => {
    const expected = 'Ladder'

    return db.getListingsById(2, testDb).then((listing) => {
      const actual = listing[0].name
      expect(actual).toBe(expected)
    })
  })
})

describe('deleteListingsById tests', () => {
  it('test that delete was successful', () => {
    return db.deleteListingsById(1, testDb).then(result => {
      expect(result).toBeTruthy()
    })
  })

  it('test that a listing was deleted', () => {
    return db.deleteListingsById(1, testDb)
      .then(() => {
        return db.getListings(testDb).then(listings => {
          const actual = listings
          expect(actual).toHaveLength(2)
        })
      })
  })
})

test('getUserByListingId returns the user id from a listing', () => {
  return db.getUserByListingId(3, testDb)
    .then(idObj => {
      expect(idObj.userId).toBe(1)
    })
})
