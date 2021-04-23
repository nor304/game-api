const express = require('express');
const router = express.Router();
const GameController = require('../controllers/GameController');

router.get('/', GameController.getAll);
router.get('/:game_id', GameController.getById);

module.exports = router;