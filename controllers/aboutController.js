const getAboutPage = async(req, res) => {
  res.render('about', {
    title: 'About Page',
    sarlavha: 'About Page',
    username: req?.user?.username,
    path: '/about',
    error: ""
  })
}

module.exports = {
  getAboutPage
}