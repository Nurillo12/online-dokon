const mongoose = require('mongoose')

async function connectDB() {
  console.log('mongodb connected...');
  mongoose.connect('mongodb://localhost:27017/nodeblog', {
   
  })
}

const userSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true
  },

  username: {
    type: String,
    required: true,
    unique: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
})

const userModel = mongoose.model('users', userSchema)

module.exports = {
  connectDB,
  userModel
}
