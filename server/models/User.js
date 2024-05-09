const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const paymentSchema = require('./Payments').schema; // Ensure to import the schema, not the model

const userSchema = new Schema({
  username: { 
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5
  },
  profileImage: { 
    type: String,
    required: false
  },
  motorcycleDetails: { 
    type: Object,
    required: true,
    properties: {
      type: { type: String, required: true },
      engineSize: { type: String, required: true }
    }
  },
  ridingExperience: {
    type: String,
    required: true
  },
  preferences: {
    type: String,
    required: false
  },
  payments: [paymentSchema] // Referencing payment schema directly instead of 'orders'
});

// Middleware to hash password before saving a user
userSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

// Method to compare the given password with the hashed password in the database
userSchema.methods.isCorrectPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema, 'Users'); 

module.exports = User;
