const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');

const app = express();

const notFoundError = require('./plugins/notFoundError');

const mainRoutes = require('./routes/admin');
const usersRoutes = require('./routes/shop');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
);
app.use(express.static(path.join(__dirname, 'public')));

app.use(mainRoutes);
app.use('/admin', usersRoutes);

app.use(notFoundError);

app.listen(3000);
