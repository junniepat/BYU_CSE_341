//TA04 PLACEHOLDER
const express = require('express');
const router = express.Router();
const ta04Controller = require('../controllers/ta04');

router.post('/change-style', ta04Controller.postStyle);

router.post('/counter', ta04Controller.postCounter);

router.post('/reset', ta04Controller.resetSession);

router.get('/', ta04Controller.getIndex);

module.exports = router;