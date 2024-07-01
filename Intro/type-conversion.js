let amount = '100';

console.log(amount, typeof amount)

// Convert string to number in 3 ways
amount = parseInt(amount);
// console.log(amount, typeof amount)
amount = +amount;
console.log(amount, typeof amount)
amount = Number(amount);
// console.log(amount, typeof amount)

// Convert number to string
amount = amount.toString();
amount = String(amount);

// Convert string to float
amount = parseFloat(amount);

// Convert number to boolean
amount = Boolean(amount);

// Ways to get NaN
console.log(Math.sqrt(-1));
console.log(1 + NaN);
console.log(undefined + undefined);
console.log('foo' / 3);

console.log(amount, typeof amount);