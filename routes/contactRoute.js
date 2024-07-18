const express = require('express')
const router = express.Router()
const {getContactPage} = require('../controllers/contactController')

router.get('/', getContactPage)

/* router.get('/info', (req, res) => {
  res.send("Ma'lumotlar sahifasiga xush kelibsiz!!!")
}) */

module.exports = {
  path: '/contact',
  router: router
}

// /about/info