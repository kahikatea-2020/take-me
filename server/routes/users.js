const express = require('express')
const { getTokenDecoder } = require('authenticare/server')

const router = express.Router()

const db = require('../db/profiles')

router.get('/getuser', getTokenDecoder(), (req, res) => {
  db.getUserById(req.user.id)
    .then(dbRes => {
      res.send(dbRes)
    })
})

router.get('/:id', (req, res) => {
  db.getUserById(req.params.id)
    .then(dbRes => {
      res.send(dbRes)
    })
})

// PUT /api/v1/users/edit
router.put('/edit', getTokenDecoder(), (req, res) => {
  const userData = req.body
  if (req.user.id === Number(userData.id)) {
    db.editUser(userData)
      .then(dbRes => {
        res.send({ ok: true })
      })
  } else {
    res.sendStatus(401)
  }
})

module.exports = router
