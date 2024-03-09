const fs = require('fs');
const path = require('path');
const express = require('express');

// Read JSON file contents synchronously
const file = 'stocks-simple.json';
const jsonPath = path.join(__dirname, 'data', file);
const jsonData = fs.readFileSync(jsonPath, 'utf8');
const stocks = JSON.parse(jsonData);

// Create an express app
const app = express();

// Define the API routes
// Return all the stocks when a root request arrives
app.get('/', (req, res) => {
    res.json(stocks);
});

// Use express to listen to port
const port = 8080;
app.listen(port, () => {
    console.log("Server running at port= " + port);
});

