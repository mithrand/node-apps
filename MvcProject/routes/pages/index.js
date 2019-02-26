const router = require('express').Router();

const shop = require('./shop');
const admin = require('./admin');

router.use(shop);
router.use('/admin', admin);

module.exports = router;