// ==============================
// JavaScript Homework: Student Data Processor
// ==============================

// Starter data: list of students and their grades
const students = [
  { name: "Alice", grade: 85 },
  { name: "Bob", grade: 58 },
  { name: "Charlie", grade: 95 },
  { name: "David", grade: 45 },
  { name: "Eva", grade: 72 },
];

// =========================================
// Task 1: Create a new array of strings like "Alice: 85"
const formattedStudents = students.map(student => `${student.name}: ${student.grade}`);
console.log("Task 1 result:", formattedStudents);
// =========================================

// =========================================
// Task 2: Create a new array that only includes students
// who passed (grade is 60 or higher)
// Log the result to the console
const passedStudents = students.filter(student => student.grade >= 60);
console.log("Task 2 result:", passedStudents);
// =========================================

// =========================================
// Task 3: Calculate the average grade of the class
// Round the result to 2 decimal places
// Log the result to the console
const total = students.reduce((sum, student) => sum + student.grade, 0);
const average = (total / students.length).toFixed(2);
console.log("Task 3 result:", average);
// =========================================

// =========================================
// Task 4: Loop through the students and log:
// "<name> passed" if grade >= 60
// "<name> failed" if grade < 60
// Log the result to the console
students.forEach(student => {
  if (student.grade >= 60) {
    console.log(`${student.name} passed`);
  } else {
    console.log(`${student.name} failed`);
  }
});
// =========================================

// =========================================
// Task 5: Print each student’s name one by one using a loop
// Log the result to the console
students.forEach(student => {
  console.log(student.name);
});
// =========================================

// =========================================
// Bonus Task: Create a function that returns the student
// with the highest grade
// Log the result to the console
function getTopStudent(list) {
  // reduce compares current best with each next student
  return list.reduce((bestSoFar, current) =>
    current.grade > bestSoFar.grade ? current : bestSoFar
  );
}

const topStudent = getTopStudent(students);
console.log("Bonus Task result:", topStudent);
// =========================================

// =========================================
// In-Place Task 1: Add a new property to each student called "status"
// It should be set to "pass" or "fail" based on the grade
// Modify the original students array directly
// Log the modified students array to the console
students.forEach(student => {
  student.status = student.grade >= 60 ? "pass" : "fail";
});

console.log("In-Place Task 1 result:", students);
// =========================================

// =========================================
// In-Place Task 2: Curve the grades by adding 5 points to each student's grade
// Make sure no grade goes over 100
// Modify the original students array directly
// Log the modified students array to the console
students.forEach(student => {
  student.grade = Math.min(student.grade + 5, 100);
});

console.log("In-Place Task 2 result:", students);
// =========================================


// ==============================
// JavaScript Homework: Functions and Scope
// ==============================

// =========================================
// Task 1: Create a function called greet that logs:
// "Hello, student!" to the console
// Then call the function
function greet() {
  console.log("Hello, student!");
}

greet(); 
// =========================================

// =========================================
// Task 2: Create a function that takes a name as a parameter
// and logs "Hello, <name>!" to the console
// Call the function with different names
function greetByName(name) {
  console.log(`Hello, ${name}!`);
}
// =========================================

// =========================================
// Task 3: Create a function that returns the square of a number
// Call the function and store the result in a variable
// Then log the result
function square(number) {
  return number * number;
}
// =========================================

// =========================================
// Task 4: Demonstrate local vs global scope
// Create a global variable and a function that has a local variable
// Log both and explain the difference in a comment
// Log both values to the console
// Global variable – accessible everywhere
const globalMessage = "I'm a global variable";

function demonstrateScope() {
  // Local variable – only accessible inside this function
  const localMessage = "I'm a local variable";

  console.log("Inside function:");
  console.log(globalMessage);
  console.log(localMessage); 
}

demonstrateScope();

console.log("Outside function:");
console.log(globalMessage); // 
// =========================================

// =========================================
// Task 5: Create a function that accepts another function as a parameter
// The callback should log "Callback function was called"
// Call the outer function and pass the inner function as an argument
// This is the callback function
function callbackFunction() {
  console.log("Callback function was called");
}

// This is the outer function that accepts a function as argument
function outerFunction(callback) {
  console.log("Outer function running...");
  callback(); // Call the callback inside
}

// Call outerFunction and pass callbackFunction
outerFunction(callbackFunction);
// =========================================

// =========================================
// Task 6: Create a function that accepts two numbers and a function
// The function should perform an operation using the passed-in function
// Example: pass in add, subtract, multiply as callback functions
// Call the main function with different callbacks
// Log the results to the console
// Operation functions (can be passed as callbacks)
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

// Main function that accepts two numbers and a callback
function calculate(a, b, operation) {
  const result = operation(a, b);
  console.log(`Result of ${operation.name}:`, result);
}

// Call with different operations
calculate(10, 5, add);       // 15
calculate(10, 5, subtract);  // 5
calculate(10, 5, multiply);  // 50
// =========================================

// =========================================
// Task 7: Create and use an anonymous function
// Assign it to a variable and call it
// It should log "Anonymous function executed"
const anonymousFunction = function () {
  console.log("Anonymous function executed");
};

anonymousFunction();
// =========================================

// =========================================
// Task 8: Rewrite Task 7 using an arrow function instead
// Call it and log the result to the console
const arrowFunction = () => {
  console.log("Arrow function executed");
};

arrowFunction();
// =========================================
