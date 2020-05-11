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
        { id: 2, username: 'BubbleBast', first_name: 'Mathias', last_name: 'Bast', email: 'mathias@gmail.com', phone_number: '021-352-1234', image_url: 'v1588967372/mathias_eos91h.jpg', hash: '$argon2id$v=19$m=65536,t=2,p=1$t7fDj0UPvYCnLculR3ti2w$hsbmENXcvcQbKGBoj2cBoH0xVBB8OIYfNDSZsatnT8k', location: 'Gisborne' },
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
          category_id: 6
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
          category_id: 2
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
          category_id: 7
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
        },
        {
          id: 27,
          name: 'Sebastian Klotz Copy Viola',
          description: JSON.stringify([
            'Beautiful viola.',
            'In as-new condition',
            'It is approximately 70 cm long and has a beautifully inlaid fingerboard and nice tone woods.',
            'Viola comes with a shoulder rest and a carbon fibre bow, resin and a good case.'
          ]),
          location: 'Nelson',
          image_url: JSON.stringify(['v1589182637/Screen_Shot_2020-05-11_at_6.54.34_PM_xgolqz.png', 'v1589182631/Screen_Shot_2020-05-11_at_6.55.06_PM_rz4uyt.png', 'v1589182626/Screen_Shot_2020-05-11_at_6.54.55_PM_o6fnsq.png', 'v1589182624/Screen_Shot_2020-05-11_at_6.55.16_PM_cl8dm2.png', 'v1589182633/Screen_Shot_2020-05-11_at_6.54.24_PM_et2lhj.png']),
          user_id: 4,
          category_id: 9
        },
        {
          id: 28,
          name: '2004 Buell XB12S Lightning Motorbike',
          description: JSON.stringify([
            'Manual Transmission',
            'The Buell XB12S Lightning is a very individual motorcycle and hugely enjoyable to ride.',
            '1202cc Harley-Davidson air cooled V-twin in the Buell XB12S Lightning has been tuned and lays down fat wads of torque from tick over upwards.',
            'Donating because I\'m rich and want to buy more new bikes but figured I should not put this in the dump because I learned that global warming is happening.'
          ]),
          location: 'Greymouth',
          image_url: JSON.stringify(['v1589182626/Screen_Shot_2020-05-11_at_6.56.57_PM_chau1k.png', 'v1589182637/Screen_Shot_2020-05-11_at_6.57.30_PM_j60pt9.png', 'v1589182629/Screen_Shot_2020-05-11_at_6.56.46_PM_pfbkef.png']),
          user_id: 4,
          category_id: 5
        },
        {
          id: 29,
          name: 'Pink Jellybean Succulent',
          description: JSON.stringify([
            'This fun succulent has bright green leaves whose tips turn pink when in full sun.',
            'It has a woody stem and displays yellow flowers in the Spring.',
            'Will make a great addition to someone else\'s collection',
            'Having to leave this behind as I am moving to Auckland.'
          ]),
          location: 'Hornby, Christchurch',
          image_url: JSON.stringify(['v1589182629/Screen_Shot_2020-05-11_at_7.00.43_PM_epxtx0.png', 'v1589182632/Screen_Shot_2020-05-11_at_7.00.50_PM_lqvfg5.png']),
          user_id: 4,
          category_id: 6
        },
        {
          id: 30,
          name: 'MASKS!! 50pack',
          description: JSON.stringify([
            'Photos are of a box I opened, your box is sealed and contains 50 masks',
            'Tri-layer design for maximum protection',
            'Comes with 100mL bottle of hand sanitiser as well',
            'Breathable, soft design'
          ]),
          location: 'Bluff',
          image_url: JSON.stringify(['v1589182636/Screen_Shot_2020-05-11_at_7.02.19_PM_ayakjf.png', 'v1589182636/Screen_Shot_2020-05-11_at_7.02.05_PM_vorvjm.png', 'v1589182636/Screen_Shot_2020-05-11_at_7.01.54_PM_lqufd4.png', 'v1589182636/Screen_Shot_2020-05-11_at_7.02.12_PM_rtbe6e.png']),
          user_id: 4,
          category_id: 8
        },
        {
          id: 31,
          name: 'Canon 6D + 24-105mm F4 L Lens',
          description: JSON.stringify([
            'Camera body itself is in very good condition with no noticeable scuffs or scratches',
            'Lens has a slight crack in the barrel as shown in the photos. This has been there for as long as I\'ve had the camera, has no impact on image quality or focusing of the lens. It also hasn\'t extended or grown larger in all the time I\'ve had it. Functionally the lens has always worked great.',
            'Shutter count is 34k so lots of usable life left as these are rated for 100k, and they normally go well beyond that number.',
            'Comes with the original charger and 2 batteries'
          ]),
          location: 'Atawhai, Nelson',
          image_url: JSON.stringify(['v1589182639/Screen_Shot_2020-05-11_at_7.04.40_PM_tdl2md.png', 'v1589182641/Screen_Shot_2020-05-11_at_7.05.00_PM_zwbo9r.png', 'v1589182641/Screen_Shot_2020-05-11_at_7.04.48_PM_kenm5q.png', 'v1589182642/Screen_Shot_2020-05-11_at_7.05.22_PM_iqoige.png']),
          user_id: 4,
          category_id: 2
        },
        {
          id: 32,
          name: 'Beanie ',
          description: JSON.stringify([
            'I was cleaning out my draws and I found this bad boy.',
            'It is a lovely beanie. It is worm and can fend of the cold like the greatest hero.',
            'There is no need to fear when the beanie is near. I have worn it through many storms and it has treated me very well.',
            'I don\'t think it smells but it probably smells like me, I can\'t tell anymore.',
            'Please E-mail me for more details about it. It is just a nice beanie. It is hard to give it away but it is for the best.'
          ]),
          location: 'Inner Kaiti, Gisborne',
          image_url: JSON.stringify(['v1589182639/ueszm7j3qi3yrantl05t.jpg', 'v1589182641/ir6zwiw7h3gyx6w9cluy.jpg', 'v1589182641/dcit4b8msok5dwrot8vf.jpg']),
          user_id: 2,
          category_id: 1
        },
        {
          id: 33,
          name: 'Smoke Alarm',
          description: JSON.stringify([
            'I don\'t need it anymore. I have a newer version that works better.',
            'If you do not want to die a painful death or you care about your family give them smoke alarms. This one is free and it works.',
            'There is a radiation warning on it, I recommend you ignore it. It is a cool device to have in your house. It can save your life.',
            'It does not have any batteries so you will have to get them yourself.',
            'Please take this if you need it and Email me for more details.'
          ]),
          location: 'Inner Kaiti, Gisborne',
          image_url: JSON.stringify(['v1589182639/sbs4shnbmaicwpulxx5q.jpg', 'v1589182641/j7h1ib8mzhlrellm8sf7.jpg', 'v1589182641/zu8me3czjh2cahlqc4ff.jpg']),
          user_id: 2,
          category_id: 2
        },
        {
          id: 34,
          name: 'Old coffee thing',
          description: JSON.stringify([
            'This does make coffee. It does work well and taste nice. I do recommend you do pick it up.',
            'It works really really well and I think you can pick it up and try making yourself a coffee.',
            'I have only used this one a few times due to its low capacity but is ideal for someone who is just making coffee for one or two. ',
            'It still has a coffee smell that I can not get to leave but it is not overpowering.'
          ]),
          location: 'Inner Kaiti, Gisborne',
          image_url: JSON.stringify(['v1589182639/txhyyjcftdfbxfahm697.jpg', 'v1589182641/xjsvrfiwfje6mnenk8td.jpg']),
          user_id: 2,
          category_id: 4
        },
        {
          id: 35,
          name: 'A cuttie as heck dolphin',
          description: JSON.stringify([
            'In short, my sister annoyed me a little too much so I repossessed some property as compensation for emotional damage (and to get back at her).',
            'It is very cute, white and quite large (fake mustache for scale).',
            'I am tempted to keep it because I love it but this will hurt her more. Please do the world a favor and take it.',
            'Email me to arrange pick-up ☻'
          ]),
          location: 'Inner Kaiti, Gisborne',
          image_url: JSON.stringify(['v1589182639/qii0trawmlz36czjkxfs.jpg', 'v1589182641/hyg4277qcshsgd2b5tlo.jpg', 'v1589182641/u0zwtz2znhj7jh0dkwhb.jpg', 'v1589182642/rlcnreudgmobjbhjhaxk.jpg', 'v1589182642/iuace4dbwmjnyl1qd3o5.jpg']),
          user_id: 2,
          category_id: 4
        }
      ]))
