const express = require('express')
const router = express.Router()
const { getTokenDecoder } = require('authenticare/server')

const db = require('../db/listing')

router.get('/:id', (req, res) => {
  db.getListingsById(req.params.id)
    .then(dbRes => {
      dbRes[0].description = JSON.parse(dbRes[0].description)
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

// GET /api/v1/listings/id

// PUT api/v1/listing/:id
router.put('/:id', getTokenDecoder(), (req, res) => {
  const id = req.params.id
  const newListing = req.body
  db.updateListingById(id, newListing)
    .then(dbRes => {
      console.log(dbRes)
    })
})

module.exports = router
