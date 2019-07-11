const express = require('express');
const router = express.Router();

//Users Database
const users = [];

router.get('/', (req, res, next) => {
  res.render('index', { title: 'Homepage' });
});

router.post('/', (req, res, next) => {
  users.push(req.body);
  res.redirect('/users');
});

exports.routes = router;
exports.users = users;
