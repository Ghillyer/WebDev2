const fs = require('fs');
const path = require('path');
const express = require('express');
const router = require('./scripts/stock-router.js');

// Create an express app
const app = express();

// Handle requests for static resources
app.use('/static', express.static(path.join(__dirname, 'public')));

// Set up route handling
router.handleAllStocks(app);
router.handleSingleSymbol(app);
router.handleNameSearch(app);

// Use express to listen to port
let port = process.env.PORT || 8080; // Use PORT environment variable if defined, otherwise use 8080
app.listen(port, () => {
    console.log("Server running at port= " + port);
});
