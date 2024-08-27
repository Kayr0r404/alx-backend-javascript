import fs from 'fs';

const readDatabase = (filePath) => new Promise((resolve, reject) => {
  if (!filePath) {
    return reject(new Error('File path is required'));
  }

  fs.readFile(filePath, 'utf-8', (error, data) => {
    if (error) {
      return reject(new Error("Cannot load the database"));
    }

    const objectOfArrays = {};
    const lines = data.split('\n').filter(line => line.trim() !== '');

    if (lines.length < 2) {
      return reject(new Error("File content is empty or does not have enough data"));
    }

    const headers = lines[0].split(',');
    const fieldIndex = headers.indexOf('field');
    const firstnameIndex = headers.indexOf('firstname');

    if (fieldIndex === -1 || firstnameIndex === -1) {
      return reject(new Error("Missing required 'field' or 'firstname' headers"));
    }

    lines.slice(1).forEach(line => {
      const row = line.split(',');
      const field = row[fieldIndex];
      const firstname = row[firstnameIndex];

      if (!objectOfArrays[field]) {
        objectOfArrays[field] = [];
      }
      objectOfArrays[field].push(firstname);
    });

    resolve(objectOfArrays);
  });
});

export default readDatabase;
