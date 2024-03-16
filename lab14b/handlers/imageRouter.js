const Image = require('../models/Images.js'); // Adjusted require statement for Images.js


// Retrieve all images
const handleAllImages = (app) => {
    app.get('/api/images', (req, resp) => {
        Image.find()
            .then((data) => {
                resp.json(data);
            })
            .catch((err) => {
                resp.json({ message: "Unable to retrieve images" });
            });
    });
};

// Retrieve a single image by ID
const handleSingleImage = (app) => {
    app.get("/api/images/:id", (req, resp) => {
        Image.findById(req.params.id)
            .then((data) => {
                resp.json(data);
            })
            .catch((err) => {
                resp.json({ message: "Unable to retrieve image" });
            });
    });
};

// Retrieve all images from a specific city
const handleImagesByCity = (app) => {
    app.get("/api/images/city/:city", (req, resp) => {
        const city = req.params.city;
        Image.find({ 'location.city': new RegExp(city, 'i') })
            .then((data) => {
                resp.json(data);
            })
            .catch((err) => {
                resp.json({ message: "Unable to retrieve images from specified city" });
            });
    });
};

// Retrieve all images from a specific country
const handleImagesByCountry = (app) => {
    app.get("/api/images/country/:country", (req, resp) => {
        const country = req.params.country;
        Image.find({ 'location.country': new RegExp(country, 'i') })
            .then((data) => {
                resp.json(data);
            })
            .catch((err) => {
                resp.json({ message: "Unable to retrieve images from specified country" });
            });
    });
};

module.exports = {
    handleAllImages,
    handleSingleImage,
    handleImagesByCity,
    handleImagesByCountry
};
