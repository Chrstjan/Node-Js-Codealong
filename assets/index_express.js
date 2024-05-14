import express from "express";
import dotenv from 'dotenv';

import SongModel from "./Models/song.model.js";
import albumModel from "./Models/album.model.js";
import artistModel from "./Models/artist.model.js";

const app = express();

dotenv.config();

const port = process.env.PORT;

console.log(process.env.API_KEY);

app.get("/", (req, res) => {
  console.log(req.query);
  res.send("Forside");
});

app.get('/songs', async (req, res) => {
  const data = await SongModel.getAllRecords()
  console.log(data);
  res.send(data);
});

app.get('/artists', async (req, res) => {
  const data = await artistModel.getAllArtists()
  console.log(data);
  res.send(data);
})

app.get('/albums', async (req, res) => {
 const data = await albumModel.getAllAlbums()
 console.log(data);
 res.send(data);
});

app.post("/", (req, res) => {
  res.send("Endpoint til post");
});

app.get("/about", (req, res) => {
  res.send("Hvem er vi");
});

app.get("/work", (req, res) => {
  res.send("Hvad kan vi");
});

app.get("/find-us", (req, res) => {
  res.send("Find os");
});

app.get("/products", (req, res) => {
  res.send("Produkt liste");
});

app.get("/productDetails", (req, res) => {
  res.send("Produkt detailjer");
});

app.get("/categories", (req, res) => {
  res.send("kategorie liste");
});

app.get("/contact", (req, res) => {
  res.send("Kontakt side");
});

app.use((req, res) => {
  res.status(404).send("Siden blev ikke fundet");
});

app.listen(port, () => {
  console.log(`Webserver is running on http://localhost:${port}`);
});
