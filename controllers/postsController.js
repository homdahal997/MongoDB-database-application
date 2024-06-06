const Post = require('../models/postModel')

module.exports = {
    createPost,
    getPosts,
    getPostById,
    updatePost,
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


// Update a single posy by ID
async function updatePost(req, res) {
    try {
        const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });

        res.status(200).json(updatedPost);
    } catch (err) {
        res.status(400).send(err);
    }
}