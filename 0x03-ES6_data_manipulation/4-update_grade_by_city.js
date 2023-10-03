// function that returns an array of students for a given city with their new grade
export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  const students = getListStudents.filter((student) => student.location === city);
  return students.map((student) => {
    const grade = newGrades.filter((newGrade) => newGrade.studentId === student.id);
    const newStudent = student;
    if (grade[0]) newStudent.grade = grade[0].grade;
    else newStudent.grade = 'N/A';
    return newStudent;
  });
}
