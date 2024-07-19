const path = require('path')
const fs = require('fs').promises

const getSignUpPage = async(req, res) => {
  res.render('signup', {
    title: 'Sign Up Page',
    sarlavha: 'Registration',
    path: '/signup',
    error: ""
  })
}

const postSignUpPage = async(req, res) => {
  // console.log(req.body);
try {
  const {email, password} = req.body

  if(!(email && password)) {
    throw new Error("Ma'lumot to'ldirilmagan")
  }

  const getUsers = await fs.readFile(path.join(__dirname, '../', 'blogdb', 'db.json'), 'utf-8')
 
 let allusers = JSON.parse(getUsers)
//  console.log(allusers);


// console.log(getUsers);
  let findUser = await allusers.find(user => user.email == email)
// console.log(getUsers);


  if(findUser) {
    throw new Error('Bu email allaqachon mavjud!') 
  }
  if(password.length < 8) {
    throw new Error('Parol uchun belgilar soni 8 tadan oshishi kerak!')
  }
  
const user = {
  email: email,
  password: password
}

allusers.push(user)
allusers = JSON.stringify(allusers)

await fs.writeFile(path.join(__dirname, '../', 'blogdb', 'db.json'), allusers, 'utf-8')

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