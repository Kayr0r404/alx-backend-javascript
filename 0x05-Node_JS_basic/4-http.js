const http = require('http');

const app = http.createServer(function (request, response) {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain'); // Set the content type to plain text
  response.end('Hello Holberton School!');
});

app.listen(1245, () => {
  console.log(`server listening on port ${1245}`);
});

module.exports = app;
