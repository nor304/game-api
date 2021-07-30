const express = require('express');
const router = express.Router();
const CartController = require('../controllers/CartController');

router.post('/add', CartController.add);

router.get('/:account_id', CartController.getById);

router.get('/total_amount/:account_id', CartController.getTotal);

router.delete('/:game_id', CartController.delete);

module.exports = router;