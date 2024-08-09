const http = require('node:http');

const port = 1245;

const app = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write('Hello Holberton School!');
  response.end();
}).listen(port);

module.exports = app;
