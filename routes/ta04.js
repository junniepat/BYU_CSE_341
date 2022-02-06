//TA04 PLACEHOLDER
const express = require('express');
const { init } = require('express/lib/application');
const router = express.Router();

const initial = {
  style: 'red',
  counter: 0
}


router.post('/', initial);


router.get('/', (req, res, next) => {
  res.render('pages/ta04', {
    title: 'Team Activity 04',
    path: '/ta04', // For pug, EJS
    activeTA04: true, // For HBS
    contentCSS: true, // For HBS
  });
});



module.exports = router;
