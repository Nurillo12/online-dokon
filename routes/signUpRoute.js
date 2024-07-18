const express = require('express')
const router = express.Router()
const {getSignUpPage} = require('../controllers/signUpControllers')


router.get('/', getSignUpPage)

module.exports = {
  path: '/signup',
  router: router
}