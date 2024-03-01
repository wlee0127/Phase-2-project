const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // Read the JSON file
    fs.readFile('./db.json', 'utf8', (err, data) => {
        if (err) {
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('Internal Server Error');
            return;
        }
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(data);
    });
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

