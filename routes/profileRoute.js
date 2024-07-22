const express = require('express')
const router = express.Router()
const {getProfilePage} = require('../controllers/userController')


router.get('/', getProfilePage)

module.exports = {
  path: '/profile',
  router: router
}