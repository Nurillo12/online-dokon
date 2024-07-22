const getContactPage = async(req, res) => {
  res.render('contact', {
    title: 'Contact Page',
    sarlavha: 'Contact Page',
    username: req?.user?.username,
    path: '/contact',
    error: ""
  })
}

module.exports = {
  getContactPage
}