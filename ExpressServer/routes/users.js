const router = require('express').Router();
const basePath = require('../utils/basePath');
const path = require('path');

const usersView = path.join(basePath,'views','users.html');

router.get('/users', (req, res, next) => res.sendFile(usersView));
router.post('/users', (req, res, next) => {
  console.log(req.url);
  res.redirect(path.join(req.baseUrl,req.url));
});

module.exports = router;