const { Router } = require('express');
const usersCtrl = require('../controllers/usersController.js');

const router = Router();

router.post('/', usersCtrl.createUser);
router.get('/', usersCtrl.getUsers);

module.exports = router;
