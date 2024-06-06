const Post = require('../models/postModel')

module.exports = {
    createPost,
};

async function createPost(req, res) {
    try {

        const post = new Post(req.body);

        await post.save();

        res.status(200).json(post);
    } catch (err) {
        res.status(400).json(err);
    }
}