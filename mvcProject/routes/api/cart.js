const router = require('express').Router();
const cartController = require('../../controllers/api/cartController');

router.post('/cart', cartController.addToCart);
router.post('/cart/:productId/delete', cartController.deleteProduct);

module.exports = router;
