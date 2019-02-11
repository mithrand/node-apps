const router = require('express').Router();
const dataService = require('../services/dataService');

router.get('/users', (req, res) => res.render('users', {
  pageTitle: 'Admin - Adding users',
  users: dataService.getUsers(),
  activeUsers: true,
  formsCSS: true,
  productCSS: true,
  req,
}));

router.post('/users', (req, res) => {
  dataService.addUser(req.body);
  res.redirect(req.originalUrl);
});

module.exports = router;