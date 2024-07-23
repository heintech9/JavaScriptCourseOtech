const counter = document.getElementById("counter");
const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");

increaseButton.addEventListener("click", () => {
  counter.textContent = parseInt(counter.textContent) + 1;
});

decreaseButton.addEventListener("click", () => {
  counter.textContent = parseInt(counter.textContent) - 1;
});
