const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 8080;

// Load artists data from artists.json
const artistsDataPath = path.join(__dirname, 'data', 'artists.json');
const artistsData = JSON.parse(fs.readFileSync(artistsDataPath, 'utf8'));

// Route to return JSON for all artists
app.get('/api/artists', (req, res) => {
    res.json(artistsData);
});

// Route to return JSON for single artist with the supplied ArtistId
app.get('/api/artists/:id', (req, res) => {
    const artistId = req.params.id;
    const artist = artistsData.find(artist => artist.ArtistID === artistId);
    if (artist) {
        res.json(artist);
    } else {
        res.status(404).json({ error: 'Artist not found' });
    }
});

// Route to return JSON for all artists with the specified Nationality value (case insensitive)
app.get('/api/artists/nationality/:value', (req, res) => {
    const nationalityValue = req.params.value.toLowerCase();
    const matchingArtists = artistsData.filter(artist => artist.Nationality.toLowerCase() === nationalityValue);
    if (matchingArtists.length > 0) {
        res.json(matchingArtists);
    } else {
        res.status(404).json({ error: 'No artists found with the specified nationality' });
    }
});

// Route to return JSON for a single artist as per the artist-single.json file
app.get('/api/artists/single', (req, res) => {
    const artistSingleDataPath = path.join(__dirname, 'data', 'artist-single.json');
    const artistSingleData = JSON.parse(fs.readFileSync(artistSingleDataPath, 'utf8'));
    res.json(artistSingleData);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
