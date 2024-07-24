const { postModel } = require('../userblogdb/userdb')

async function deletePostMethod(req, res) {
  const {id} = req.params
 
  await postModel.findByIdAndDelete(id)

   // let findUser = await postModel.findById(id)
  // console.log(findUser);
    // console.log(req.params.id);

  res.redirect('/profile')
}

module.exports = {
  deletePostMethod
}