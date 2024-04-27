function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('#controls input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');


function createBoxes(amount) {
  // Ștergem elementele existente din div-ul "boxes"
  boxesContainer.innerHTML = '';

  // Creăm div-urile și le adăugăm în div-ul "boxes"
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
    size += 10;
  }
}

// Adăugăm un event listener pentru butonul Create
createButton.addEventListener('click', () => {
  const amount = parseInt(input.value);
  if (!isNaN(amount)) {
    createBoxes(amount);
  }
});

// Adăugăm un event listener pentru butonul Destroy
destroyButton.addEventListener('click', () => {
  // Ștergem elementele din div-ul "boxes"
  boxesContainer.innerHTML = '';
});