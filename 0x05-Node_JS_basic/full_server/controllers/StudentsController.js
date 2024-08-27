import readData from '../utils.js';

const DB_FILE = process.argv[2];
const firstLine = ['This is the list of our students'];

class StudentsController {
  static getAllStudents(request, response) {
        
    readData(DB_FILE).then(results => {
      Object.entries(results).forEach(([field, students]) => {
      // students.sort();
      firstLine.push(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
      });
      response.status(200).send(firstLine.join('\n'));
    })
    .catch(error => {
      response.status(500).send(error.message);
    });
  }

  static getAllStudentsByMajor(request, response) {
    const major = request.params.major;

    readData(DB_FILE).then(results => {
      if (!results[major]) {
        return response.status(500).send('Major parameter must be CS or SWE');
      }
      response.status(200).send(`List: ${results[major].sort().join(', ')}`);
    })
    .catch(error => {
      response.status(500).send(error.message);
    });
  }
}

export default StudentsController;
