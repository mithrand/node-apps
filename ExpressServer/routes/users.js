const router = require('express').Router();
const basePath = require('../utils/basePath');
const path = require('path');

const usersView = path.join(basePath,'views','users.html');

router.get('/users', (req, res, next) => res.sendFile(usersView));
router.post('/users', (req, res, next) => {
  console.log(req.body);
  res.redirect(req.originalUrl);
})

module.exports = router;