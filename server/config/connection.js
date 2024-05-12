require('dotenv').config();  // This line should be at the very top of the file

const mongoose = require('mongoose');

const mongoURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/revrendezvous';

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Successfully connected to MongoDB"))
  .catch(err => console.error("Error connecting to MongoDB:", err));

module.exports = mongoose.connection;
