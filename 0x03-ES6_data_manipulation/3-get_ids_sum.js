function getStudentIdsSum(arr) {
  const sumOfIds = arr.reduce((accumulator, currentStudent) => accumulator + currentStudent.id, 0);

  return (sumOfIds);
}

export default getStudentIdsSum;
