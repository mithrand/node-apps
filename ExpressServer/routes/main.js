const router = require('express').Router();
const basePath = require('../utils/basePath');
const path = require('path');

const mainView = path.join(basePath,'views','main.html');

router.get('/', (req, res, next) => res.sendFile(mainView));

module.exports = router;