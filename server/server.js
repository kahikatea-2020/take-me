const path = require('path')
const express = require('express')

const server = express()
const categories = require('./routes/categories')
const listings = require('./routes/listings')
const authRoutes = require('./routes/auth')
const userRoutes = require('./routes/users')
const addy = require('./routes/addy')
const comments = require('./routes/comments')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

// Routes
server.use('/api/v1', authRoutes)
server.use('/api/v1/users', userRoutes)
server.use('/api/v1/listings', listings)
server.use('/api/v1/categories', categories)
server.use('/api/v1/addy', addy)
server.use('/api/v1/comments', comments)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

module.exports = server
