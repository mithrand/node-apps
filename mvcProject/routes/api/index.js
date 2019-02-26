const router = require('express').Router();

const products = require('./products');
const cart = require('./cart');

router.use(products);
router.use(cart);

module.exports = router;
