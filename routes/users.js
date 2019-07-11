const express = require('express');
const router = express.Router();

//Import users database
const users = require('../routes/index');

router.get('/', (req, res, next) => {
  res.render('users', { users: users.users, title: 'Users', path: '/users' });
});

router.post('/delete', (req, res, next) => {
  const userToDelete = req.body.deleteUser;
  for (let i = 0; i < users.users.length; i++) {
    if (users.users[i].user == userToDelete) {
      users.users.splice(i, 1);
    }
  }
  res.redirect('/users');
});

module.exports = router;
