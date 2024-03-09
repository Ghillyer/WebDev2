const express = require('express');
const router = express.Router();

const provider = require('./data-provider.js');
const stocks = provider.data;


// error messages need to be returned in JSON format 
const jsonMessage = (msg) => { 
    return { message : msg }; 
   }; 


// Handle request for all stocks
const handleAllStocks = (app) => {
    app.get('/', (req, resp) => {
        resp.json(stocks);
    });
};

// Handle request for a single stock by symbol
const handleSingleSymbol = (app) => {
    app.get('/stock/:symbol', (req, resp) => {
        const symbolToFind = req.params.symbol.toUpperCase();
        const matches = stocks.filter(s => symbolToFind === s.symbol);
        if (matches.length > 0) { 
            resp.json(matches);
            } else { 
            resp.json(jsonMessage(`Symbol ${symbolToFind} not found`)); 
            }
        resp.json(matches);
    });
};

// Handle request for stocks by name substring
const handleNameSearch = (app) => {
    app.get('/stock/name/:substring', (req, resp) => {
        const substring = req.params.substring.toLowerCase();
        const matches = stocks.filter(s => s.name.toLowerCase().includes(substring));
        if (matches.length > 0) { 
            resp.json(matches);
            } else { 
            resp.json(jsonMessage( 
            `No symbol matches found for ${substring}`)); 
            }
        resp.json(matches);
    });
};

module.exports = {
    handleAllStocks,
    handleSingleSymbol,
    handleNameSearch
};
