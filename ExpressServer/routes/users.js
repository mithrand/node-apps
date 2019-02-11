const router = require('express').Router();
const path = require('path');
const basePath = require('../utils/basePath');
const dataService = require('../services/dataService');

const usersView = path.join(basePath, 'views', 'users.html');

router.get('/users', (req, res) => res.sendFile(usersView));
router.post('/users', (req, res) => {
  dataService.addUser(req.body);
  res.redirect(req.originalUrl);
});

module.exports = router;