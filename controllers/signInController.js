const getSignInPage = async(req, res) => {
  res.render('signin', {
    title: 'Sign Up Page',
    sarlavha: 'Login',
    path: '/signin'
  })
}

module.exports = {
  getSignInPage
}