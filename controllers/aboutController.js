const getAboutPage = async(req, res) => {
  res.render('about', {
    title: 'About Page',
    sarlavha: 'About Page',
    path: '/about'
  })
}

module.exports = {
  getAboutPage
}