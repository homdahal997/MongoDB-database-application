// Require connection file to connect
const mongoose = require('./db-connection.js');
// Require Models for delete and create operations
const User = require('../models/UserModel.js');
const Post = require('../models/postModel.js');
const Comment = require('../models/commentModel.js')


const users = [
    {
        "username": "alice_johnson",
        "email": "alice.johnson@example.com",
        "password": "securepassword1",
        "type": "author"
    },
    {
        "username": "bob_smith",
        "email": "bob.smith@example.com",
        "password": "securepassword2",
        "type": "user"
    },
    {
        "username": "carol_white",
        "email": "carol.white@example.com",
        "password": "securepassword3",
        "type": "author"
    },
    {
        "username": "david_brown",
        "email": "david.brown@example.com",
        "password": "securepassword4",
        "type": "user"
    },
    {
        "username": "eve_davis",
        "email": "eve.davis@example.com",
        "password": "securepassword5",
        "type": "author"
    }
];


const posts = [
    {
        "title": "Understanding JavaScript Closures",
        "content": "JavaScript closures are a fundamental concept that every JavaScript developer should understand...",
        "author_id": "60c72b2f9b1e8b001c8e4c0d",
        "image_url": "https://placehold.co/600x400"
    },
    {
        "title": "A Guide to CSS Grid",
        "content": "CSS Grid is a powerful layout system available in CSS...",
        "author_id": "60c72b319b1e8b001c8e4c0e",
        "image_url": "https://placehold.co/600x400"
    },
    {
        "title": "Introduction to MongoDB",
        "content": "MongoDB is a popular NoSQL database that stores data in JSON-like format...",
        "author_id": "60c72b2f9b1e8b001c8e4c0d",
        "image_url": "https://placehold.co/600x400"
    },
    {
        "title": "Async/Await in JavaScript",
        "content": "Async/Await makes asynchronous code look and behave a little more like synchronous code...",
        "author_id": "60c72b319b1e8b001c8e4c0e",
        "image_url": "https://placehold.co/600x400"
    },
    {
        "title": "Mastering Python Generators",
        "content": "Generators in Python are a simple way of creating iterators...",
        "author_id": "60c72b2f9b1e8b001c8e4c0d",
        "image_url": "https://placehold.co/600x400"
    }
];

const comments = [
    {
        "post_id": "60c72b319b1e8b001c8e4c0e",
        "author_id": "60c72b2f9b1e8b001c8e4c0d",
        "content": "Great article on JavaScript closures!",
        
    },
    {
        "post_id": "60c72b2f9b1e8b001c8e4c0d",
        "author_id": "60c72b319b1e8b001c8e4c0e",
        "content": "Very informative post on CSS Grid.",
       
    },
    {
        "post_id": "60c72b2f9b1e8b001c8e4c0d",
        "author_id": "60c72b319b1e8b001c8e4c0e",
        "content": "Thanks for the MongoDB introduction!",
       
    },
    {
        "post_id": "60c72b319b1e8b001c8e4c0e",
        "author_id": "60c72b2f9b1e8b001c8e4c0d",
        "content": "Good read on async/await in JavaScript.",
        
    },
    {
        "post_id": "60c72b2f9b1e8b001c8e4c0d",
        "author_id": "60c72b319b1e8b001c8e4c0e",
        "content": "I learned a lot about Python generators.",
       
    }
];

async function seed() {
    try {
        await Post.deleteMany({});
        await User.deleteMany({});
        await Comment.deleteMany({});

        const createdUsers = await User.create(users);
        console.log('Users: ', createdUsers);

        const createdPosts = await Post.create(posts);
        console.log('Posts: ', createdPosts);

        const createdComments = await Comment.create(comments);
        console.log('Posts: ', createdComments);
        await mongoose.connection.close();
    } catch (err) {
        console.log(err);
    }
}

seed();