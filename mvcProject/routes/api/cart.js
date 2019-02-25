const router = require('express').Router();

router.get('/cart', shopController.getIndex);
router.post('/cart/:productId', shopController.getIndex);
router.delete('/cart/:productId', shopController.getIndex);

module.exports = router;
