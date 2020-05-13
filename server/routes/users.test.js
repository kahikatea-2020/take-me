const server = require('../server')
const request = require('supertest')

jest.mock('../db/profiles', () => {
  return {
    getUserById: (id) => {
      return Promise.resolve({
        username: 'test',
        firstName: 'test1',
        lastName: 'testsurname',
        imageUrl: 'test.jpg',
        location: 'utopia'
      })
    }
  }
})

jest.mock('authenticare/server', () => {
  return {
    getTokenDecoder: () => {
      return (req, res, next) => {
        req.user = {
          id: 1,
          username: 'test',
          first_name: 'tester',
          last_name: 'testname',
          email: 'test@test.com',
          phone_number: 'testnum',
          image_url: 'test.jpg',
          location: 'test-land'
        }
        next()
      }
    },
    applyAuthRoutes: () => {
      return true
    }
  }
})

test('GET on users/:id returns user object', () => {
  return request(server)
    .get('/api/v1/users/3')
    .then(res => {
      expect(Object.keys(res.body)).toHaveLength(5)
      expect(res.body.location).toBe('utopia')
    })
})

test('GET on getuser runs getTokenDecoder and returns user object', () => {
  return request(server)
    .get('/api/v1/users/getuser')
    .then(res => {
      expect(Object.keys(res.body)).toHaveLength(5)
      expect(res.body.location).toBe('utopia')
    })
})
