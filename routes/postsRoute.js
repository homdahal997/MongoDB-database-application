const { Router } = require('express');
const postsCtrl = require('../controllers/postsController');

const router = Router();

router.post('/', postsCtrl.createPost);


module.exports = router;
