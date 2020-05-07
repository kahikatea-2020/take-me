const express = require('express')
const { applyAuthRoutes } = require('authenticare/server')

const {
  userExists,
  createUser,
  getUserById
} = require('../db/users')

const router = express.Router()

applyAuthRoutes(router, {
  userExists,
  createUser,
  getUserById
})

module.exports = router
