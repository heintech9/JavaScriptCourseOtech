/**
 * Closures
 * Closures allow inner functions to access variables from their outer function even after the outer function has executed.
 * They are useful for data privacy, creating function factories, and maintaining state in event handlers.
 */

// 1 ) Data Privacy
// Closures can be used to create private variables that cannot be accessed from outside the function.

function createCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2

class BankAccount {
    #balance = 0; // Private balance
    
    deposit(amount) {
        this.#balance += amount;
    }
    
    withdraw(amount) {
        if (amount <= this.#balance) {
            this.#balance -= amount;
        } else {
            console.log("Insufficient funds");
        }
    }
}

const account = new BankAccount();
account.deposit(1000);
account.withdraw(500);

// 2 ) Function Factories
// Closures can be used to create functions with preset arguments.
function createAdder(x) {
    return function(y) {
        return x + y;
    };
}

const addFive = createAdder(5);
console.log(addFive(3)); // 8
console.log(addFive(10)); // 15

// 3 )Event Handlers
// Closures are often used in event handlers to maintain state.
function setup() {
    let count = 0;
    document.getElementById("myButton").addEventListener("click", function() {
        count++;
        console.log(`Button clicked ${count} times`);
    });
}
setup();