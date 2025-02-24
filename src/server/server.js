// Define the port number the server will listen on
const PORT = process.env.PORT || 8081;

// Import required modules
const express = require("express"); // Express framework for building the server
const bodyParser = require("body-parser"); // Middleware for parsing request bodies
const cors = require("cors"); // Middleware for enabling CORS
const path = require("path"); // Module for working with file and directory paths

// Create an instance of an Express application
const app = express();

// Configure bodyParser to handle URL-encoded and JSON request bodies
app.use(bodyParser.urlencoded({ extended: false })); // Parses URL-encoded bodies
app.use(bodyParser.json()); // Parses JSON bodies

// Enable CORS for all origins
app.use(cors());

// Serve static files from the "dist" directory
app.use(express.static(path.join(__dirname, "dist"))); // Use path.join for cross-platform compatibility

// Log the directory name where this file is located
console.log("Current directory:", __dirname);

// Handle GET requests to the root URL by serving the index.html file
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "dist", "index.html")); // Send the index.html file from the "dist" folder
});

// Handle an example endpoint for demonstration purposes
app.get("/some-endpoint", (req, res) => {
  res.status(200).send("Some response"); // Adjust the response as needed
});

// Only start the server if not in test mode
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`); // Log a message when the server starts
  });
}

// Export the app for testing purposes
module.exports = app;
