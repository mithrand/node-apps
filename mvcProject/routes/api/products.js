const router = require('express').Router();

router.get('/products/:productId', adminController.getAddProduct);
router.post('/products/:productId', adminController.postAddProduct);
router.put('/products/:productId', adminController.postAddProduct);
router.delete('/products/:productId', adminController.postAddProduct);
router.get('/products', adminController.getAddProduct);

module.exports = router;
