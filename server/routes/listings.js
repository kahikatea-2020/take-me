const express = require('express')
const router = express.Router()
const { getTokenDecoder } = require('authenticare/server')

const db = require('../db/listing')

// GET /api/v1/listings/id
router.get('/:id', (req, res) => {
  db.getListingsById(req.params.id)
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
          imageUrl: JSON.parse(listing.imageUrl)
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
  db.addListing(req.body)
    .then((id) => {
      res.send({ id: id[0] })
    })
    .catch((err) => console.log(err.message))
})

// POST api/v1/listings/:id
router.post('/:id', (req, res) => {
  const id = req.params.id
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
    .catch((err) => {
      res.status(500).json({ ok: false, error: err.message })
    })
})

// api/v1/listings/user/:id
router.get('/user/:id', getTokenDecoder(), (req, res) => {
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

module.exports = router
