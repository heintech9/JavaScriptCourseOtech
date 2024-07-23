/* 
- Hoisting is a behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase.
- Can use variables and functions before you declare them in the code.
*/
// Variable Hoisting
// Using Var
console.log(a); // a = undefined
var a = 5;
console.log(a); // 5

// Using Let or Const
console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 10;
console.log(b); // 10

// Funciton Hoisting
// -- Function declarations are fully hoisted.
greet(); // "Hello, world!"

function greet() {
    console.log("Hello, world!");
}

// - Function expressions are not hoisted in the same way. 
sayHello(); // TypeError: sayHello is not a function

var sayHello = function() {
    console.log("Hello!");
};

