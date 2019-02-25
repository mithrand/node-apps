const router = require('express').Router();

const products = require('./products');
const cart = require('./cart');

router.use('/api', products);
router.use('/api', cart);

module.exports = router;
