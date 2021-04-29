const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/OrderController');

router.post('/create', OrderController.add);

router.get('/:account_id', OrderController.getByAccountId);
router.get('/user/:order_id', OrderController.getByOrderId);

router.delete('/:order_id', OrderController.delete);

module.exports = router;