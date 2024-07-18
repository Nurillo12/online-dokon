const express = require('express')
const app = express()
// const path = require('path')
const ejs = require('ejs')

require('dotenv').config()

const PORT = process.env.PORT
// console.log(PORT);

// ejs Set
app.set('view engine', 'ejs')

app.get('/', (req, res) => {

})


app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Page',
    sarlavha: 'About Page',
    path: '/about'
  })
})

app.get('/contact', (req, res) => {
  res.render('contact', {
    title: 'Contact Page',
    sarlavha: 'Contact Page',
    path: '/contact'
  })
})

app.listen(PORT, () => {
  console.log(`Server is running at {PORT}`);
})