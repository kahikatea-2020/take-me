const express = require('express')
const router = express.Router()

const db = require('../db/comments')

router.get('/:id', (req, res) => {
  db.getCommentsById(Number(req.params.id))
    .then(dbRes => dbRes)
})
