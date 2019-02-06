const express = require('express');
const app = express();

const requestLogger = require('./plugins/requestLogger');
const notFoundError = require('./plugins/notFoundError');

const mainRoutes = require('./routes/main');
const users = require('./routes/users');

const dataService = require('./services/dataService');

app.use(requestLogger);

app.use(mainRoutes);

app.use('/admin',users);

app.use(notFoundError);

dataService.start()
  .then(() => app.listen(3000))
  .catch(error => console.error(error));
