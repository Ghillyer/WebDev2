require('dotenv').config();
const express = require('express');
const app = express();

// Get the data model for images
const Image = require('./models/Images');

// Tell Express to use JSON and HTTP header features in body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Use the route handlers for images
const imageRouter = require('./handlers/imageRouter.js');
imageRouter.handleAllImages(app);
imageRouter.handleSingleImage(app);
imageRouter.handleImagesByCity(app);
imageRouter.handleImagesByCountry(app);

// Connect to the database
require('./handlers/dataConnector.js').connect();

const port = process.env.PORT || 8080; // Use the PORT from environment variables or default to 8080
app.listen(port, () => {
    console.log("Server running at port = " + port);
});



