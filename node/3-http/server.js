const http = require('http');

const server = http.createServer((request, response) => {
console.log('REQUEST URL:', request.utl);

    response.end('Hello\n');
    response.write('data data data\n');
    response.end('See you!');
});
server.listen(8080, () => console.log('listening on port 8080'));
   