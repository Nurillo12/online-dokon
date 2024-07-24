const {postModel} = require('../userblogdb/userdb')

const getAddPost = async(req, res) => {
 
  if(req?.cookies.token) {
    res.render('addpost', {
      title: 'Add Page',
      sarlavha: 'Add Page',
      path: '/addpost',
      username: req?.user?.username,
      error: ""
    })
  }
 
}

const postAddMethod = async(req, res) => {
  console.log(req.body);
  try {
    const {mahsulot, tavsif, rasm, narx} = req.body
    if(!(mahsulot && tavsif && rasm && narx)) {
      throw new Error("Ma'lumot to'ldirilmadi!")
    }
let post = {
  mahsulot: mahsulot,
  tavsif: tavsif,
  rasm: rasm,
  narx: narx
}

await postModel.create(post)
res.redirect('/profile')
  } catch (error) {
    res.render('addpost', {
      title: 'Add Page',
      sarlavha: 'Add Page',
      path: '/addpost',
      username: req?.user?.username,
      error: error
    })
  }
}

module.exports = {
  getAddPost,
  postAddMethod
}