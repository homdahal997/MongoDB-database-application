const bcrypt = require('bcrypt');
const User = require('../models/UserModel');

module.exports = {
  createUser,
};

async function createUser(req, res) {
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

    res.status(200).json(user);
  } catch (err) {
    if(err.name === "ValidationError"){
      const messages = Object.values(err.errors).map(val => val.message)
      res.status(400).json({ errors: messages });
    }else if (err.code === 11000) {
      // Handle duplicate key error- all uniques in schema
      res.status(400).json({ error: 'Duplicate field value entered' });
    } else {
      res.status(500).json({ error: 'Server error' });
    }
    
  }
}
