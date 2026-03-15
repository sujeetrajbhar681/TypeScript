// Simple function
function greet(name) {
    return "Hello " + name;
}
// Function with parameters and return type
function add(a, b) {
    return a + b;
}
// Function returning void
function showMessage(message) {
    console.log("Message: " + message);
}
// Arrow function
var multiply = function (x, y) {
    return x * y;
};
// Function with optional parameter
function studentInfo(name, age) {
    if (age) {
        console.log("Name: " + name + " Age: " + age);
    }
    else {
        console.log("Name: " + name);
    }
}
// Calling the functions
console.log(greet("John"));
console.log("Sum:", add(10, 20));
showMessage("Welcome to TypeScript");
console.log("Multiplication:", multiply(5, 4));
studentInfo("Rahul", 21);
studentInfo("Amit");
