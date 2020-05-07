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
  db.getListingsById(req.params.id)
    .then(dbRes => {
      res.send(dbRes)
    })
})

// GET /api/v1/listings/new
router.post('/api/v1/listing/new', (req,res) => {
  const {name, description, imageUrl, userId, categoryId} = req.body
  db.addListing({name, description, imageUrl, userId, categoryId})
  .then((id) =>res.redirect('/api/v1/listings/id'))
})

module.exports = router
