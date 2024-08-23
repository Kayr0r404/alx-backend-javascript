const http = require('http');
const fs = require('fs');

const port = 1245;
const host = 'localhost';

const countStudents = (file) => new Promise((resolve, reject) => {
  if (!file) {
    reject(new Error('Cannot load the database'));
  }
  if (file) {
    fs.readFile(file, 'utf-8', (err, data) => {
      const newData = [];
      const arrayOfFields = [];
      const report = ['This is the list of our students'];

      data.split('\n').forEach((element) => {
        if (element !== '') {
          newData.push(element.split(','));
        }
      });
      for (let i = 1, indexOfField = newData[0].indexOf('field'); i < newData.length; i += 1) {
        if (!arrayOfFields.includes(newData[i][indexOfField])) {
          arrayOfFields.push(newData[i][indexOfField]);
        }
      }
      report.push(`Number of students: ${newData.length - 1}`);
      arrayOfFields.forEach((element) => {
        const list = [];
        newData.forEach((e) => {
          const indexofFirstName = newData[0].indexOf('firstname');
          if (e.includes(element)) list.push(e[indexofFirstName]);
        });
        report.push(`Number of students in ${element}: ${list.length}. List: ${list.join(', ')}`);
      });
      resolve(report);
    });
  }
});

const database = process.argv.length > 2 ? process.argv[2] : '';

const requestListner = (request, response) => {
  response.writeHead(200, { 'content-Type': 'text/csv' });
  switch (request.url) {
    case '/students':
      countStudents(database).then((results) => {
        const resultTxt = results.join('\n');
        response.end(resultTxt);
      }).catch((error) => {
        response.end(error.message);
      });
      break;
    default:
      response.end('Hello Holberton School!');
      break;
  }
};

const app = http.createServer(requestListner);

app.listen(port, host, () => {
  console.log(`Server listening on port ${'localhost'}:${port}`);
});

module.exports = app;
