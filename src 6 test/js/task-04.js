let counterValue = 0;

const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const valueSpan = document.getElementById('value');


decrementButton.addEventListener('click', () => {
  counterValue--; 
  updateCounter(); 
});

incrementButton.addEventListener('click', () => {
  counterValue++; 
  updateCounter(); 
});

function updateCounter() {
  valueSpan.textContent = counterValue; 
}