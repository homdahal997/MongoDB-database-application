const { Router } = require('express');
const postsCtrl = require('../controllers/postsController');

const router = Router();

router.post('/', postsCtrl.createPost);
router.get('/', postsCtrl.getPosts);


module.exports = router;
