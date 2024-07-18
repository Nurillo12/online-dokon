const getContactPage = async(req, res) => {
  res.render('contact', {
    title: 'Contact Page',
    sarlavha: 'Contact Page',
    path: '/contact'
  })
}

module.exports = {
  getContactPage
}