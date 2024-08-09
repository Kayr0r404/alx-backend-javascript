const http = require('node:http');

const port = 1245;

const app = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type': 'text/plain');
  response.end('Hello Holberton School!');
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

module.exports = app;
