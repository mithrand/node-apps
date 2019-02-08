const router = require('express').Router();
const path = require('path');
const basePath = require('../utils/basePath');

router.get('/users', (req, res) => res.render('users'));
router.post('/users', (req, res) => {
  console.info(req.body);
  res.redirect(req.originalUrl);
});

module.exports = router;