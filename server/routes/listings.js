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

module.exports = router
