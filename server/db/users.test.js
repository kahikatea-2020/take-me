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
      console.log('users')
      expect(users[0]).toBe(3)
    })
})
