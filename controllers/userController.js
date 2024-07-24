const {postModel} = require('../userblogdb/userdb')

const getProfilePage = async(req, res) => {
  if(req?.cookies.token) {
    let posts = await postModel.find({})
    console.log(posts);
    res.render('profile', {
      title: 'About Page',
      sarlavha: 'About Page',
      username: req?.user?.username,
      path: '/profile',
      posts: posts,
      error: ""
    })
  }
}

module.exports = {
  getProfilePage
}