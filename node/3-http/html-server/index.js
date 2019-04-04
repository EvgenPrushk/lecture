const http = require('http');
const fs = require('fs');
const path = require('path');

const  server = http.createServer((Request, Response) => {
    const pathToHtmlFile = path.join(__dirname, 'index.html');
    fs.readFile(pathToHtmlFile, (err, file) => {
        Response.end(file);
    });
});

server.listen(8080, () => console.log('listening on 8080'));