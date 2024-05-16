import express  from 'express';
import artistModel from '../Models/artist.model.js';
export const ArtistController = express.Router();

ArtistController.get('/artists', async (req, res) => {
    const data = await artistModel.getAllArtists()
    res.send(data);
});

ArtistController.get('/artists/:id', async (req, res) => {
    const { id } = req.params;
    const data = await artistModel.getSingleArtist(id)
    res.send(data);
});