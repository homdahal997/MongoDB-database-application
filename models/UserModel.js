const { Schema, model } = require('../config/db-connection');

const userSchema = Schema({
  username:{
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 5
  },
  type: {
    type: String,
    enum: ['author','user'],
    required: true
  }
},
{ versionKey: false });

userSchema.index({ email: 1 });

module.exports = model('User', userSchema);
