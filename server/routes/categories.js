const express = require('express')

const db = require('../db/categories')

const router = express.Router()

router.get('/', (req, res) => {
  return db.getAllCategory()
    .then(categories => res.status(200).json(categories))
})

// GET api/v1/categories/:id
router.get('/:id', (req, res) => {
  const { id } = req.params.id
  return db.getListingsByCategoryId(id)
    .then(listings => res.status(200).json(listings))
})

module.exports = router
