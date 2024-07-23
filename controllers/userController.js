const getProfilePage = async(req, res) => {
  if(req?.cookies.token) {
    res.render('profile', {
      title: 'About Page',
      sarlavha: 'About Page',
      username: req?.user?.username,
      path: '/profile',
      error: ""
    })
  }
}

module.exports = {
  getProfilePage
}