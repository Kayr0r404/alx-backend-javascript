const http = require('http');

// Create the server and assign it to the variable app
const app = http.createServer((req, res) => {
    res.statusCode = 200; // Set the status code to 200 (OK)
    res.setHeader('Content-Type', 'text/plain'); // Set the content type to plain text
    res.end('Hello Holberton School!'); // Send the response text
});

// Make the server listen on port 1245
app.listen(1245, () => {
    console.log('Server listening on port 1245');
});

// Export the app variable
module.exports = app;
