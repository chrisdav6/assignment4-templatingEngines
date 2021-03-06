const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const indexRoutes = require('./routes/index');
const usersRoutes = require('./routes/users');

//Use BodyParser
app.use(express.urlencoded({ extended: true }));

//Static Folder
app.use(express.static(path.join(__dirname, 'public')));

//Use EJS
app.set('view engine', 'ejs');

//Routes
app.use('/', indexRoutes.routes);
app.use('/users', usersRoutes);

//404 Page
app.get('*', (req, res, next) => {
  res.status(404).render('404', { title: 'Not Found', path: '' });
});

//Start Server
app.listen(port, () => {
  console.log(`Server started on port number ${port}`);
});