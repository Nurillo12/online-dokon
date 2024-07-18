const express = require('express')
const app = express()
const ejs = require('ejs')
const path = require('path')
const homeRoute = require('./routes/homeRoute')
const aboutRoute = require('./routes/aboutRoute')
const contactRoute = require('./routes/contactRoute')
const signInRoute = require('./routes/signInRoute')
const signUpRoute = require('./routes/signUpRoute')
const {notFound} = require('./controllers/notFoundController')
// const notFoundRoute = require('./routes/notFoundRoute')
require('dotenv').config()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const PORT = process.env.PORT
// console.log(PORT);

// ejs Set
app.set('view engine', 'ejs')

app.use(homeRoute.path, homeRoute.router)
app.use(aboutRoute.path, aboutRoute.router)
app.use(contactRoute.path, contactRoute.router)
app.use(signInRoute.path, signInRoute.router)
app.use(signUpRoute.path, signUpRoute.router)

app.use(notFound)

app.listen(PORT, () => {
  console.log(`Server is running at {PORT}`);
})