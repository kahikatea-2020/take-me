const path = require('path')
const express = require('express')

const server = express()
const categories = require('./routes/categories')


server.use('/api/v1/categories', categories)

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

module.exports = server
