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
    // getListingsByCategoryId: () => {
    //   return Promise.resolve([
    //     {
    //       id: 3,
    //       name: 'Infant Shoes',
    //       description: JSON.stringify([
    //         'Infant shoes in great condition',
    //         'My child has outgrown already',
    //         'Contact me below if interested'
    //       ]),
    //       location: 'Auckland',
    //       image_url: JSON.stringify(['v1588967372/infantshoes_ohcade.jpg']),
    //       user_id: 4,
    //       category_id: 1
    //     },
    //     {
    //       id: 4,
    //       name: 'Broken Galaxy s3',
    //       description: JSON.stringify([
    //         'Broken - screen cracked',
    //         'Got a new phone and dont want to spend for fixing',
    //         'Good for parts'
    //       ]),
    //       location: 'Auckland',
    //       image_url: JSON.stringify(['v1588967332/brokenphone_q5dkym.jpg']),
    //       user_id: 3,
    //       category_id: 1
    //     },
    //     {
    //       id: 13,
    //       name: 'Best shirt ever',
    //       description: JSON.stringify([
    //         'Had this really cool shirt when I was young.',
    //         'Sad to let it go but it wont fit me anymore',
    //         'Free to someone who wants to spread the Don Energy'
    //       ]),
    //       location: 'Auckland',
    //       image_url: JSON.stringify(['v1588967332/bigdonshirt_xg8gzu.jpg']),
    //       user_id: 2,
    //       category_id: 1
    //     }
    // ])
  }
}
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

// test('Get /api/v1/categories/id returns an array of list base on category ID', () => {
//   return request(server)
//     .get('/api/v1/categories/1')
//     .then(res => {
//       expect(res.body.length).toBe(3)
//     })
// })
