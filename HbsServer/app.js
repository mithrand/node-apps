const express = require('express');

const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const hbsEngine = require('express-handlebars');
const requestLogger = require('./plugins/requestLogger');
const notFoundError = require('./plugins/notFoundError');

const mainRoutes = require('./routes/main');
const usersRoutes = require('./routes/users');

const dataService = require('./services/dataService');

// registering hbs as templace engine
app.engine(
  'hbs',
  hbsEngine({
    layoutsDir: 'HbsServer/views/layouts/',
    defaultLayout: 'master',
    extname: 'hbs',
  }),
);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({
  extended: false,
}));

app.use(express.static(path.join(__dirname, 'public')));

app.use(requestLogger);

app.use(mainRoutes);
app.use('/admin', usersRoutes);

app.use(notFoundError);

dataService
  .start()
  .then(() => app.listen(3000))
  .catch(error => console.error(error));