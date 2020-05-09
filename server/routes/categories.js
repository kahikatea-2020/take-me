const express = require('express')

const db = require('../db/categories')

const router = express.Router()

router.get('/', (req, res) => {
  return db.getAllCategory()
    .then(categories => res.status(200).json(categories))
})

router.get('/:id', (req, res) => {
  db.getListingsByCategoryId(req.params.id)
    .then(listings => {
      listings[0].description = JSON.parse(listings[0].description)
      listings[0].imageUrl = JSON.parse(listings[0].imageUrl)
      res.send(listings)
    })
})

module.exports = router
