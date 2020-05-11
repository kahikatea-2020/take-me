const express = require('express')
const router = express.Router()
const request = require('superagent')

router.get('/:address', (req, res) => {
  var address = req.params.address
  return request.get(`https://api.addy.co.nz/search?key=4f135b24201b47b38c2f2fa2abd37204&max=10&s=${address}`)
    .then(apiRes => {
      res.json({ a: apiRes.body.addresses.a })
    })
    .catch(err => console.log(err.message))
})

module.exports = router
