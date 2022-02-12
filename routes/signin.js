const { check, validationResult } = require('express-validator');

//TA04 PLACEHOLDER
const express = require('express');
const router = express.Router();
const signinController = require('../controllers/signin');


router.get('/', (req, res, next) => {
    res.render('pages/signin', {
      title: 'Login to Team files',
      path: '/signin', // For pug, EJS
      msgs: [],
      activeTA03: true, // For HBS
      contentCSS: true, // For HBS
      isLoggedIn: false,
      username: ""
    });
  });

router.get('/logout',(req, res, next) => {
    res.render('pages/signin', {
      title: 'Login to Team files',
      path: '/signin', // For pug, EJS
      msgs: [],
      activeTA03: true, // For HBS
      contentCSS: true, // For HBS
      isLoggedIn: false,
      username: ""
    });
  });

router.post('/login', [
    check('email', 'Email length should be 10 to 30 characters')
                    .isEmail().isLength({ min: 10, max: 30 }),
    check('password', 'Password length should be 8 to 15 characters')
                    .isLength({ min: 8, max: 15 })
], signinController.postSignin);

module.exports = router;