exports.seed = (knex) =>
  knex('categories').del()
    .then(() => knex('users').del())
    .then(() => knex('listings').del())
    .then(() =>
      knex('categories').insert([
        { id: 1, name: 'Clothing' },
        { id: 2, name: 'Electronics' },
        { id: 3, name: 'Furniture' },
        { id: 4, name: 'Homeware & Applicances' },
        { id: 5, name: 'Automotive' },
        { id: 6, name: 'Garden' },
        { id: 7, name: 'Sports' },
        { id: 8, name: 'Health & Beauty' },
        { id: 9, name: 'Music & Instruments' }
      ]))
    .then(() =>
      knex('users').insert([
        { id: 1, username: 'johnS', first_name: 'John', last_name: 'Sengson', email: 'john@gmail.com', phone_number: '021-435-1234', image_url: 'john.jpg', hashed_password: '5F4DCC3B5AA765D61D8327DEB882CF99', location: 'Auckland' },
        { id: 2, username: 'm-dog', first_name: 'Mathias', last_name: 'Bast', email: 'mathias@gmail.com', phone_number: '021-352-1234', image_url: 'mathias.jpg', hashed_password: '5F4DCC3B5AA765D61D8327DEB882CF99', location: 'Gisborne' }
      ]))
    .then(() =>
      knex('listings').insert([
        {
          id: 1,
          name: 'Soccer Ball',
          description: JSON.stringify([
            'Moving house and we don\'t use this ball anymore',
            'Free to a good home!'
          ]),
          location: 'Auckland',
          image_url: '/soccer_ball.jpg',
          user_id: 1,
          category_id: 7
        },
        {
          id: 2,
          name: 'Ladder',
          description: JSON.stringify([
            '5 step ladder',
            'I\'ve only used it like twice',
            'Perfect working condition, contact me for pick up times'
          ]),
          location: 'Auckland',
          image_url: '/ladder.jpg',
          user_id: 2,
          category_id: 2
        }
      ]))
