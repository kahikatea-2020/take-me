const path = require('path')
const express = require('express')

const server = express()
const categories = require('./routes/categories')
const listings = require('././routes/listings')


server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

// Routes
server.use('/api/v1/listings', listings)
server.use('/api/v1/categories', categories)


module.exports = server
