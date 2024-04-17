function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city) // Filter students by city
    .map((student) => {
      const updatedGrade = newGrades.find((grade) => grade.studentId === student.id);
      const grade = updatedGrade ? updatedGrade.grade : 'N/A'; // If student has a new grade, use it, otherwise 'N/A'
      return { ...student, grade };
    });
}

export default updateStudentGradeByCity;
