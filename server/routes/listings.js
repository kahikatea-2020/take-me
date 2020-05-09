const express = require('express')
const router = express.Router()
const { getTokenDecoder } = require('authenticare/server')

const db = require('../db/listing')

// GET /api/v1/listings/id
router.get('/:id', (req, res) => {
  db.getListingsById(req.params.id)
    .then(dbRes => {
      console.log(dbRes)
      dbRes[0].description = JSON.parse(dbRes[0].description)
      dbRes[0].imageUrl = JSON.parse(dbRes[0].imageUrl)
      res.send(dbRes)
    })
})

// GET /api/v1/listings
router.get('/', (req, res) => {
  db.getListings()
    .then(dbRes => {
      res.send(dbRes)
    })
})

// DELETE /api/v1/listings/id
router.delete('/:id', (req, res) => {
  db.deleteListingsById(Number(req.params.id))
    .then(dbRes => {
      if (dbRes) res.redirect('/')
      else res.sendStatus(500)
    })
})

// POST /api/v1/listings/new
router.post('/new', (req, res) => {
  db.addListing(req.body)
    .then(dbRes => {
      res.send(dbRes)
    })
    .catch(err => console.log(err.message))
})

// PUT api/v1/listings/:id
router.put('/:id', getTokenDecoder(), (req, res) => {
  const id = req.params.id
  const newListing = req.body
  db.updateListingById(id, newListing)
    .then(dbRes => {
      if (dbRes) {
        res.status(200).json({ ok: true })
      } else {
        res.status(500).json({ ok: false })
      }
    })
    .catch(err => {
      res.status(500).json({ ok: false, error: err.message })
    })
})

module.exports = router
