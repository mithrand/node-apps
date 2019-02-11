const router = require('express').Router();
const dataService = require('../services/dataService');

router.get('/', (req, res) => res.render('main', {
  pageTitle: 'My Pug User App!!',
  users: dataService.getUsers(),
  req,
}));

module.exports = router;