let x;

const num = new Number(5.564);

// toString() - returns a string representation of the number
x = num.toString();
// To get the length
x = num.toString().length;

// toFixed() - returns a string representation of the number with a specified number of decimals
x = num.toFixed(2);
console.log(x)
// toPrecision() - returns a number with the specified length
x = num.toPrecision(3);
// console.log('test', x)

// toExponential() -  convert a number to exponential notation and return its value as a string
x = num.toExponential(2);

console.log(x)

// valueOf - Get value
x = num.valueOf();