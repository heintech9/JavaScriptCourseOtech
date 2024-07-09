for (let i = 0; i <= 10; i++) {
    if (i === 7) {
        console.log('7 is my lucky number');
    } else {
        console.log('Number ' + i);
    }
}

// Nested loops
for (let i = 1; i <= 10; i++) {
    console.log('Number ' + i);

    for (let j = 1; j <= 5; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// Loop through an array
const names = ['John', 'Sam', 'Sara', 'Foo', 'Tim'];

for (let i = 0; i < names.length; i++) {
    if (names[i] === 'John') {
        console.log(names[i] + ' is the best');
    } else {
        console.log(names[i]);
    }
}

// Break
for (let i = 0; i <= 20; i++) {
    if (i === 15) {
        console.log('Breaking...');
        break;
    }
    console.log(i);
}

// Continue
for (let i = 0; i <= 20; i++) {
    if (i === 13) {
        console.log('Skipping 13...');
        continue;
    }
    console.log(i);
}

let i = 0;

while (i > 20) {
    console.log('Number ' + i);
    i++;
}

// Loop over arrays
const arr = [10, 20, 30, 40, 50];

while (i < arr.length) {
    console.log(arr[i]);
    i++;
}

// Nesting while loops
while (i <= 5) {
    console.log('Number ' + i);

    let j = 1;
    while (j <= 5) {
        console.log(`${i} * ${j} = ${i * j}`);
        j++;
    }

    i++;
}

// Do While Loop - Always runs once
do {
    console.log('Number ' + i);
    i++;
} while (i <= 20);

// For In / For Of
// Use for...in when you need to iterate over the properties of an object, and use for...of when you need to iterate over the values of an iterable object like arrays, strings, Maps, Sets, and other iterables..
// Loop through objects
const colorObj = {
    color1: 'red',
    color2: 'blue',
    color3: 'orange',
    color4: 'green',
};

for (const i in colorObj) {
    console.log(i, colorObj[i]);
}

const items = ['book', 'table', 'chair', 'kite'];
const users = [{ name: 'John' }, { name: 'Kate' }, { name: 'Steve' }];

for (const item of items) {
    console.log(item);
}

for (const user of users) {
    console.log(user.name);
}

// Loop over strings
const str = 'Hello World';

for (const letter of str) {
    console.log(letter);
}

// Loop over Maps
const map = new Map();
map.set('name', 'John');
map.set('age', 30);

for (const [key, value] of map) {
    console.log(key, value);
}

const socials = ['Twitter', 'LinkedIn', 'Facebook', 'Instagram'];

// Long form
socials.forEach(function (item) {
  console.log(item);
});

// Short form
socials.forEach((item) => console.log(item)); // Arrow Function

// We can also pass in the index and original array
socials.forEach((item, index, arr) => console.log(`${index} - ${item}`, arr));

// Using a named function
function logSocials(social) {
  console.log(social);
}

socials.forEach(logSocials);

// Array of objects
const socialObjs = [
  { name: 'Twitter', url: 'https://twitter.com' },
  { name: 'Facebook', url: 'https://facebook.com' },
  { name: 'Linkedin', url: 'https://linkedin.com' },
  { name: 'Instagram', url: 'https://instagram.com' },
];

socialObjs.forEach((item) => console.log(item.url));


