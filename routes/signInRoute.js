const express = require('express')
const router = express.Router()
const {getSignInPage} = require('../controllers/signInControllers')


router.get('/', getSignInPage)

module.exports = {
  path: '/signin',
  router: router
}