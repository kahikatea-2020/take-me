const express = require('express')
const router = express.Router()
const { getTokenDecoder } = require('authenticare/server')

const db = require('../db/listing')

// GET /api/v1/listings/id
router.get('/:id', (req, res) => {
  db.getListingsById(Number(req.params.id))
    .then(dbRes => {
      if (dbRes.length === 0) {
        res.send(dbRes)
      } else {
        dbRes[0].description = JSON.parse(dbRes[0].description)
        dbRes[0].imageUrl = JSON.parse(dbRes[0].imageUrl)
        res.send(dbRes)
      }
    })
})

// GET /api/v1/listings
router.get('/', (req, res) => {
  db.getListings().then((dbRes) => {
    res.send(
      dbRes.map((listing) => {
        return {
          ...listing,
          imageUrl: JSON.parse(listing.imageUrl),
          userImage: listing.userImage
        }
      })
    )
  })
})

// DELETE /api/v1/listings/id
router.delete('/:id', getTokenDecoder(), (req, res) => {
  db.getUserByListingId(Number(req.params.id))
    .then(({ userId }) => {
      if (userId === Number(req.user.id)) {
        db.deleteListingsById(Number(req.params.id))
          .then(dbRes => {
            if (dbRes) res.sendStatus(200)
            else res.sendStatus(500)
          })
      } else res.sendStatus(500)
    })
    .catch(err => console.log(err))
})

// POST /api/v1/listings/new
router.post('/new', (req, res) => {
  const { name, description, location, imageUrl, show, userId, categoryId } = req.body
  var address = location.slice(0, -5)
  const data = {
    name,
    description,
    imageUrl,
    show,
    location: address,
    userId,
    categoryId
  }
  db.addListing(data)
    .then((id) => {
      res.send({ id: id[0] })
    })
    .catch((err) => console.log(err.message))
})

// POST api/v1/listings/:id
router.put('/:id', getTokenDecoder(), (req, res) => {
  const id = Number(req.params.id)
  db.getUserByListingId(id)
    .then(({ userId }) => {
      if (userId === Number(req.user.id)) {
        const newListing = req.body
        const { name, description, location, imageUrl } = newListing
        const data = {
          name,
          description,
          location,
          imageUrl
        }
        db.updateListingById(id, data)
          .then(dbRes => {
            if (dbRes) {
              res.status(200).json({ ok: true })
            } else {
              res.status(500).json({ ok: false })
            }
          })
      }
    })
    .catch((err) => {
      res.status(500).json({ ok: false, error: err.message })
    })
})

// api/v1/listings/user/:id
router.get('/user/:id', (req, res) => {
  const id = req.params.id
  db.getUsersListingsById(id)
    .then((dbRes) => {
      dbRes.map(obj => {
        obj.description = JSON.parse(obj.description)
        obj.imageUrl = JSON.parse(obj.imageUrl)
      })
      res.status(200).json(dbRes)
    })
    .catch(err => {
      console.log(err.message)
      res.sendStatus(500)
    })
})

// /api/v1/listings/taken/:id
router.put('/taken/:id', getTokenDecoder(), (req, res) => {
  const id = Number(req.params.id)
  db.getUserByListingId(id)
    .then(({ userId }) => {
      if (userId === Number(req.user.id)) {
        var date = new Date(Date.now()).toString()
        db.setItemToTaken(id, date)
          .then(dbRes => {
            res.json({ ok: true }).status(200)
          })
      }
    })
    .catch(err => {
      console.log(err.message)
      res.status(500).json({ ok: false, err: err.message })
    })
})

router.get('/api/v1/listings/taken/:id', (req, res) => {
  const id = req.params.id
  db.getTakenStatus(id)
    .then(dbRes => {
      res.send(dbRes)
    })
    .catch(err => {
      res.sendStatus(500)
      console.log(err.message)
    })
})

module.exports = router
