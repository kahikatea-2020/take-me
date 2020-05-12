exports.seed = (knex) =>
  knex('q_and_a').del()
    .then(() => knex('listings').del())
    .then(() => knex('users').del())
    .then(() => knex('categories').del())
    .then(() =>
      knex('categories').insert([
        { id: 1, name: 'Clothing & Shoes' },
        { id: 2, name: 'Electronics' },
        { id: 3, name: 'Furniture & Home Décor' },
        { id: 4, name: 'Homeware & Applicances' },
        { id: 5, name: 'Automotive' },
        { id: 6, name: 'Garden' },
        { id: 7, name: 'Sports' },
        { id: 8, name: 'Health & Beauty' },
        { id: 9, name: 'Music & Instruments' },
        { id: 10, name: 'Entertainment' },
        { id: 11, name: 'Miscellaneous' }
      ]))
    .then(() =>
      knex('users').insert([
        { id: 1, username: 'johnS', first_name: 'John', last_name: 'Sengson', email: 'john@gmail.com', phone_number: '021-435-1234', image_url: 'v1588967373/john_yigtz6.jpg', hash: '5F4DCC3B5AA765D61D8327DEB882CF99', location: 'Takapuna, Auckland' },
        { id: 2, username: 'BubbleBast', first_name: 'Mathias', last_name: 'Bast', email: 'mathias@gmail.com', phone_number: '021-352-1234', image_url: 'v1588967372/mathias_eos91h.jpg', hash: '$argon2id$v=19$m=65536,t=2,p=1$t7fDj0UPvYCnLculR3ti2w$hsbmENXcvcQbKGBoj2cBoH0xVBB8OIYfNDSZsatnT8k', location: 'Inner Kaiti, Gisborne' },
        { id: 3, username: 'hamishT', first_name: 'Hamish', last_name: 'Tana', email: 'hamish@gmail.com', phone_number: '021-665-4287', image_url: 'v1588967348/hamishT_eiqwbd.jpg', hash: '5F4DCC3B5AA765D61D8327DEB898PHA7', location: 'Newmarket, Auckland' },
        { id: 4, username: 'vibes-lache', first_name: 'Lache', last_name: 'Melvin', email: 'lache@gmail.com', phone_number: '021-352-6789', image_url: 'v1588967373/lache_v5blpl.png', hash: '5F4DCC3B5AA7KGA84D8327DEB8826KL8', location: 'Annesbrook, Nelson' },
        { id: 5, username: 'p-man', first_name: 'Pat', last_name: 'Lim', email: 'pat@gmail.com', phone_number: '021-352-6789', image_url: 'v1588967373/pat_cevccf.jpg', hash: '5F4DCC3B5AA765D61D8327DEB8826KL8', location: 'Sandringham, Auckland' },
        { id: 6, username: 'ElloraV', first_name: 'Ellora', last_name: 'Virtue', email: 'ellora@gmail.com', phone_number: '022-648-2546', image_url: 'v1588967348/ellora_ze8tgm.jpg', hash: '5F4DCC3YH8UJ65D61D8327DEB8826KL8', location: 'Titirangi, Auckland' }
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
          location: 'Auckland',
          image_url: JSON.stringify(['v1588967374/soccer_ball_q9nnef.jpg']),
          user_id: 1,
          category_id: 7
        },
        {
          id: 2,
          name: 'Ladder',
          description: JSON.stringify([
            '5 step ladder.',
            'I\'ve only used it like twice.',
            'Perfect working condition, contact me for pick up times.'
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
            'Infant shoes in great condition.',
            'My child has outgrown already and only worn a few times.',
            'Contact me below if interested.'
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
            'Broken - screen cracked.',
            'Got a new phone and dont want to spend for fixing.',
            'Good for parts.'
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
            'Moving house and no space for this couch.',
            'Still in good condition.',
            'Hit me up asap, currently sitting outside.'
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
            'Purchased so I can learn but gave up.',
            'Not for me but could be for you.',
            'Please contact me if interested.'
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
            'Was cleaning the garage and found this.',
            'Sold my car so no need for this.',
            'Not sure about the size but we can organise for you to check.'
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
            'Got new ones so these are surplus to requirement.',
            'Bit rusty but they still do the job.'
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
            'No phone to use this with.',
            'Free to someone who still has nokia phones.',
            'Contact me if interested.'
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
            'Some idiot dunked and broke the basket.',
            'The rim is still in good condition but I cant be bothered to fix it.',
            'Just need new screws and you will need to take it off the wall if interested.'
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
            'Listed on trade me as I am going back home overseas.',
            'Still not sold so they are now free to a good home.',
            'Good quality cups and hardly used all as I live by myself.'
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
            'Chair is in ok condition free for pick up.',
            'Got a new set and this is now an extra.',
            'Made from good quality wood so it will last a while.'
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
            'Sad to let it go but it wont fit me anymore.',
            'Free to someone who wants to spread the Don Energy.'
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
            'Bought from the warehouse for the kids.',
            'Instant regret as the kids wont stop using it.',
            'Its free to anyone who can tolerate it.'
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
            'Got a battery starter so no need for this.',
            'Has helped me multiple times and hope it does for you too.',
            'Contact me if interested.'
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
            'Pot is bit old but still in good condition.',
            'Will look good in your garden.',
            'Needs 2 person lift when picking up.'
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
            'I may or may not have borrowed this and forgotten to return it.',
            'It\'s in perfect condition so let me know if you are interested.',
            'Pick ups after work hours ideally.'
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
            'Old cap of mine.',
            'I\'ve got so many I just need to get rid of some.',
            'I\'ve given it a good wash, so don\'t worry about it.'
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
            'Just upgraded to a mouse haha, so let me know if you are keen.'
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
            'Good condition.',
            'I can send you some photos if you like.',
            'Unfortunately the battery is flat, so you\'ll need to buy some.',
            'But it\'s free so why wouldn\'t you want it.'
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
            'Bit worn down, but totally wearable still.',
            'May need a bit of a clean.',
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
            'The original One-handed Quick-Change capo.',
            'Strong, lightweight aluminum with steel spring.',
            'Professional quality.',
            "Parks on the guitar's headstock when not in use.",
            'hand_orientation: ambidextrous.'
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
            'In as-new condition.',
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
            'Manual Transmission.',
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
            'Will make a great addition to someone else\'s collection.',
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
            'Photos are of a box I opened, your box is sealed and contains 50 masks.',
            'Tri-layer design for maximum protection.',
            'Comes with 100mL bottle of hand sanitiser as well.',
            'Breathable, soft design.'
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
            'Camera body itself is in very good condition with no noticeable scuffs or scratches.',
            'Lens has a slight crack in the barrel as shown in the photos. This has been there for as long as I\'ve had the camera, has no impact on image quality or focusing of the lens. It also hasn\'t extended or grown larger in all the time I\'ve had it. Functionally the lens has always worked great.',
            'Shutter count is 34k so lots of usable life left as these are rated for 100k, and they normally go well beyond that number.',
            'Comes with the original charger and 2 batteries.'
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
        },
        {
          id: 36,
          name: 'Car smell good thing',
          description: JSON.stringify([
            'I have one left and I don\'t need it.',
            'The odour is very strong and is hard to handle at first. There are instructions to let it out gradually.',
            'I have used them and they do work well if you want to block out a bad smell or you don\'t like your current car smell.',
            'I can be used for other things like in closets that smell.',
            'Email me for a pick up address.'
          ]),
          location: 'Inner Kaiti, Gisborne',
          image_url: JSON.stringify(['v1589182639/edhjocxxxtcu4xsly0ez.jpg', 'v1589182641/j6xw6hvjcrfpoq5tmnor.jpg', 'v1589182641/sev5lpij8thxbnu45cl3.jpg', 'v1589182642/hruy5wrgpy0xz2jvgrbq.jpg', 'v1589182642/pwrcn9pzvjml4ykd69pf.jpg']),
          user_id: 2,
          category_id: 5
        },
        {
          id: 37,
          name: 'French print in frame',
          description: JSON.stringify([
            'Moving countries so getting rid of a ton of stuff!',
            'Beautiful vintage “Kina Lillet” print in large black frame.',
            'Great condition, small tear in the backing but is obviously not visible and does not affect the picture hanging at all.'
          ]),
          location: 'Aranui, Christchurch',
          image_url: JSON.stringify([
            'v1589185694/p2m81pmunflguholnkwi.jpg',
            'v1589185694/ajqfy3qidophq8cee1ho.jpg'
          ]),
          user_id: 6,
          category_id: 3
        },
        {
          id: 38,
          name: 'Monopoly board (UK edition)',
          description: JSON.stringify([
            'UK Edition Monopoly board with all pieces and cards included.',
            'Super fun, competitive game to play with family or friends.',
            'Don\'t blame me if this causes arguments.',
            'Free to whoever can pick up first.'
          ]),
          location: 'Ellerslie, Auckland',
          image_url: JSON.stringify([
            'v1589185882/obwbl1prutb4rtb7eqah.jpg',
            'v1589185882/wtd6tvlmxyzknfq2oa7d.jpg'
          ]),
          user_id: 6,
          category_id: 10
        },
        {
          id: 39,
          name: 'Hairdryer (Mark Hill)',
          description: JSON.stringify([
            'Giving away this powerful salon-quality hairdryer by Mark Hill in amazing working condition.',
            'Only reason I’m giving it away is because I’m leaving the country next week and it must go.',
            'The cord is roughly two meters and it comes with a diffuser and a 50ml heat protection spray too.',
            'This hairdryer features five heat options and five airflow/power options (up to 2200W), meaning you have 25 different combinations!',
            'First come, first served.'
          ]),
          location: 'Richmond, Nelson',
          image_url: JSON.stringify([
            'v1589186167/sv2dqy2tcpdtjxyi7upp.jpg',
            'v1589186170/txvohk90qmcu2wdm7kdl.jpg',
            'v1589186174/eljl0wowmgo7wallmspx.jpg',
            'v1589186176/c6ecrhyglg1xehcipskg.jpg'
          ]),
          user_id: 6,
          category_id: 8
        },
        {
          id: 40,
          name: 'Olivia the Orchid',
          description: JSON.stringify([
            'Beautiful pink flowering orchid with supports for sale.',
            'She has been well cared for and we are sad to say goodbye to Olivia the Orchid.',
            'I\'m hoping she can find a nice new home with someone who will take care of her!',
            'I have a few other plants to give away too so let me know if you’re are interested in those or check out my profile for my other listings.'
          ]),
          location: 'Sunshine Bay, Queenstown',
          image_url: JSON.stringify([
            'v1589186358/m1838s4pooepzlwgdcf8.jpg',
            'v1589186356/avdw9i327obntespfm9o.jpg'
          ]),
          user_id: 6,
          category_id: 3
        },
        {
          id: 41,
          name: 'Dr. Martens (size UK 10)',
          description: JSON.stringify([
            'Dr Martens 1460 Smooth (8 eye) boots in size UK 10, black colour.',
            'They’ve only been tried on at home and weren’t quite the right style so sending on to a good home!',
            'They also come with a set of yellow laces.'
          ]),
          location: 'Johnsonville, Wellington',
          image_url: JSON.stringify([
            'v1589186686/ovujggrnqouzhkdu4sfc.jpg',
            'v1589186687/gt4x7biphwrpcs9mnxo8.jpg',
            'v1589186689/ix980mz4nm0hqhpjbvpa.jpg',
            'v1589186691/xywtch3yanwnkylnrxt7.jpg'
          ]),
          user_id: 6,
          category_id: 1
        },
        {
          id: 42,
          name: 'Toys for kids',
          description: JSON.stringify([
            'Kids have outgrown this two toys.',
            'Will give your young ones lots of hours of play.',
            'Still in really good condition.'
          ]),
          location: 'Totara Vale, Auckland 0629',
          image_url: JSON.stringify([
            'v1589194588/toys2_xvljld.jpg',
            'v1589194598/toys3_ib4dzu.jpg',
            'v1589194605/toys4_bshvgo.jpg',
            'v1589194613/toys1_yf7ox7.jpg'
          ]),
          user_id: 1,
          category_id: 10
        },
        {
          id: 43,
          name: 'Weight plates',
          description: JSON.stringify([
            'Weight plates from the warehouse.',
            'Lost the bar so no use for them anymore.',
            'Will be good to add to your home gym.',
            'Contact me so can organise pick up.'
          ]),
          location: ' Unsworth Heights, Auckland 0632',
          image_url: JSON.stringify([
            'v1589194765/plates3_ymrv7s.jpg',
            'v1589194772/plates2_y0iqzp.jpg',
            'v1589194780/plates1_yomhes.jpg'
          ]),
          user_id: 1,
          category_id: 7
        },
        {
          id: 44,
          name: 'Iphone x cases',
          description: JSON.stringify([
            'Joined the android community when I damaged my iphone x.',
            'No use for them anymore.',
            'One is a UAG which is in ok condition.',
            'The other case is a defender I think with normal wear and tear.',
            'Both are my back up cases and still offer good protection.'
          ]),
          location: '  Newmarket, Auckland 1023',
          image_url: JSON.stringify([
            'v1589194846/case1_m1xmxn.jpg',
            'v1589194853/case2_hleujz.jpg',
            'v1589194860/case3_b5ifpi.jpg',
            'v1589194866/case_nkri5z.jpg'
          ]),
          user_id: 1,
          category_id: 2
        },
        {
          id: 45,
          name: 'Playing cards',
          description: JSON.stringify([
            ' 2 x playing cards set from Sky City.',
            'Both have been used only once.',
            'Given a few by a friend and have too many.',
            'Can be a good way to kill time for times like in lockdown.'
          ]),
          location: '  Newmarket, Auckland 1023',
          image_url: JSON.stringify([
            'v1589194983/cards_uvvtqo.jpg',
            'v1589194989/cards2_atddp7.jpg',
            'v1589195009/card1_ege1xv.jpg'
          ]),
          user_id: 1,
          category_id: 10
        },
        {
          id: 46,
          name: 'Bmx bike spokes',
          description: JSON.stringify([
            ' 2 x Bmx bike spokes.',
            'Came from Redline BMX bike which I sold.',
            'Forgot to install them back when sold and cant get in touch with the buyer.',
            'Some rust but can easliy be cleaned and painted.',
            'Upgraded to a mountain bike so no need for them anymore.'
          ]),
          location: '  Newmarket, Auckland 1023',
          image_url: JSON.stringify([
            'v1589195088/spoke1_c3zwuy.jpg',
            'v1589195096/spoke2_furyxd.jpg',
            'v1589195103/spoke3_carewd.jpg'
          ]),
          user_id: 1,
          category_id: 7
        },
        {
          id: 47,
          name: 'US11 mens Nike Running shoes',
          description: JSON.stringify([
            ' US 11 Nike gore-tex running shoes',
            'I would say that they are a good 6/10 condition wise so still a bit of life in them.',
            'Feel free to take them off my hands because they dont fit me anymore.'
          ]),
          location: '  Botany, Auckland 2016',
          image_url: JSON.stringify([
            'v1589171043/dgnsu3faavhvxap2olgj.jpg',
            'v1589171042/nc9ovnx4u0ymqcs5gljk.jpg'
          ]),
          user_id: 3,
          category_id: 1
        },
        {
          id: 48,
          name: 'Kettle',
          description: JSON.stringify([
            'Dont need this kettle anymore so I would love to give it away to someone who needs it.'
          ]),
          location: 'Howick, Auckland 2012',
          image_url: JSON.stringify([
            'v1589171042/t02sznw9wucqvx30bm7o.jpg',
            'v1589171043/hakkgr9ok16epum6hwle.jpg'
          ]),
          user_id: 5,
          category_id: 4
        },
        {
          id: 49,
          name: 'Vacuum',
          description: JSON.stringify([
            'Cord is broken on this vacuum, I have implemented a quick solution though but the cord will just be long all the time.',
            'I decided to buy a new one so I would like to give this away to someone who needs it more than I do!'
          ]),
          location: 'Panmure, Auckland 2000',
          image_url: JSON.stringify([
            'v1589171042/uxvrfkb5qb9ijqcvjk53.jpg',
            'v1589171042/x5lixe3zbdijkelngykf.jpg',
            'v1589171044/wmontfnfoplnq1arzxp6.jpg'
          ]),
          user_id: 1,
          category_id: 4
        },
        {
          id: 50,
          name: 'Womens Nike Running Shoes, US7',
          description: JSON.stringify([
            'Dont really run in these shoes anymore, please feel free to come pick them up if you think you would get better use out of them than me!',
            'US7 womens :)'
          ]),
          location: 'Pakuranga, Auckland 2015',
          image_url: JSON.stringify([
            'v1589171044/ii7ake7vrdig2mbuwaig.jpg',
            'v1589171044/kgklhbxuc5jrrj32kvdz.jpg',
            'v1589171043/s7jtjul2kv0keai6yrlp.jpg'
          ]),
          user_id: 3,
          category_id: 1
        }
      ]))
    .then(() =>
      knex('q_and_a').insert([
        {
          id: 1,
          comment: 'Does this come with the case?',
          date: 'Tue May 12 2020 11:03:40 GMT+1200 (New Zealand Standard Time)',
          user_id: 3,
          listing_id: 27
        },
        {
          id: 2,
          comment: 'Yes, as per lisitng description.',
          date: 'Tue May 12 2020 10:05:38 GMT+1200 (New Zealand Standard Time)',
          user_id: 4,
          listing_id: 27
        },
        {
          id: 3,
          comment: 'Can I rename it?',
          date: 'Tue May 12 2020 11:03:40 GMT+1200 (New Zealand Standard Time)',
          user_id: 2,
          listing_id: 40
        },
        {
          id: 4,
          comment: 'Dont be silly, We don\'t want to confuse her!',
          date: 'Tue May 12 2020 11:05:38 GMT+1200 (New Zealand Standard Time)',
          user_id: 6,
          listing_id: 40
        },
        {
          id: 5,
          comment: 'Do you have size 8?',
          date: 'Tue May 12 2020 11:03:40 GMT+1200 (New Zealand Standard Time)',
          user_id: 5,
          listing_id: 41
        },
        {
          id: 6,
          comment: 'Yeah swing round and pick them up whenever you\'re free!!! JK no I don\'t',
          date: 'Tue May 12 2020 11:05:38 GMT+1200 (New Zealand Standard Time)',
          user_id: 6,
          listing_id: 41
        },
        {
          id: 7,
          comment: 'What sound does it make?',
          date: 'Tue May 12 2020 11:03:40 GMT+1200 (New Zealand Standard Time)',
          user_id: 2,
          listing_id: 28
        },
        {
          id: 8,
          comment: 'BRRRRROOOOOMMMMMMMMMM, scurrrrr *crash* Many horses be warned',
          date: 'Tue May 12 2020 11:05:38 GMT+1200 (New Zealand Standard Time)',
          user_id: 4,
          listing_id: 28
        },
        {
          id: 9,
          comment: 'Can I just have one, my other one went for a walk',
          date: 'Tue May 12 2020 11:03:40 GMT+1200 (New Zealand Standard Time)',
          user_id: 3,
          listing_id: 25
        },
        {
          id: 10,
          comment: '????',
          date: 'Tue May 12 2020 11:05:38 GMT+1200 (New Zealand Standard Time)',
          user_id: 5,
          listing_id: 25
        },
        {
          id: 11,
          comment: 'Can I take just one?',
          date: 'Wed May 13 2020 07:17:28 GMT+1200 (New Zealand Standard Time)',
          user_id: 3,
          listing_id: 44
        },
        {
          id: 12,
          comment: 'How old is the vacuum?  Do you think the parts need to fix will still be available?',
          date: 'Wed May 13 2020 07:24:29 GMT+1200 (New Zealand Standard Time)',
          user_id: 5,
          listing_id: 49
        },
        {
          id: 13,
          comment: 'Of course you can. Contact me on my mobile so we can do this!',
          date: 'Wed May 13 2020 07:25:37 GMT+1200 (New Zealand Standard Time)',
          user_id: 1,
          listing_id: 44
        },
        {
          id: 14,
          comment: 'Looks like a fun game! Is it missing anything at all are all contents still there?',
          date: 'Wed May 13 2020 07:26:44 GMT+1200 (New Zealand Standard Time)',
          user_id: 4,
          listing_id: 38
        },
        {
          id: 15,
          comment: 'Is the screen the only issue? Will it still turn on?',
          date: 'Wed May 13 2020 07:27:49 GMT+1200 (New Zealand Standard Time)',
          user_id: 2,
          listing_id: 4
        },
        {
          id: 16,
          comment: 'Yeah it does turn on still last time I check. Just one more thing, this is only for the phone. The charger wont come with it. ',
          date: 'Wed May 13 2020 07:29:01 GMT+1200 (New Zealand Standard Time)',
          user_id: 3,
          listing_id: 4
        },
        {
          id: 17,
          comment: 'Can you add a picture of the tear? ',
          date: 'Wed May 13 2020 07:35:01 GMT+1200 (New Zealand Standard Time)',
          user_id: 4,
          listing_id: 37
        },
        {
          id: 18,
          comment: 'It is still working right? ',
          date: 'Wed May 13 2020 07:35:07 GMT+1200 (New Zealand Standard Time)',
          user_id: 1,
          listing_id: 48
        },
        {
          id: 19,
          comment: 'What size is it?',
          date: 'Wed May 13 2020 07:25:07 GMT+1200 (New Zealand Standard Time)',
          user_id: 3,
          listing_id: 32
        },
        {
          id: 20,
          comment: 'Medium',
          date: 'Wed May 13 2020 07:32:07 GMT+1200 (New Zealand Standard Time)',
          user_id: 2,
          listing_id: 32
        },
        {
          id: 21,
          comment: 'It is a cool shirt! Are they still available for purchase anywhere? I can\t find them online.',
          date: 'Wed May 13 2020 07:28:07 GMT+1200 (New Zealand Standard Time)',
          user_id: 6,
          listing_id: 32
        },
        {
          id: 22,
          comment: 'I don\t think so. Got it from a Big Don Camp I went to years ago.',
          date: 'Wed May 13 2020 07:45:15 GMT+1200 (New Zealand Standard Time)',
          user_id: 2,
          listing_id: 32
        }
      ]))
