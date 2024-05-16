import express  from 'express';
import SongModel from '../Models/song.model.js';
export const SongController = express.Router();

SongController.get('/songs', async (req, res) => {
    const data = await SongModel.getAllRecords()
    res.send(data);
});

SongController.get('/songs/:id', async (req, res) => {
    const { id } = req.params;
    const data = await SongModel.getRecordById(id)
    res.send(data)
});

SongController.post('/songs', async (req, res) => {
    const data = await SongModel.createRecord(req.body)
    console.log(req.body);
    res.send(data);
});