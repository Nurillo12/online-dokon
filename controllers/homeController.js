const getHomePage = async(req, res) => {
  res.render('index', {
    title: 'Home Page',
    sarlavha: 'Main Page',
    path: '/'
  })
}

module.exports = {
  getHomePage
}