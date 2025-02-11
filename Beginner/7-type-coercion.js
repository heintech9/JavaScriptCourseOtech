/**
- Type coercion in JavaScript refers to the automatic or implicit conversion of values from one data type to another. 
- JavaScript is a dynamically typed language, which means that types are converted automatically in various contexts to make operations work. 
- This can sometimes lead to unexpected behavior, so understanding type coercion is important for writing reliable code.
 */

let x;

// Coerced to a string
x = 5 + '5';

console.log(x, typeof x)

x = 5 + Number('5');

// Coerced to a number
x = 5 * '5';

console.log(x)

// null is coerced to 0 as it is a `falsy` value
x = 5 + null;

x = Number(null);

console.log('test', null, typeof x)

x = Number(true);
x = Number(false);

// true is coerced to a 1
x = 5 + true;

// false is coerced to 0 (falsy)
x = 5 + false;

// Undefined is coerced to 0 (falsy)
x = 5 + undefined;

console.log(x, typeof x);

