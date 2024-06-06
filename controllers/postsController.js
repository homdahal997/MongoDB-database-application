const Post = require('../models/postModel')

module.exports = {
    createPost,
    getPosts,
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