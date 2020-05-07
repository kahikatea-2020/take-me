const express = require('express')

const db = require('../db/categories')

const router = express.Router()

router.get('/', (req, res) => {
  return db.getAllCategory()
    .then(categories => res.status(200).json(categories))
})

module.exports = router
