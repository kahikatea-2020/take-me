const server = require('../server')
const request = require('supertest')

jest.mock('../db/listing', () => {
  return {
    getListings: () => {
      return Promise.resolve([
        {
          id: 1,
          listing: 'Banana'
        },
        {
          id: 2,
          listing: 'Bike'
        },
        {
          id: 3,
          listing: 'old TV'
        },
        {
          id: 4,
          listing: 'Annoying Child'
        }
      ])
    },
    getListingsById: () => {
      return Promise.resolve([
        {
          id: 1,
          name: 'test listing',
          userFirstName: 'user name',
          description: JSON.stringify(['hello', 'I\'m a description'])
        }
      ])
    },
    deleteListingsById: (id) => {
      if (id === 2) {
        return Promise.resolve(1)
      }
      if (id !== 2) {
        return Promise.resolve(0)
      }
    },
    updateListingById: (id, listing) => {
      if (id === '2') {
        return Promise.resolve(1)
      }
      if (id === '7') {
        return Promise.resolve(0)
      }
    }
  }
})

test('GET route getting all listings', () => {
  return request(server)
    .get('/api/v1/listings')
    .then(res => {
      expect(res.body.length).toBe(4)
      expect(res.body[0].listing).toBe('Banana')
      expect(res.body[2].id).toBe(3)
    })
})

test('GET route getting correct listing', () => {
  return request(server)
    .get('/api/v1/listings/1')
    .then(res => {
      expect(res.body.length).toBe(1)
      expect(res.body[0].name).toBe('test listing')
      expect(res.body[0].userFirstName).toBe('user name')
    })
})

test('Delete route deleting successfully', () => {
  return request(server)
    .delete('/api/v1/listings/2')
    .then((res) => {
      expect(res.status).toBe(302)
    })
})

test('POST /new adds and redirects', () => {
  request(server)
    .post('/api/v1/listings/new')
    .send({ name: 'testname', description: ['hello'], imageUrl: 'this is a URL', userID: 2, categoryId: 2 })
    .expect(200)
})
