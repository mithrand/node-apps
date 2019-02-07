const router = require('express').Router();
const path = require('path');
const basePath = require('../utils/basePath');

const mainView = path.join(basePath, 'views', 'main.html');

router.get('/', (req, res) => res.sendFile(mainView));

module.exports = router;
