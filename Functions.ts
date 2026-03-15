
// Simple function
function greet(name: string): string {
    return "Hello " + name;
}

// Function with parameters and return type
function add(a: number, b: number): number {
    return a + b;
}

// Function returning void
function showMessage(message: string): void {
    console.log("Message: " + message);
}

// Arrow function
const multiply = (x: number, y: number): number => {
    return x * y;
};

// Function with optional parameter
function studentInfo(name: string, age?: number): void {
    if (age) {
        console.log("Name: " + name + " Age: " + age);
    } else {
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
