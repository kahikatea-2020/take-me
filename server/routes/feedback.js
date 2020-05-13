const express = require('express')
const router = express.Router()

const db = require('../db/feedback')

router.get('/:id', (req, res) => {
  db.getUserFeedback(Number(req.params.id))
    .then(dbRes => res.json(dbRes))
})

router.post('/add', (req, res) => {
  const { comment, userId } = req.body
  const date = new Date(Date.now()).toString()
  const data = {
    comment,
    date,
    userId
  }
  db.addFeedback(data)
    .then(() => {
      res.status(200).json({ ok: true })
    })
    .catch(err => console.log(err.message))
})

module.exports = router