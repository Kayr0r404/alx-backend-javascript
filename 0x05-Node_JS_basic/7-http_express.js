const fs = require('fs');
const express = require('express');

const app = express();
const database = process.argv.length > 2 ? process.argv[2] : '';

const countStudents = (file) => new Promise((resolve, reject) => {
  if (!file) {
    reject(new Error('Cannot load the database'));
  }

  fs.readFile(file, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    }

    const newData = [];
    const arrayOfFields = [];
    const report = ['This is the list of our students'];

    data.split('\n').forEach((element) => {
      if (element !== '') {
        newData.push(element.split(','));
      }
    });

    const indexOfField = newData[0].indexOf('field');
    for (let i = 1; i < newData.length; i += 1) {
      if (!arrayOfFields.includes(newData[i][indexOfField])) {
        arrayOfFields.push(newData[i][indexOfField]);
      }
    }

    report.push(`Number of students: ${newData.length - 1}`);
    arrayOfFields.forEach((element) => {
      const list = [];
      newData.forEach((e) => {
        const indexOfFirstName = newData[0].indexOf('firstname');
        if (e.includes(element)) list.push(e[indexOfFirstName]);
      });
      report.push(`Number of students in ${element}: ${list.length}. List: ${list.join(', ')}`);
    });

    resolve(report);
  });
});

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (request, response) => {
  countStudents(database).then((results) => {
    const resultTxt = results.join('\n');
    response.send(resultTxt);
  }).catch((error) => {
    response.status(500).send(error.message);
  });
});

app.listen(1245, () => {
  console.log('Server listening on port 1245');
});

module.exports = app;
