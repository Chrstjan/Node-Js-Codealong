import http from 'http';

http.createServer((req, res) => {
    console.log("Server is running on http://localhost:4000");
}).listen(4000)

console.log('Server initialized on http://localhost:4000');