const express = require('express')
const router = express.Router()

const db = require('../db/comments')

// GET /api/v1/comments/:id
router.get('/:id', (req, res) => {
  db.getCommentsById(Number(req.params.id))
    .then(dbRes => res.json(dbRes))
})

// POST /api/v1/comments/add
router.post('/add', (req, res) => {
  const { comment, userId, listingId } = req.body
  const date = new Date(Date.now()).toString()
  const data = {
    comment,
    date,
    userId,
    listingId
  }
  db.addComment(data)
    .then(id => {
      console.log(id)
      res.status(200).json({ ok: true })
    })
    .catch(err => console.log(err.message))
})

module.exports = router
