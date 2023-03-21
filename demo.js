let studentRecords = [
  { name: "John", id: 123, marks: 98 },
  { name: "Baba", id: 101, marks: 23 },
  { name: "yaga", id: 200, marks: 45 },
  { name: "Wick", id: 115, marks: 75 },
];
//Que.1

// let studentNames = studentRecords.map((student) => student.name.toUpperCase());
// console.log(studentNames); // ['JOHN', 'BABA', 'YAGA', 'WICK']

// Que.2

// let highScorers = studentRecords.filter((student) => student.marks > 50);
// console.log(highScorers); // [{name: 'John', id: 123, marks: 98 },{name: 'Wick', id: 115, marks: 75 }]

// Que.3

// let filteredStudents = studentRecords.filter(
//   (student) => student.marks > 50 && student.id > 120
// );
// console.log(filteredStudents); // [{name: 'John', id: 123, marks: 98 }]

// Que.4

// let totalMarks = studentRecords.reduce(
//   (total, student) => total + student.marks,
//   0
// );
// console.log(totalMarks); // 241

//Que.5

// let highScorersNames = studentRecords
//   .filter((student) => student.marks > 50)
//   .map((student) => student.name);
// console.log(highScorersNames); // ['John', 'Wick']

//Que.6

// let totalMarksIdGreaterThan120 = studentRecords
//   .filter((student) => student.id > 120)
//   .reduce((total, student) => total + student.marks, 0);
// console.log(totalMarksIdGreaterThan120); // 98 + 45 = 143

// Que.7

// let updatedMarks = studentRecords.map((student) => {
//   if (student.marks < 50) {
//     student.marks += 15;
//   }
//   return student;
//   // updatedMarks = [
//   //   { name: "John", id: 123, marks: 98 },
//   //   { name: "Baba", id: 101, marks: 38 },
//   //   { name: "yaga", id: 200, marks: 60 },
//   //   { name: "Wick", id: 115, marks: 75 },
//   // ];
// });
// let highScorersWithUpdatedMarks = updatedMarks.filter(
//   (student) => student.marks > 50
// );
// // highScorersWithUpdatedMarks = [
// //   { name: "John", id: 123, marks: 98 },
// //   { name: "yaga", id: 200, marks: 60 },
// //   { name: "Wick", id: 115, marks: 75 },
// // ];
// let totalMarksAfterGrace = highScorersWithUpdatedMarks.reduce(
//   (total, student) => total + student.marks,
//   0
// ); // totalMarksAfterGrace = 98 + 60 + 75 = 233
// console.log(totalMarksAfterGrace); // 233

// Que.8

let students = [
  { name: "John", class: "A", rollNo: 1 },
  { name: "Baba", class: "B", rollNo: 2 },
  { name: "Yaga", class: "A", rollNo: 3 },
  { name: "Wick", class: "B", rollNo: 4 },
  { name: "Alice", class: "A", rollNo: 5 },
  { name: "Bob", class: "B", rollNo: 6 },
];
console.log(students); // [{name: 'John', class: 'A', rollNo: 1 }, {name: 'Baba', class: 'B', rollNo: 2 }, {name: 'Yaga', class: 'A', rollNo: 3 }, {name: 'Wick', class: 'B', rollNo: 4 }, {name: 'Alice', class: 'A', rollNo: 5 }, {name: 'Bob', class: 'B
