const Post = require('../models/postModel')

module.exports = {
    createPost,
    getPosts,
    getPostById,
};

// Creaate post 
async function createPost(req, res, next) {
    try {

        const post = new Post(req.body);

        await post.save();

        res.status(200).json(post);
    } catch (err) {
        next(err);
    }
}

// Get posts 
async function getPosts(req, res) {
    try {
        const posts = await Post.find({});

        res.status(200).json(posts);
    } catch (err) {
        res.status(400).send(err);
    }
}

// Get a single post by ID
async function getPostById(req, res, next) {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (err) {
        next(err);
    }
}
