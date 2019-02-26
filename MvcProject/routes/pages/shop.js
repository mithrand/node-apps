const router = require('express').Router();
const shopController = require('../../controllers/pages/shopController');

router.get('/', shopController.index);
router.get('/products', shopController.products);
router.get('/cart', shopController.cart);
router.get('/orders', shopController.orders);
router.get('/products/:productId', shopController.productDetails);

module.exports = router;
