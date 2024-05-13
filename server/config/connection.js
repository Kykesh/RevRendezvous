require('dotenv').config();  // Load environment variables from .env file at the start

const mongoose = require('mongoose');

// Retrieve MongoDB URI from environment variables
const mongoURI = process.env.MONGODB_URI;

// Check if the MongoDB URI is properly set
if (!mongoURI) {
    console.error("MongoDB URI is not set. Ensure MONGODB_URI is available in the environment variables.");
    process.exit(1);  // Exit the process with failure code
}

// Attempt to connect to MongoDB using the URI
mongoose.connect(mongoURI, {
    useNewUrlParser: true,     // Use the new URL parser instead of the deprecated one
    useUnifiedTopology: true   // Use the new Server Discover and Monitoring engine
}).then(() => {
    console.log("Successfully connected to MongoDB");  // Connection success message
}).catch(err => {
    console.error("Error connecting to MongoDB:", err);  // Log detailed error message if connection fails
});

// Export the MongoDB connection to be used in other parts of the application
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
