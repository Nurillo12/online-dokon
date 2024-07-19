const path = require('path')
const fs = require('fs').promises

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

  let getUsers = await fs.readFile(path.join(__dirname, '../', 'blogdb', 'db.json'), 'utf-8')
  getUsers = JSON.parse(getUsers)

  const {email, password} = req.body
  if(!(email && password)) {
    throw new Error("Ma'lumot to'ldirilmadi")
  }
  let findByEmail = getUsers.find(user => user.email == email)
    if(!findByEmail) {
      throw new Error("Bunday email topilmadi!")
    }

    if(findByEmail.password != password) {
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