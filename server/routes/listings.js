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

<<<<<<< HEAD
// GET /api/v1/listings/new
router.post('/api/v1/listing/new', (req,res) => {
  const {name, description, imageUrl, userId, categoryId} = req.body
  db.addListing({name, description, imageUrl, userId, categoryId})
  .then((id) =>res.redirect('/api/v1/listings/id'))
})

||||||| a5223e1
=======
// GET /api/v1/listings/id

>>>>>>> 3b217115fbdc8c25e62558d3ce060eb87535f50f
module.exports = router
