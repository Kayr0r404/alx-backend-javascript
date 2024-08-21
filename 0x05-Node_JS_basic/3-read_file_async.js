const fs = require('fs');

const countStudents = (file) => new Promise((resolve, reject) => {
  fs.readFile(file, 'utf-8', (err, data) => {
    if (err) reject(new Error('Cannot load the database'));
    const newData = [];
    const arrayOfFields = [];
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
    console.log(`Number of students: ${newData.length - 1}`);
    arrayOfFields.forEach((element) => {
      const list = [];
      newData.forEach((e) => {
        const indexofFirstName = newData[0].indexOf('firstname');
        if (e.includes(element)) list.push(e[indexofFirstName]);
      });
      console.log(`Number of students in ${element}: ${list.length}. List: ${list.join(', ')}`);
    });
    resolve(true);
  });
});

module.exports = countStudents;
