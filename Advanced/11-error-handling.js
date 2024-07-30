// Usually, a script “dies” (immediately stops) in case of an error, printing it to console.
// But there’s a syntax construct try...catch that allows us to “catch” errors so the script can, instead of dying, do something more reasonable.

"use strict";

try {

    alert('Start of try runs');  // (1) <--

    lalala; // error, variable is not defined!

    alert('End of try (never reached)');  // (2)

} catch (err) {
    alert(`Error has occurred!`); // (3) <--
}

// try...catch only works for runtime errors
try {
    // {{{{{{{{{{{{
} catch (err) {
    alert("The engine can't understand this code, it's invalid");
}

// try...catch works synchronously
try {
    setTimeout(function () {
        noSuchVariable; // script will die here
    }, 1000);
} catch (err) {
    alert("won't work");
}

// To catch an exception inside a scheduled function, try...catch must be inside that function:
setTimeout(function () {
    try {
        noSuchVariable; // try...catch handles the error!
    } catch {
        alert("error is caught here!");
    }
}, 1000);

// Error Object ->  1) name 2) message 3) stack
// When an error occurs, JavaScript generates an object containing the details about it. The object is then passed as an argument to catch block.

try {
    lalala; // error, variable is not defined!
} catch (err) {
    alert(err.name); // ReferenceError
    alert(err.message); // lalala is not defined
    alert(err.stack); // ReferenceError: lalala is not defined at (...call stack)

    // Can also show an error as a whole
    // The error is converted to string as "name: message"
    alert(err); // ReferenceError: lalala is not defined
}
/** Throwing our own errors
- JavaScript has many built-in constructors for standard errors:
1) let error = new Error(message);
2) let error = new SyntaxError(message);
3) let error = new ReferenceError(message);
*/
let json = '{ "age": 30 }'; // incomplete data

try {
    let user = JSON.parse(json); // <-- no errors
    if (!user.name) {
        throw new SyntaxError("Incomplete data: no name");
    }
    alert(user.name);
} catch (err) {
    alert("JSON Error: " + err.message); // JSON Error: Incomplete data: no name
}
