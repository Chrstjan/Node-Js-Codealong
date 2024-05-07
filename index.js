import http from 'http';

const port = 4000;

http.createServer((req, res) => {
    console.log(`Webserver is now running on http://localhost:${port}`);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello world');
    res.end();
}).listen(port)

console.log(`Server is initialized on http://localhost:${port}`);