// IFFE (Immediately invoked function expression)
(function () {
    const user = 'John';
    console.log(user);
    const hello = () => console.log('Hello from the IIFE');
    hello();
  })();
  
  // Params
  (function (name) {
    console.log('Hello ' + name);
  })('John');
  
  // Named IIFE
  (function hello() {
    console.log('Hello World');
  })();
  