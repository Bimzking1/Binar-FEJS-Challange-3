const bcrypt = require('bcrypt')

global.users = [
  {
    id: 84758945398454395,
    username: 'username',
    password: 'password'
    // password: bcrypt.hash('password', 10)
  }
]

// Import express
const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()
const routers = require('./routers')

// Module untuk autentikasi
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')

// setup view engine
app.set('view engine', 'ejs')

// setup ejs-layouts
app.use(expressLayouts)

app.use(express.urlencoded({ extended: false})) // untuk mengirim data dari form melalui parameter req
app.use(express.json())

// Middleware untuk autentikasi & session
app.use(flash())
app.use(session({
  secret: 'fejsbinar',
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())

// default path (route)
app.use( (req, res, next) => {
  req.app.set('layout','layouts/default')
  next()
})

// setup public folder
app.use(express.static('public'))

// dashboard page
app.get('/', (req,res) => res.render('index'))

app.use('/auth', routers.auth);

app.get('/dashboard/', function(req, res) {
    var totalRows = 10;

    res.render('dashboard', {
      totalRows: totalRows
    });
})

// listcar page
app.get('/car/', function(req, res) {
    var cars = [
      { price: '450.000', updated: "25 Mar 2022, 09.00" }
    ];
    var total = 10;

    res.render(
      'car/listcar', {
      cars: cars,
      total: total,
    });
})

// addnewcar page
app.get('/car/addnewcar', function(req, res) {
    res.render(
      'car/addnewcar', {
    });
})

app.post('/logout', (req,res) => {
  req.logout()
  res.redirect('/auth/login')
})

app.listen(1500, () => {
    console.log('Serve');
})