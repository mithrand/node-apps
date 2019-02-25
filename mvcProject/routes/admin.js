const router = require('express').Router();

router.get('/add-product', adminController.getAddProduct);
router.get('/products', adminController.getProducts);
router.get('/edit-product/:productId', adminController.getAddProduct);

module.exports = router;
