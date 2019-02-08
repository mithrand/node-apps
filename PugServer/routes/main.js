const router = require('express').Router();
const path = require('path');
const basePath = require('../utils/basePath');

router.get('/', (req, res) => res.render('main'));

module.exports = router;