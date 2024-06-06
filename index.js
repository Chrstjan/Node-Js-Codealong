import express from "express";
import dotenv from "dotenv";
import { SongController } from "./Controllers/song.controller.js";
import { AlbumController } from "./Controllers/album.controller.js";
import { ArtistController } from "./Controllers/artist.controller.js";
import { ProfileController } from "./Controllers/profile.controller.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Velkommen til SingOnline sangbog");
});

app.use(SongController);
app.use(AlbumController);
app.use(ArtistController);
app.use(ProfileController);

app.use((req, res) => {
  res.status(404).send("Siden blev ikke fundet");
});

// app.listen(port, () => {
//   console.log(`Webserver is running on http://localhost:${port}`);
// });

export default app;
