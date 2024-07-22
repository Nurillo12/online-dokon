const getProfilePage = async(req, res) => {
  console.log(req.cookies.token);
  res.render('profile', {
    title: 'Profile Page',
    sarlavha: 'Profile Page',
    path: '/profile',
    username: req?.user?.username,
    error: ""
  })
}

module.exports = {
  getProfilePage
}