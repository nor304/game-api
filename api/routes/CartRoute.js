const express = require('express');
const router = express.Router();
const CartController = require('../controllers/CartController');

router.post('/create', CartController.add);

router.get('/cart/:account_id', CartController.getById);

router.delete('/:game_id', CartController.delete);

module.exports = router;