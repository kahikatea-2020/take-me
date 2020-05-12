const express = require('express')
const { getTokenDecoder } = require('authenticare/server')

const router = express.Router()

const db = require('../db/profiles')

router.get('/getuser', getTokenDecoder(), (req, res) => {
  const u = req.user
  const user = {
    id: u.id,
    username: u.username,
    firstName: u.first_name,
    lastName: u.last_name,
    email: u.email,
    phoneNumber: u.phone_number,
    imageUrl: u.image_url,
    location: u.location
  }
  res.json(user)
})

router.get('/:id', (req, res) => {
  db.getUserById(req.params.id)
    .then(dbRes => {
      res.send(dbRes)
    })
})

// PUT /api/v1/users/edit
router.put('/edit', (req, res) => {
  const userData = req.body
  db.editUser(userData)
    .then(dbRes => {
      console.log(dbRes)
      res.send({ ok: true })
    })
})

module.exports = router
