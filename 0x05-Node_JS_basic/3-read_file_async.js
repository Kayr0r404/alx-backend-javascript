const fs = require('fs');

const countStudents = (file) => new Promise((resolve, reject) => {
  fs.readFile(file, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const rows = data.trim().split('\n');
    const headers = rows[0].split(',');
    const students = rows.slice(1).map(row => row.split(','));

    if (students.length === 0) {
      console.log('No students found in the database.');
      resolve(true);
      return;
    }

    const fieldIndex = headers.indexOf('field');
    const firstNameIndex = headers.indexOf('firstname');

    const studentsByField = students.reduce((acc, student) => {
      const field = student[fieldIndex];
      const firstName = student[firstNameIndex];
      if (!acc[field]) {
        acc[field] = [];
      }
      acc[field].push(firstName);
      return acc;
    }, {});

    console.log(`Number of students: ${students.length}`);

    for (const [field, names] of Object.entries(studentsByField)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }

    resolve(true);
  });
});

module.exports = countStudents;
