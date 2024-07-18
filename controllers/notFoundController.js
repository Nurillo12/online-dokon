const notFound = async(req, res, next) => {
  res.render('404', {
    title: 'Not Found Page',
    path: '/not',
    sarlavha: "Ma'lumot topilmadi!"
  })
  next()
}

module.exports = {
  notFound
}