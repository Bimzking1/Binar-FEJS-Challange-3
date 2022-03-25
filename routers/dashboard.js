const express = require('express')
const router = express.Router()
const userController = require('../controllers/dashboard')

router.use( (req,res,next) => {
  req.app.set('layout', 'layouts/dashboard')  
  next()
})

router.get('/', userController.index )
// router.get('/profile', userController.profile )

module.exports = router