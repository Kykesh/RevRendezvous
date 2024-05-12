require('dotenv').config();  

const mongoose = require('mongoose');

const mongoURI = process.env.MONGODB_URI;

if (!mongoURI) {
    console.error("MongoDB URI is not set. Ensure MONGODB_URI is available in the environment variables.");
    process.exit(1);
}

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Successfully connected to MongoDB"))
  .catch(err => console.error("Error connecting to MongoDB:", err));

module.exports = mongoose.connection;

// require('dotenv').config();  

// const mongoose = require('mongoose');

// const mongoURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/revrendezvous';

// mongoose.connect(mongoURI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(() => console.log("Successfully connected to MongoDB"))
//   .catch(err => console.error("Error connecting to MongoDB:", err));

// module.exports = mongoose.connection;
