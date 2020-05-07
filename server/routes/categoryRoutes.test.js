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
    }
   }}
  )

  test('Get /api/v1/categories returns an array of categories', () => {
    return request(server)
    .get('/api/v1/categories')
    .then(res => {
      expect(res.body.length).toBe(5)
      expect(res.body[1].id).toBe(2)
      expect(res.body[1].name).toBe('Electronics')

    })
  })