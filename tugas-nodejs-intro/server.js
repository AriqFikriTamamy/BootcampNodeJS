const http = require('http');

const server = http.createServer((request, response) => {
    setTimeout(() => {
        response.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        response.end('Hello World!\n');
    }, 1000)
});

const port = 3000;

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})