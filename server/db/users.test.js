const env = require('../../tests/test-enviroment')
const db = require('./users')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

test('test create user function', () => {
  const newUser = {
    username: 'KingKong',
    firstName: 'Mathias',
    lastName: 'Bast',
    emailAddress: 'mathsias@gmail.com',
    phoneNumber: '0211380545',
    password: 'hfsduhfush',
    location: 'Earth'
  }

  return db.createUser(newUser, testDb)
    .then(users => {
      expect(users[0]).toBe(4)
    })
})

test('test user exists function', () => {
  const username = 'm-dog'

  return db.userExists(username, testDb)
    .then(res => {
      expect(res).toBeTruthy()
    })
})

test('test user exists function with a new username', () => {
  const username = 'The lord Mathias The Great The II, Humble OverLord Forsure'

  return db.userExists(username, testDb)
    .then(res => {
      expect(res).toBeFalsy()
    })
})

test('test get user by username function', () => {
  const username = 'm-dog'

  return db.getUserByName(username, testDb)
    .then(res => {
      expect(res.first_name).toBe('Mathias')
      expect(res.location).toBe('Gisborne')
    })
})

test('test get user by username with a bad username', () => {
  const username = 'm-dsog'

  return db.getUserByName(username, testDb)
    .then(res => {
      expect(res).toBe(undefined)
    })
})
