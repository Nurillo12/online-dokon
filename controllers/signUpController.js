const db = require('../db')

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
  // console.log(db);
  if(!(email && password)) {
    throw new Error("Ma'lumot to'ldirilmagan")
  }
  let findUser = db.find(user => user.email == email)
  console.log(findUser);
  if(findUser) {
    throw new Error('Bu email allaqachon mavjud!') 
  }

  

db.push(req.body)

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