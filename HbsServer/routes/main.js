const router = require('express').Router();
const dataService = require('../services/dataService');

router.get('/', (req, res) => res.render('main', {
  pageTitle: 'My Pug User App!!',
  users: dataService.getUsers(),
  formsCSS: true,
  productCSS: true,
  activeMain: true,
  hasUsers: !!dataService.getUsers().length,
  req,
}));

module.exports = router;