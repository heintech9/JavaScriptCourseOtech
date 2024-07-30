// "use strict";
// 1) Global Context

// console.log(this);

function displayFruit(){
    console.log(`Hello ${this.fruit}`);
}

var fruit = "apple";
displayFruit();

// "use strict"
// var fruit = "apple";
// function displayFruit(){
//     console.log(`Hello ${this.fruit}`);
// }
// displayFruit();

// 2) Function Context

// function sum(num1, num2){
//     console.log(num1 + num2);
//     console.log(this);
// }

// sum(5, 10);

// const sumArrow = (num1, num2) => {
//     console.log(num1 + num2);
//     console.log(this);
// }

// sumArrow(10, 10);

// const john = {
//     year : 2000,
//     calcYear : function () {
//         console.log(this);
//         console.log(2024 - this.year);
//     }
// }

// john.calcYear();


// 3 ) Constructure Context

function Person(name){
    this.name = name;
}
let john = new Person("John");
console.log(john.name);

// 4 ) Event Handlers

document.querySelector("button").addEventListener("click", function(){
    console.log(this);
})

// 5) Arrow Function
let person = {
    name: "John",
    greet: function(){
        setTimeout(()=>{
            console.log(`Hello, ${this.name}`),
            1000
        });
    }
}
person.greet();
