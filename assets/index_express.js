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
    res.send('Hvem er vi');
})

app.get('/work', (req, res) => {
    res.send('Hvad kan vi');
})

app.get('/find-us', (req, res) => {
    res.send('Find os');
})

app.get('/products', (req, res) => {
    res.send('Produkt liste');
})

app.get('/productDetails', (req, res) => {
    res.send('Produkt detailjer');
})

app.get('/contact', (req, res) => {
    res.send('Kontakt side');
})

app.listen(port, () => {
    console.log(`Webserver is running on http://localhost:${port}`);
})