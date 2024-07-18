const getSignUpPage = async(req, res) => {
  res.render('signup', {
    title: 'Sign Up Page',
    sarlavha: 'Registration',
    path: '/signup'
  })
}

module.exports = {
  getSignUpPage
}