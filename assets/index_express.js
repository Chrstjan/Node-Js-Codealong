import express from "express";
import dotenv from 'dotenv';
import { SongController } from "./Controllers/song.controller.js";

const app = express();

dotenv.config();

const port = process.env.PORT;

app.use(SongController);

app.use((req, res) => {
  res.status(404).send("Siden blev ikke fundet");
});

app.listen(port, () => {
  console.log(`Webserver is running on http://localhost:${port}`);
});
