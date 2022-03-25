const express = require('express')
const router = express.Router()
const userController = require('../controllers/car')

router.use( (req,res,next) => {
  req.app.set('layout', 'layouts/car')  
  next()
})

router.get('/', userController.listcar )
router.get('/addnewcar', userController.addnewcar )
// router.get('/listcar/', userController.listcar )

module.exports = router