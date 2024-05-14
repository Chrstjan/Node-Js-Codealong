import express  from 'express';
import albumModel from '../Models/album.model.js';
export const AlbumController = express.Router();

AlbumController.get('/albums', async (req, res) => {
    const data = await albumModel.getAllAlbums()
    res.send(data);
})