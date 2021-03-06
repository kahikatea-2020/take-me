const request = require('supertest')
const server = require('../server')

jest.mock('../db/categories', () => {
  return {
    getAllCategory: () => {
      return Promise.resolve([
        { id: 1, name: 'Clothing' },
        { id: 2, name: 'Electronics' },
        { id: 3, name: 'Furniture' },
        { id: 4, name: 'Homeware & Applicances' },
        { id: 5, name: 'Automotive' }
      ])
    },
    getListingsByCategoryId: () => {
      return Promise.resolve([
        {
          id: 1,
          name: 'test name',
          description: JSON.stringify(['test desc']),
          location: 'test location',
          imageUrl: JSON.stringify(['test image']),
          user_id: 2,
          category_id: 3
        },
        {
          id: 2,
          name: 'test name 2',
          description: JSON.stringify(['test desc 2']),
          location: 'test location 2',
          imageUrl: JSON.stringify(['test image 2']),
          user_id: 2,
          category_id: 3
        }
      ])
    }
  }
})

test('Get /api/v1/categories returns an array of categories', () => {
  return request(server)
    .get('/api/v1/categories')
    .then(res => {
      expect(res.body.length).toBe(5)
      expect(res.body[1].id).toBe(2)
      expect(res.body[1].name).toBe('Electronics')
    })
})

test('Get /api/v1/categories/id returns an array of list based on category ID', () => {
  return request(server)
    .get('/api/v1/categories/1')
    .then(res => {
      expect(res.body).toHaveLength(2)
      expect(res.body[1].name).toBe('test name 2')
    })
})
