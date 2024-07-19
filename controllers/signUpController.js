const {userModel} = require('../userblogdb/userdb')
const path = require('path')
const fs = require('fs').promises
const { v4: uuidv4 } = require('uuid');
const {generateHash} = require('../crypt')


const getSignUpPage = async(req, res) => {
  res.render('signup', {
    title: 'Sign Up Page',
    sarlavha: 'Registration',
    path: '/signup',
    error: ""
  })
}

const postSignUpPage = async(req, res) => {
  console.log(req.body);
try {
  const {email, password} = req.body

  if(!(email && password)) {
    throw new Error("Ma'lumot to'ldirilmagan")
  }

// Mongodb database
let findUser = await userModel.findOne({email: email})

  if(findUser) {
    throw new Error('Bu email allaqachon mavjud!') 
  }
  if(password.length < 8) {
    throw new Error('Parol uchun belgilar soni 8 tadan oshishi kerak!')
  }
  
// console.log(uuidv4);

const user = {
  user_id: uuidv4(),
  email: email,
  password: await generateHash(password)
}

await userModel.create(user)
res.redirect('/signin')

} catch (error) {
  res.render('signup', {
    title: 'Sign Up Page',
    sarlavha: 'Registration',
    path: '/signup',
    error: error
  })
}

 
}

module.exports = {
  getSignUpPage,
  postSignUpPage
}