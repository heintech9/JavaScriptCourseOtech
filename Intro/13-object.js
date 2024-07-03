let x;

// Creating an object
const person = {
  name: 'John Doe',
  age: 20,
  isAdmin: true,
  address: {
    hourseNumber: 7,
    street: 'Myothit (2)',
    city: 'Tamwe',
    state: 'Yangon'
  },
  hobbies: ['music', 'sports'],
};

// Accessing object properties
x = person.name; // Dot notation
x = person['age']; // Bracket notation
x = person.address.state;
x = person.hobbies[0];

// Updating properties
person.name = 'Aung Aung';
person['isAdmin'] = false;

// Deleting properties
delete person.age;

// Create new properties
person.hasChildren = true;

// Add functions
person.greet = function () {
  console.log(`Hello, my name is ${person.name}`);
};

// console.log(person)

person.greet();

// Create object using the object constructor
const todo = new Object();

todo.id = 1;
todo.name = 'School Meeting';
todo.completed = false;

x = todo;

// Object Nesting
const person1 = {
  address: {
    coords: {
      lat: 42.9384,
      lng: -71.3232,
    },
  },
};

x = person1.address.coords.lat;

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

// Spread operator
const obj3 = { ...obj1, ...obj2 };
// Same as using ...
const obj4 = Object.assign({}, obj1, obj2);

// Array of objects
const todos = [
  { id: 1, name: 'Go to work' },
  { id: 2, name: 'Japanese Class' },
  { id: 3, name: 'Go Home' },
];

x = todos[0].name;

// const todo = new Object();

// todo.id = 1;
// todo.name = 'School Meeting';
// todo.completed = false;

// todo = {
//   id: 1,
//   name: 'School Meeting',
//   completed: false
// }

// Get array of object keys
x = Object.keys(todo); // Array , [id, name, completed]

// Get length of an object
x = Object.keys(todo).length;

// Get array of object values
x = Object.values(todo); // Array , [1, 'School Meeting, false]

// Get array of object key/value pairs
x = Object.entries(todo);

// Check if object has a property
x = todo.hasOwnProperty('age');

// console.log(x);
// Setting object properties with the same name as a variable
const firstName = 'John';
const lastName = 'Doe';
const age = 30;

const person2 = {
  firstName,
  lastName,
  age,
};

console.log(person2.age);

// Destructuring object properties

const todo1 = {
  id: 1,
  title: 'Take out trash',
  user: {
    name: 'John',
  },
};

const {
  id: todoId, // rename id to todoId
  title,
  user: { name }, // destructuring multiple levels
} = todo;

console.log(todoId);

// Destructuring arrays & using the rest/spread operator
const numbers = [23, 67, 33, 49, 52];

const [first, second, ...rest] = numbers;

console.log(first, second, rest);
