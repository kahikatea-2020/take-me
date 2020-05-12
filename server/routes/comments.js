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
  db.addCommentById
})

module.exports = router
