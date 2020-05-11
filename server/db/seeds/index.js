exports.seed = (knex) =>
  knex('listings').del()
    .then(() => knex('users').del())
    .then(() => knex('categories').del())
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
        { id: 1, username: 'johnS', first_name: 'John', last_name: 'Sengson', email: 'john@gmail.com', phone_number: '021-435-1234', image_url: 'v1588967373/john_yigtz6.jpg', hash: '5F4DCC3B5AA765D61D8327DEB882CF99', location: 'Auckland' },
        { id: 2, username: 'm-dog', first_name: 'Mathias', last_name: 'Bast', email: 'mathias@gmail.com', phone_number: '021-352-1234', image_url: 'v1588967372/mathias_eos91h.jpg', hash: '5F4DCC3B5AA765D61D8327DEB882CF99', location: 'Gisborne' },
        { id: 3, username: 'hamishT', first_name: 'Hamish', last_name: 'Tana', email: 'hamish@gmail.com', phone_number: '021-665-4287', image_url: 'v1588967348/hamishT_eiqwbd.jpg', hash: '5F4DCC3B5AA765D61D8327DEB898PHA7', location: 'Auckland' },
        { id: 4, username: 'vibes-lache', first_name: 'Lache', last_name: 'Melvin', email: 'lache@gmail.com', phone_number: '021-352-6789', image_url: 'v1588967373/lache_v5blpl.png', hash: '5F4DCC3B5AA7KGA84D8327DEB8826KL8', location: 'Nelson' },
        { id: 5, username: 'p-man', first_name: 'Pat', last_name: 'Lim', email: 'pat@gmail.com', phone_number: '021-352-6789', image_url: 'v1588967373/pat_cevccf.jpg', hash: '5F4DCC3B5AA765D61D8327DEB8826KL8', location: 'Auckland' },
        { id: 6, username: 'ElloraV', first_name: 'Ellora', last_name: 'Virtue', email: 'ellora@gmail.com', phone_number: '022-648-2546', image_url: 'v1588967348/ellora_ze8tgm.jpg', hash: '5F4DCC3YH8UJ65D61D8327DEB8826KL8', location: 'Auckland' }
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
          image_url: JSON.stringify(['v1588967374/soccer_ball_q9nnef.jpg']),
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
          location: 'Wellington',
          image_url: JSON.stringify(['v1588967373/ladder_s9wtoj.jpg']),
          user_id: 2,
          category_id: 4
        },
        {
          id: 3,
          name: 'Infant Shoes',
          description: JSON.stringify([
            'Infant shoes in great condition',
            'My child has outgrown already',
            'Contact me below if interested'
          ]),
          location: 'Auckland',
          image_url: JSON.stringify(['v1588967372/infantshoes_ohcade.jpg']),
          user_id: 4,
          category_id: 1
        },
        {
          id: 4,
          name: 'Broken Galaxy s3',
          description: JSON.stringify([
            'Broken - screen cracked',
            'Got a new phone and dont want to spend for fixing',
            'Good for parts'
          ]),
          location: 'Queenstown',
          image_url: JSON.stringify(['v1588967332/brokenphone_q5dkym.jpg']),
          user_id: 3,
          category_id: 1
        },
        {
          id: 5,
          name: 'Old Couch',
          description: JSON.stringify([
            'Moving house and no space for this couch',
            'Still in good condition',
            'Hit me up asap, currently sitting outside'
          ]),
          location: 'Waiheke Island',
          image_url: JSON.stringify(['v1588967347/couch_z4bqcd.jpg']),
          user_id: 5,
          category_id: 3
        },
        {
          id: 6,
          name: 'Ukulele',
          description: JSON.stringify([
            'Purchased so I can learn but gave up',
            'Not for me but could be for you',
            'Please contact me if interested'
          ]),
          location: 'Auckland',
          image_url: JSON.stringify(['v1588967373/ukulele_xpaknn.jpg']),
          user_id: 6,
          category_id: 9
        },
        {
          id: 7,
          name: 'Tire',
          description: JSON.stringify([
            'Was cleaning the garage and found this',
            'Sold my car so no need for this',
            'Not sure about the size but we can organise for you to check'
          ]),
          location: 'Auckland',
          image_url: JSON.stringify(['v1588967373/tire_lzlvpn.jpg']),
          user_id: 3,
          category_id: 5
        },
        {
          id: 8,
          name: 'Old garden tools',
          description: JSON.stringify([
            'Got new ones so these are surplus to requirement',
            'Bit rusty but they still do the job'
          ]),
          location: 'Auckland',
          image_url: JSON.stringify(['v1588967373/rake_dspvuh.jpg']),
          user_id: 5,
          category_id: 6
        },
        {
          id: 9,
          name: 'Nokia Charger',
          description: JSON.stringify([
            'No phone to use this with',
            'Free to someone who still has nokia phones',
            'Contact me if interested'
          ]),
          location: 'Rotorua',
          image_url: JSON.stringify(['v1588967347/charger_mhozxk.jpg']),
          user_id: 4,
          category_id: 2
        },
        {
          id: 10,
          name: 'Basketball board',
          description: JSON.stringify([
            'Some idiot dunked and broke the basket',
            'The rim is still in good condition but I cant be bothered to fix it',
            'Just need new screws and you will need to take it off the wall if interested'
          ]),
          location: 'Auckland',
          image_url: JSON.stringify(['v1588967348/hoops_jbmdbg.jpg']),
          user_id: 2,
          category_id: 2
        },
        {
          id: 11,
          name: 'Cup set',
          description: JSON.stringify([
            'Listed on trade me as I am going back home overseas',
            'Still not sold so they are now free to a good home ',
            'Good quality cups and hardly used all as I live by myself'
          ]),
          location: 'Auckland',
          image_url: JSON.stringify(['v1588967347/cups_wpgqls.jpg']),
          user_id: 6,
          category_id: 4
        },
        {
          id: 12,
          name: 'Chair-old',
          description: JSON.stringify([
            'Chair in ok condition free for pick up',
            'Got a new set and this is now an extra',
            'Made from good quality wood so it will last a while'
          ]),
          location: 'Auckland',
          image_url: JSON.stringify(['v1588967347/chair_eyb6ba.jpg']),
          user_id: 1,
          category_id: 3
        },
        {
          id: 13,
          name: 'Best shirt ever',
          description: JSON.stringify([
            'Had this really cool shirt when I was young.',
            'Sad to let it go but it wont fit me anymore',
            'Free to someone who wants to spread the Don Energy'
          ]),
          location: 'Auckland',
          image_url: JSON.stringify(['v1588967332/bigdonshirt_xg8gzu.jpg']),
          user_id: 2,
          category_id: 1
        },
        {
          id: 14,
          name: 'Harmonica for kids',
          description: JSON.stringify([
            'Bought from the warehouse for the kids',
            'Instant regret as the kids wont stop using it',
            'Its free to anyone who can tolerate it'
          ]),
          location: 'Auckland',
          image_url: JSON.stringify(['v1588967348/harmonica_ovrack.jpg']),
          user_id: 1,
          category_id: 9
        },
        {
          id: 15,
          name: 'Jumper Cables',
          description: JSON.stringify([
            'Got a battery starter so no need for this',
            'Has helped me multiple times and hope it does for you too',
            'Contact me if interested'
          ]),
          location: 'Auckland',
          image_url: JSON.stringify(['v1588967372/jumperleads_lrhtdz.jpg']),
          user_id: 3,
          category_id: 5
        },
        {
          id: 16,
          name: 'Small Chopping Board',
          description: JSON.stringify([
            'I have an old chopping board up for grabs if anyone is interested.',
            'Quite small so only good for a little bit of vegetables or something.',
            'Could do with a proper clean, has just been sitting in my cupboard.'
          ]),
          location: 'Auckland',
          image_url: JSON.stringify(['v1589171044/lw8xkjgktxnlwneulktg.jpg', 'v1589171043/nspdbsqdqafdy6pjuttm.jpg']),
          user_id: 5,
          category_id: 4
        },
        {
          id: 17,
          name: 'Pot',
          description: JSON.stringify([
            'Pot is bit old but still in good condition',
            'Will look good in your garden',
            'Needs 2 person lift when picking up'
          ]),
          location: 'Auckland',
          image_url: JSON.stringify(['v1588967373/pot_pejjzr.jpg']),
          user_id: 4,
          category_id: 6
        },
        {
          id: 18,
          name: 'Yoga Mat',
          description: JSON.stringify([
            'I borrowed this yoga mat from Dev Academy.',
            'Please take it off my hands so I can say that I lost it.',
            'Dont tell them I gave it to you.'
          ]),
          location: 'Auckland',
          image_url: JSON.stringify(['v1589171042/xnkmr07z4i4dsdm4dutg.jpg', 'v1589171042/e9acjtafwf1ndlnshtjb.jpg']),
          user_id: 2,
          category_id: 7
        },
        {
          id: 19,
          name: 'Nespresso Coffee Machine',
          description: JSON.stringify([
            'I recently purchased a new coffee machine so I would love to give this to someone else to try out.',
            'Please only enquire about this if you dont already have a Nespresso machine.',
            'The machine itself is in great condition but make sure you give it a good clean first.'
          ]),
          location: 'Wellington',
          image_url: JSON.stringify(['v1589171042/p993ducuperruvcxihlx.jpg', 'v1589171043/gdxlz5teck3qhurigl3w.jpg']),
          user_id: 5,
          category_id: 4
        },
        {
          id: 20,
          name: 'Yoga Mat',
          description: JSON.stringify([
            'I may or may not have borrowed this and forgotten to return it',
            'It\'s in perfect condition so let me know if you are interested',
            'Pick ups after work hours ideally'
          ]),
          location: 'Wellington',
          image_url: JSON.stringify(['f3ckqvha48hrejwhoodw.jpg']),
          user_id: 5,
          category_id: 7
        },
        {
          id: 21,
          name: 'Olympia Fields, US Open 2003 cap',
          description: JSON.stringify([
            'Old cap of mine',
            'I\'ve got so many I just need to get rid of some',
            'I\'ve given it a good wash, so don\'t worry about it'
          ]),
          location: 'Wellington',
          image_url: JSON.stringify(['vosljyixedmr3cfcsyb8.jpg', 'hwazaysffsg26wrzvdiz.jpg']),
          user_id: 5,
          category_id: 1
        },
        {
          id: 22,
          name: 'Apple Trackpad',
          description: JSON.stringify([
            'Perfect condition, I want to save the planet!',
            'Just upgraded to a mouse haha, so let me know if you are keen'
          ]),
          location: 'Wellington',
          image_url: JSON.stringify(['nvidzfpug6yol8bubxmg.jpg', 'g6amwtjedwrrpkgpzj3e.jpg']),
          user_id: 5,
          category_id: 2
        },
        {
          id: 23,
          name: '3kg Medicine Ball',
          description: JSON.stringify([
            'In Lockdown?',
            'Have you exercised?',
            'Well I haven\'t, so take my medicine ball if you want to make use of it!'
          ]),
          location: 'Auckland',
          image_url: JSON.stringify(['bkyndlxrc8yxyofwkvq3.jpg']),
          user_id: 5,
          category_id: 7
        },
        {
          id: 24,
          name: 'Olympus 35mm mju zoon',
          description: JSON.stringify([
            'Good condition',
            'I can send you some photos if you like',
            'Unfortunately the battery is flat, so you\'ll need to buy some',
            'But it\'s free so why wouldn\'t you want it'
          ]),
          location: 'Auckland',
          image_url: JSON.stringify(['i1paunxg4mu5uaeo2ccg.jpg', 'jaa7m8owujmxhd7cizjm.jpg']),
          user_id: 5,
          category_id: 2
        },
        {
          id: 25,
          name: 'Adidas Gazelle shoes',
          description: JSON.stringify([
            'Size 10',
            'Bit worn down, but totally wearable still',
            'May need a bit of a clean',
            'I just don\'t really wear then, would love for someone to wear them till they fall apart!'
          ]),
          location: 'Auckland',
          image_url: JSON.stringify(['gnmflabfmfbe1ok5ccml.jpg']),
          user_id: 5,
          category_id: 1
        },
        {
          id: 26,
          name: 'Quick release guitar capo',
          description: JSON.stringify([
            'The original One-handed Quick-Change capo',
            'Strong, lightweight aluminum with steel spring',
            'Professional quality',
            "Parks on the guitar's headstock when not in use",
            'hand_orientation: ambidextrous'
          ]),
          location: 'Lake Taupo',
          image_url: JSON.stringify(['ie6f4acrwylvokqqfcvz.jpg']),
          user_id: 5,
          category_id: 9
        }
      ]))
