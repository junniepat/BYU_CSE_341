//TA03 PLACEHOLDER
const express = require('express');
const router = express.Router();


let items = "";
const request = require("request");
request('https://byui-cse.github.io/cse341-course/lesson03/items.json', (error, response, body) => {
  items = JSON.parse(body);
});

console.log(items);

router.get('/', (req, res, next) => {
  res.render('pages/ta03', {
    title: 'Team Activity 03',
    path: '/ta03', // For pug, EJS
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS
    items: items
  });
});


router.post('/search', (req, res, next) => {
  const searchText = req.body.searchText;
  console.log(items);

  const result = Object.values(items).filter(word => word.name === searchText);
  console.log(result)

  res.render('pages/ta03', {
    title: 'Team Activity 03',
    path: '/ta03', // For pug, EJS
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS
    items: result
  });
})

module.exports = router;
