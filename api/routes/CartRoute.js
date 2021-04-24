const express = require('express');
const router = express.Router();
const CartController = require('../controllers/CartController');

router.post('/add', CartController.add);

router.get('/:account_id', CartController.getById);

module.exports = router;