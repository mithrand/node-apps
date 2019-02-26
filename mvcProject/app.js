const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');

const app = express();

const notFoundError = require('./plugins/notFoundError');

const routes = require('./routes');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
);

app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

app.use(notFoundError);

app.listen(3000);
