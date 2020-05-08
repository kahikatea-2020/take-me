const express = require('express')
const router = express.Router()

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

// DELETE /api/v1/listings/id
router.delete('/:id', (req, res) => {
  db.deleteListingsById(Number(req.params.id))
    .then(dbRes => {
      if (dbRes) res.redirect('/')
      else res.sendStatus(500)
    })
})

module.exports = router
