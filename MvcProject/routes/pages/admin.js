const router = require('express').Router();
const adminController = require('../../controllers/pages/adminController');

router.get('/', adminController.index);
router.get('/products/add', adminController.addProduct);
router.get('/products/:productId/edit', adminController.updateProduct);

module.exports = router;
