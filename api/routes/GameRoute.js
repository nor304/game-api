const express = require('express');
const router = express.Router();
const GameController = require('../controllers/GameController');

router.post('/create', GameController.add);

router.get('/', GameController.getAll);
router.get('/:game_id', GameController.getById);

router.delete('/:game_id', GameController.delete);

module.exports = router;