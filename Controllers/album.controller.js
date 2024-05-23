import express  from 'express';
import albumModel from '../Models/album.model.js';
export const AlbumController = express.Router();

AlbumController.get('/albums', async (req, res) => {
    const data = await albumModel.getAllAlbums()
    res.send(data);
})

AlbumController.get('/albums/:id', async (req, res) => {
    const { id } = req.params;
    const data = await albumModel.getSingleAlbum(id)
    res.send(data);
})

AlbumController.post('/albums', async (req, res) => {
    const data = await albumModel.createAlbum(req.body)
    res.send(data);
});