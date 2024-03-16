const mongoose = require('mongoose');

// Define a schema that maps to the structure of the data in MongoDB
const imageSchema = new mongoose.Schema({ 
    title: String, 
    description: String, 
    location: {  
        iso: String,
        country: String,
        city: String,
        citycode: Number,
        continent: String,
        latitude: Number,
        longitude: Number
    },
    user: { 
        userid: Number, // Note the correction: 'Number' instead of 'number'
        firstname: String,
        lastname: String
    },
    filename: String
});

module.exports = mongoose.model('Image', imageSchema, 'Images'); // Note: 'Images' as the collection name

