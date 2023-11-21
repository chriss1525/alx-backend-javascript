// method that accepts a path in argument and returns the number of students in the file given

const fs = require('fs');

function countStudents(path) {
  try {
    nstudent = fs.readFileSync(path, 'utf8').split('\n');
    nstudents = nstudent.slice(1);
    nstudents = nstudents.filter((item) => item);
    console.log(`Number of students: ${nstudents.length}`);
    const fields = {};
    for (const i of nstudents) {
      const student = i.split(',');
      if (!fields[student[3]]) {
        fields[student[3]] = [];
      }
      fields[student[3]].push(student[0]);
    }
    for (const key of Object.keys(fields)) {
      if (key) {
        const list = fields[key];
        console.log(`Number of students in ${key}: ${list.length}. List: ${list.join(', ')}`);
      }
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
