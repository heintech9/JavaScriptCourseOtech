// JavaScript Object Notation (JSON) is a lightweight data interchange format that is easy for humans to read and write, and easy for machines to parse and generate.

/* 
- Datatypes
-- String
-- Number
-- Object
-- Array
-- Boolean
-- Null
*/

const post = {
    id: 1,
    title: 'Post One',
    body: 'This is the body',
};

// Convert to JSON string
const str = JSON.stringify(post);
// console.log(str, typeof str);
// console.log(str.id);

// Parse JSON
const obj = JSON.parse(str);

// console.log(obj.id);

// JSON & arrays
const posts = [
    {
        id: 1,
        title: 'Post One',
        body: 'This is the body',
    },
    {
        id: 2,
        title: 'Post Two',
        body: 'This is the body',
    },
];
// console.log(posts, typeof posts);

const str2 = JSON.stringify(posts);

