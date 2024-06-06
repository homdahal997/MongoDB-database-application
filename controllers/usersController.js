const bcrypt = require('bcrypt');
const User = require('../models/UserModel');
const { validationResult } = require('express-validator');
const mongoose = require('mongoose');

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser
};

async function createUser(req, res, next) {
  try {
    // Hash the password before saving the user
    const salt = 10;
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Create a new user with the hashed password
    const newUser = {
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
      type: req.body.type
    };
    const user = await User.create(newUser);
    //await user.save();

    res.status(200).json(user);
  } catch (err) {
    next(err)
  }
}

//Get all users
async function getUsers(req, res, next) {
  try {
    const users = await User.find({});

    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
}

// Get a single user by ID
async function getUserById(req, res,next) {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
}

// Update a single user by ID
async function updateUser(req, res,next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json(updatedUser);
  } catch (err) {
    next(err);
  }
}

// Delete a single user by ID
async function deleteUser(req, res) {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      message: 'Invalid user id',
    });
  }

  try {
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({
        message: 'User not found',
      });
    }

    await User.findByIdAndDelete(id);

    res.status(200).json({
      message: 'Successfully deleted the user',
    });
  } catch (err) {
    res.status(500).send(err);
  }
}
