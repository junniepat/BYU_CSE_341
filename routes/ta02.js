//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself!
const express = require('express');
const router = express.Router();
const app = express();

const arrayOfUsers = ['Darcee', 'Brandon', 'Smith'];


router.get('/', (req, res, next) => {
  res.render('pages/ta02', {
    title: 'Team Activity 02',
    users: arrayOfUsers,
    path: '/ta02', // For pug, EJS
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS
  });
});


router.post('/addUser', (req, res, next) => {
  const newUser = req.body.newUser;
  console.log('newUser', req);
// add new user
  arrayOfUsers.push(newUser);
  res.redirect('/ta02/');
});


router.post('/removeUser', (req, res, next) => {
  const removeUser = req.body.removeUser;
  // remove user from the array
  const index = arrayOfUsers.indexOf(removeUser);
  if (index !== -1) {
    arrayOfUsers.splice(index, 1);
  }
  else {
    alert("User name does not exist")
  }

  res.redirect('/ta02/');
});


app.use("/", router);
module.exports = router;
