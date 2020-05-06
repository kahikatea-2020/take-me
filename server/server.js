const path = require('path')
const express = require('express')

const server = express()

const listings = require('././routes/listings')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

// Routes
server.use('api/v1/listings', listings)

module.exports = server
