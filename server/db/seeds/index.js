exports.seed = (knex) =>
  knex('q_and_a').del()
    .then(() => knex('listings').del())
    .then(() => knex('users').del())
    .then(() => knex('categories').del())
    .then(() =>
      knex('categories').insert([
        { name: 'Clothing & Shoes' },
        { name: 'Electronics' },
        { name: 'Furniture & Home Décor' },
        { name: 'Homeware & Applicances' },
        { name: 'Automotive' },
        { name: 'Garden' },
        { name: 'Sports' },
        { name: 'Health & Beauty' },
        { name: 'Music & Instruments' },
        { name: 'Entertainment' },
        { name: 'Miscellaneous' }
      ]))
    .then(() =>
      knex('users').insert([
        { username: 'p-man', first_name: 'Pat', last_name: 'Lim', email: 'pat@gmail.com', phone_number: '0213526789', image_url: 'v1588967373/pat_cevccf.jpg', hash: '$argon2id$v=19$m=65536,t=2,p=1$W1Ve81HPpMFK934+EsYEJw$Fe3biM6runI33ZFDy9f0Gl8mNG5Lsev5f9D/IQcHcdk', location: 'Mt Eden, Auckland' }
      ]))
    .then(() =>
      knex('listings').insert([
        {
          id: 1,
          name: 'Soccer Ball',
          description: JSON.stringify([
            'Moving house and we don\'t use this ball anymore.',
            'Free to a good home!'
          ]),
          location: 'Pukekohe, Auckland',
          image_url: JSON.stringify(['v1588967374/soccer_ball_q9nnef.jpg']),
          user_id: 1,
          category_id: 7,
          taken: false,
          date_taken: '12/05/2020'
        },
        {
          id: 2,
          name: 'Ladder',
          description: JSON.stringify([
            '5 step ladder.',
            'I\'ve only used it like twice.',
            'Perfect working condition, contact me for pick up times.'
          ]),
          location: 'Johnsonville, Wellington',
          image_url: JSON.stringify(['v1588967373/ladder_s9wtoj.jpg']),
          user_id: 1,
          category_id: 6,
          taken: false,
          date_taken: '12/05/2020'
        }
      ]))
    .then(() =>
      knex('q_and_a').insert([
        {
          comment: 'Does this come with the case?',
          date: 'Tue May 12 2020 11:03:40 GMT+1200 (New Zealand Standard Time)',
          user_id: 1,
          listing_id: 1
        }
      ]))
