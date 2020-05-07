const express = require('express')
const router = express.Router()

const db = require('../db/listing')

// GET /api/v1/listings
router.get('/', (req, res) => {
  db.getListings()
    .then(dbRes => {
      res.send(dbRes)
    })
})

// GET /api/v1/listings/id
router.get('/:id', (req, res) => {
  const { id } = req.params
  db.getListingsById(id)
    .then(dbRes => {
      dbRes[0].description = JSON.parse(dbRes[0].description)
      res.send(dbRes)
    })
})

module.exports = router
