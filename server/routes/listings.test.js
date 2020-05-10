const server = require('../server')
const request = require('supertest')

jest.mock('../db/listing', () => {
  return {
    getListings: () => {
      return Promise.resolve([
        {
          id: 1,
          listing: 'Banana',
          imageUrl: JSON.stringify(['hello', 'I\'m an imageUrl of Banana'])
        },
        {
          id: 2,
          listing: 'Bike',
          imageUrl: JSON.stringify(['hello', 'I\'m an imageUrl of Bike'])
        },
        {
          id: 3,
          listing: 'old TV',
          imageUrl: JSON.stringify(['hello', 'I\'m an imageUrl of old tv'])
        },
        {
          id: 4,
          listing: 'Annoying Child',
          imageUrl: JSON.stringify(['hello', 'I\'m an imageUrl of annoying child'])
        }
      ])
    },
    getListingsById: () => {
      return Promise.resolve([
        {
          id: 1,
          name: 'test listing',
          userFirstName: 'user name',
          description: JSON.stringify(['hello', 'I\'m a description']),
          imageUrl: JSON.stringify(['hello', 'I\'m an imageUrl array'])
        }
      ])
    },
    deleteListingsById: (id) => {
      if (id === 2) {
        return Promise.resolve(true)
      }
      if (id !== 2) {
        return Promise.resolve(false)
      }
    },
    updateListingById: (id, listing) => {
      if (id === 2) {
        return Promise.resolve(1)
      } else {
        return Promise.resolve(0)
      }
    },
    addListing: () => {
      return Promise.resolve([3])
    },
    getUserByListingId: () => {
      return Promise.resolve({ userId: 2 })
    }
  }
})

jest.mock('authenticare/server', () => {
  return {
    getTokenDecoder: () => {
      return (req, res, next) => {
        req.user = {
          id: 2
        }
        next()
      }
    },
    applyAuthRoutes: () => {
      return true
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
      expect(res.status).toBe(200)
    })
})

test('POST /new adds and redirects', () => {
  return request(server)
    .post('/api/v1/listings/new')
    .send({ name: 'testname', description: JSON.stringify(['hello']), imageUrl: JSON.stringify(['this is a URL']), userID: 2, categoryId: 2 })
    .then((res) => {
      expect(res.status).toBe(200)
      expect(res.body.id).toBe(3)
    })
})

describe('PUT route', () => {
  it('uses token encoder and updates correct listing if authenticated', () => {
    const newListing = {
      name: 'testlisting',
      description: '["a great test]"',
      location: 'test place',
      imageUrl: '["test.jpg"]'
    }
    return request(server)
      .put('/api/v1/listings/2')
      .send(newListing)
      .then(res => {
        expect(res.status).toBe(200)
      })
  })
})
