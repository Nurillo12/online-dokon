const db = require('../db')
const getSignInPage = async(req, res) => {
  res.render('signin', {
    title: 'Sign In Page',
    sarlavha: 'Login',
    path: '/signin',
    error: ""
  })
 
}

const postSignInPage = async(req, res) => {
  console.log(req.body);
try {
  const {email, password} = req.body
  let findByEmail = db.find(user => user.email == email)
  if(!(email && password)) {
    throw new Error("Ma'lumot to'ldirilmadi")
  }
    if(!findByEmail) {
      throw new Error("Bunday email topilmadi!")
    }
    let findByPassword = db.find(user => user.password == password)
    if(!findByPassword) {
      throw new Error("Parol xato kiritildi! ")
    }
    if(password.length < 8) {
      throw new Error('Parol uchun belgilar soni 8 tadan oshishi kerak!')
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