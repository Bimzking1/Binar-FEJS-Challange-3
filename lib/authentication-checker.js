module.exports = {
    isUserAuthenticated: (req, res, next) => {
      if ( req.isAuthenticated() ) {
        
        next()
      } else {
        res.redirect('/')
      }
    },
    isUserNotAuthenticated: (req, res, next) => {
      if ( !req.isAuthenticated() ) {
        next()
      } else {
        res.redirect('/dashboard')
      }
    }
  }