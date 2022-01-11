//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself!
const express = require('express');
const router = express.Router();

const userArray = ['Darcee', 'Brandon', 'Smith'];


router.get('/', (req, res, next) => {
  res.render('pages/ta02', {
    title: 'Team Activity 02',
    users: userArray,
    path: '/ta02', // For pug, EJS
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS
  });
});


router.post('/addUser', (req, res, next) => {
  const newUser = req.body.newUser;
// add new user
  userArray.push(newUser);

  res.redirect('/ta02/');
});


router.post('/removeUser', (req, res, next) => {
  const remUser = req.body.remUser;

  // remove user from the array
  const index = userArray.indexOf(remUser);
  if (index !== -1) {
    userArray.splice(index, 1);
  }

  res.redirect('/ta02/');
});

module.exports = router;
