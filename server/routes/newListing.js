const express = require('express')

const db = require('../db/categories')

const router = express.Router()

router.use(express.urlencoded())

router.post('api/v1/listing/new', (req,res) => {
  const {name, description, imageUrl, userId, categoryId} = req.body
  db.addListing({name, description, imageUrl, userId, categoryId})
  .then(() =>res.redirect('/'))
})