//Decision Making on your difference codes
// If Statement Syntax
if (true) {
    console.log('This is true');
}

if (false) {
    console.log('This is NOT true');
}

// Evaluation expressions
const x = 10;
const y = 5;

if (x >= y) {
    console.log(`${x} is greater than or equal to ${y}`);
}

if (x === y) {
    console.log(`${x} is equal to ${y}`);
} else {
    console.log(`${x} is NOT equal to ${y}`);
}

// Shorthand If/Else
if (x >= y)
    console.log(`${x} is greater than or equal to ${y}`),
        console.log('This is true');
else console.log('This is false');

const d = new Date();
const hour = d.getHours();

if (hour < 12) {
    console.log('Good Morning');
} else if (hour < 18) {
    console.log('Good Afternoon');
} else {
    console.log('Good Night');
}

// Nested If
if (hour < 12) {
    console.log('Good Morning');

    if (hour === 8) {
        console.log('Wake Up!');
    }
} else if (hour < 18) {
    console.log('Good Afternoon');
} else {
    console.log('Good Night');

    if (hour >= 23) {
        console.log('zzzzzzzz');
    }
}

if (hour >= 8 && hour < 17) {
    console.log('It is work time!');
}

if (hour === 6 || hour === 20) {
    console.log('Brush your teeth!');
}

const d = new Date(2024, 1, 10, 19, 0, 0);
const month = d.getMonth();
// const hour = d.getHours();

// Immediate value evaluation
switch (month) {
  case 1:
    console.log('It is January');
    break;
  case 2:
    console.log('It is February');
    break;
  case 3:
    console.log('It is March');
    break;
  default:
    console.log('It is not Jan, Feb or March');
}

// Range evaluation
switch (true) {
  case hour < 12:
    console.log('Good Morning');
    break;
  case hour < 18:
    console.log('Good Afternoon');
    break;
  default:
    console.log('Good Night');
}

// Ternary Operator
const age = 17;

// Using an if statement
if (age >= 18) {
  console.log('You can vote!');
} else {
  console.log('You can not vote');
}

// Using a ternary operator
age >= 18 ? console.log('You can vote!') : console.log('You can not vote');

// Assigning a conditional value to a variable
const canVote = age >= 18 ? true : false;
const canVote2 = age >= 18 ? 'You can vote!' : 'You can not vote';

console.log(canVote);
console.log(canVote2);

// Multiple statements

const auth = true;

// Long version
// let redirect;

// if (auth) {
//   alert('Welcome to the dashboard');
//   redirect = '/dashboard';
// } else {
//   alert('Access Denied');
//   redirect = '/login';
// }

// Shorter ternary version
const redirect = auth
  ? (alert('Welcome to the dashbaord'), '/dashboard')
  : (alert('Access Denied'), '/login');

console.log(redirect);

// Ternary with no else
auth ? console.log('Welcome to the dashboard') : null;
// Shorthand for ternary with no else
auth && console.log('Welcome to the dashoard');

// null coercion operator (??)
let username = null ?? '';

