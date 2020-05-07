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
    firstName: 'Mathias',
    lastName: 'Bast',
    emailAddress: 'mathsias@gmail.com',
    phoneNumber: '0211380545',
    password: 'hfsduhfush',
    location: 'Earth'
  }

  return db.createUser(newUser, testDb)
    .then(users => {
      expect(users[0]).toBe(3)
    })
})

test('test user exists function', () => {
  const email = 'mathias@gmail.com'

  return db.userExists(email, testDb)
    .then(res => {
      expect(res).toBeTruthy()
    })
})

test('test user exists function with a new email', () => {
  const email = 'NewEmail@gmail.com'

  return db.userExists(email, testDb)
    .then(res => {
      expect(res).toBeFalsy()
    })
})

test('test get user by email function', () => {
  const email = 'mathias@gmail.com'

  return db.getUserById(email, testDb)
    .then(res => {
      expect(res.first_name).toBe('Mathias')
      expect(res.location).toBe('Gisborne')
    })
})

test('test get user by email function', () => {
  const email = 'NapTime@gmail.com'

  return db.getUserById(email, testDb)
    .then(res => {
      expect(res).toBe(undefined)
    })
})
