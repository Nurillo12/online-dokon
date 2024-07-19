const {userModel} = require('../userblogdb/userdb')
const path = require('path')
const fs = require('fs').promises
const {confirmHash} = require('../crypt')

const getSignInPage = async(req, res) => {
  res.render('signin', {
    title: 'Sign In Page',
    sarlavha: 'Login',
    path: '/signin',
    error: ""
  })
 
}

const postSignInPage = async(req, res) => {
  // console.log(req.body);
try {

  const {email, password} = req.body
  if(!(email && password)) {
    throw new Error("Ma'lumot to'ldirilmadi")
  }
  let findByEmail = await userModel.findOne({email: email})
    if(!findByEmail) {
      throw new Error("Bunday email topilmadi!")
    }

    const confirmHashPassword = await confirmHash(password, findByEmail.password)
    console.log(confirmHashPassword);
    if(confirmHashPassword == false) {
      throw new Error("Parol xato kiritildi! ")
    }
   

    res.redirect('/')
} catch (error) {
  res.render('signin', {
    title: 'Sign In Page',
    sarlavha: 'Login',
    path: '/signin',
    error: error
  })
}



}

module.exports = {
  getSignInPage,
  postSignInPage
}