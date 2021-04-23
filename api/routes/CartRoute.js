const express = require('express');
const router = express.Router();
const CartController = require('../controllers/CartController');

router.post('/cart/:account_id/:game_id', CartController.add);

router.get('/cart/:account_id', CartController.getById);

module.exports = router;