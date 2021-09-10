const { Router } = require('express');
const passport = require('passport');

const router = new Router();

router.post('/login',
  passport.authenticate('basic', {
    successRedirect: '/',
    failureRedirect: 'http://localhost:4200/auth/login'
  }),
);

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
