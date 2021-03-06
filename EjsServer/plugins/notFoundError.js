const router = require('express').Router();
const {
  NOT_FOUND,
} = require('http-status-codes');

const notFoundError = router.use((req, res) => res
  .status(NOT_FOUND)
  .render('404', {
    req
  }));

module.exports = notFoundError;