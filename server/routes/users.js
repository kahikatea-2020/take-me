const express = require('express')
const router = express.Router()

const db = require('../db/profiles')

router.get('/:id', (req, res) => {
  db.getUserById(req.params.id)
    .then(dbRes => {
      res.send(dbRes)
    })
})

router.get('/username/:username', (req, res) => {
  db.getUserDetails(req.params.username)
    .then(dbRes => {
      res.send(dbRes)
    })
})

module.exports = router
