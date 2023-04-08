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

// let students = [
//   { name: "John", class: "A", rollNo: 1 },
//   { name: "Baba", class: "B", rollNo: 2 },
//   { name: "Yaga", class: "A", rollNo: 3 },
//   { name: "Wick", class: "B", rollNo: 4 },
//   { name: "Alice", class: "A", rollNo: 5 },
//   { name: "Bob", class: "B", rollNo: 6 },
// ];
// console.log(students); // [{name: 'John', class: 'A', rollNo: 1 }, {name: 'Baba', class: 'B', rollNo: 2 }, {name: 'Yaga', class: 'A', rollNo: 3 }, {name: 'Wick', class: 'B', rollNo: 4 }, {name: 'Alice', class: 'A', rollNo: 5 }, {name: 'Bob', class: 'B

// function Device(kind) {
//   this.kind = kind;
// }
// Device.prototype.printkind = function () {
//   console.log(this.kind);
// };
// var product = new Device("music player");
// product.kind = "radio";
// product.printkind();
// Parent object constructor
// function Parent() {
//   this.name = "Parent";
// }

// // Method attached to Parent object
// Parent.prototype.sayHello = function () {
//   console.log(`Hello, I am ${this.name}`);
// };

// // Child object constructor
// function Child() {
//   this.name = "Child";
// }

// // Inheriting from Parent's prototype
// Child.prototype = Object.create(Parent.prototype);
// Child.prototype.constructor = Child;

// // Creating a new instance of Child
// const childObj = new Child();

// // Using Parent's method in Child object
// childObj.sayHello(); // Output: "Hello, I am Child"

// Parent object constructor
// function Parent(name) {
//   this.name = name;
// }

// // Method attached to Parent object
// Parent.prototype.sayHello = function () {
//   console.log(`Hello, I am ${this.name}`);
// };

// // Child object constructor
// function Child(name, age) {
//   Parent.call(this, name); // Call Parent's constructor with Child's instance
//   this.age = age;
// }

// // Inheriting from Parent's prototype
// Child.prototype = Object.create(Parent.prototype);
// Child.prototype.constructor = Child;

// // Method attached to Child object
// Child.prototype.sayAge = function () {
//   console.log(`I am ${this.age} years old`);
// };

// // Creating instances of Child
// const child1 = new Child("Child 1", 5);
// const child2 = new Child("Child 2", 8);

// // Using inherited methods
// child1.sayHello(); // Output: "Hello, I am Child 1"
// child1.sayAge(); // Output: "I am 5 years old"

// child2.sayHello(); // Output: "Hello, I am Child 2"
// child2.sayAge(); // Output: "I am 8 years old"
function getAllPropertyNames(obj) {
  let propertyNames = [];

  const getAllProperties = (obj) => {
    const proto = Object.getPrototypeOf(obj);
    if (proto !== null) {
      getAllProperties(proto);
    }

    const names = Object.getOwnPropertyNames(obj);
    for (const name of names) {
      if (!propertyNames.includes(name)) {
        propertyNames.push(name);
      }
    }
  };

  getAllProperties(obj);

  return propertyNames;
}

// Example usage:

// Define parent object
const parent = {
  parentProp1: "Parent Prop 1",
  parentProp2: "Parent Prop 2",
};

// Define child object with inheritance
const child = Object.create(parent);
child.childProp1 = "Child Prop 1";
child.childProp2 = "Child Prop 2";

// Retrieve all property names of child object
const allPropertyNames = getAllPropertyNames(child);

console.log(allPropertyNames);
// Output: ["childProp1", "childProp2", "parentProp1", "parentProp2"]
