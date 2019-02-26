const router = require('express').Router();
const productsController = require('../../controllers/api/productsController');

router.post('/products', productsController.addProduct);
router.post('/products/:productId/delete', productsController.deleteProduct);


module.exports = router;
