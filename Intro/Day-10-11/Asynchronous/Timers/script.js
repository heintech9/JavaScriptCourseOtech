//Timers will come when you might want to get a piece of code in JavScript executed after a certain amount of time frame. 

// setTimeout - takes in a callback and a time to wait until that callback is executed

// setTimeout(function () {
//     console.log('Hello from callback');
//   }, 2000);
  
  // Named function
//   setTimeout(changeText, 3000);
  
//   function changeText() {
//     document.querySelector('h1').textContent = 'Hello from callback';
//   }
  
//   // clearTimeout() will clear a timer
//   const timerId = setTimeout(changeText, 3000);
  
//   document.querySelector('#cancel').addEventListener('click', () => {
//     console.log(timerId);
//     clearTimeout(timerId);
//     console.log('Timer Cancelled');
//   });


// serInterval - The setInterval function repeatedly executes a specified function with a fixed time delay between each call.
// const intervalID = setInterval(myCallback, 1000, 'Hello');

// function myCallback(a) {
//   console.log(a, Date.now());
// }

let intervalID;

function startChange() {
  if (!intervalID) {
    intervalID = setInterval(changeRandomColor, 1000);
  }
}

// function changeColor() {
//   if (document.body.style.backgroundColor !== 'black') {
//     document.body.style.backgroundColor = 'black';
//     document.body.style.color = 'white';
//   } else {
//     document.body.style.backgroundColor = 'white';
//     document.body.style.color = 'black';
//   }
// }

function changeRandomColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = `#${randomColor}`;
}

function stopChange() {
  clearInterval(intervalID);
}

document.getElementById('start').addEventListener('click', startChange);
document.getElementById('stop').addEventListener('click', stopChange);

  