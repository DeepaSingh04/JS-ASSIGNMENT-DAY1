// 1. Combining Arrays
function combiningArrays(fruits, vegetables) {
    const groceries = [...fruits, ...vegetables]; // Combine using the spread operator
    return groceries;
}

// Example Invocation:
const fruits = ["apple", "banana", "orange"];
const vegetables = ["carrot", "broccoli", "spinach"];
console.log(combiningArrays(fruits, vegetables)); 
// Output: [ 'apple', 'banana', 'orange', 'carrot', 'broccoli', 'spinach' ]


// 2. Cloning Objects
function cloningObjects(person) {
    const personCopy = { ...person }; // Clone using the spread operator
    return personCopy;
}

// Example Invocation:
const person = { name: "John", age: 30, address: "123 Main St" };
console.log(cloningObjects(person));
// Output: { name: "John", age: 30, address: "123 Main St" }


// 3. Merging Objects
function mergingObjects(student, course) {
    const studentWithCourse = { ...student, ...course }; // Merge using the spread operator
    return studentWithCourse;
}

// Example Invocation:
const student = { name: "Alice", age: 20 };
const course = { courseName: "Math", teacher: "Mr. Smith" };
console.log(mergingObjects(student, course));
// Output: { name: 'Alice', age: 20, courseName: 'Math', teacher: 'Mr. Smith' }


// 4. Combining Nested Arrays
function combiningNestedArrays(array1, array2) {
    const combinedArray = [...array1, ...array2]; // Combine using the spread operator
    return combinedArray;
}

// Example Invocation:
const array1 = [[1, 2], [3, 4], [5, 6]];
const array2 = [[7, 8], [9, 10], [11, 12]];
console.log(combiningNestedArrays(array1, array2));
// Output: [ [1, 2], [3, 4], [5, 6], [7, 8], [9, 10], [11, 12] ]
