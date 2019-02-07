const router = require('express').Router();
const { NOT_FOUND } = require('http-status-codes');
const path = require('path');
const basePath = require('../utils/basePath');

const notFoundView = path.join(basePath, 'views', '404.html');

const notFoundError = router.use((req, res) => res
  .status(NOT_FOUND)
  .contentType('text/html;')
  .sendFile(notFoundView));

module.exports = notFoundError;
