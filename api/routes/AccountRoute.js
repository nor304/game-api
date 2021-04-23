const express = require('express');
const router = express.Router();
const AccountController = require('../controllers/AccountController');

router.post('/register', AccountController.register);
router.post('/authenticate', AccountController.login);

router.get('/', AccountController.getAll);
router.get('/:account_id', AccountController.getById);

module.exports = router;