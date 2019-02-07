const router = require('express').Router();
const path = require('path');
const basePath = require('../utils/basePath');

const usersView = path.join(basePath, 'views', 'users.html');

router.get('/users', (req, res) => res.sendFile(usersView));
router.post('/users', (req, res) => {
  console.info(req.body);
  res.redirect(req.originalUrl);
});

module.exports = router;
