const router = require('express').Router();
const {
  NOT_FOUND,
} = require('http-status-codes');

const notFoundError = router.use((req, res) => res
  .status(NOT_FOUND)
  .render('404', {
    req,
    pageTitle: '404',
    path: '404',
  }));

module.exports = notFoundError;