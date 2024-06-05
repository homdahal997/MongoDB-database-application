const { Router } = require('express');
const usersCtrl = require('../controllers/usersController.js');
const { check } = require('express-validator');

const router = Router();

router.post('/', usersCtrl.createUser);
router.get('/', usersCtrl.getUsers);
router.get('/:id', usersCtrl.getUserById);
router.put('/:id', [
    check('type').isIn(['author', 'user','Author', 'User']).withMessage('Type must be either "author" or "user"')
], usersCtrl.updateUser);
router.delete('/:id', usersCtrl.deleteUser);

module.exports = router;
