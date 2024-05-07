import express from 'express';
const app = express();

const port = 3000;

app.get('/', (req, res) => {
    console.log(req.query);
    res.send('Forside');
})

app.post('/', (req, res) => {
    res.send('Endpoint til post');
})

app.get('/about', (req, res) => {
    res.send('Om side');
})

app.listen(port, () => {
    console.log(`Webserver is running on http://localhost:${port}`);
})