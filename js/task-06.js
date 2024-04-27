const validationInput = document.getElementById('validation-input');

validationInput.addEventListener('blur', () => {
  const maxLength = parseInt(validationInput.getAttribute('data-length'));
  const inputLength = validationInput.value.length;
  if (inputLength === maxLength) {
    validationInput.classList.add('valid');
    validationInput.classList.remove('invalid');
  } else {
    validationInput.classList.add('invalid');
    validationInput.classList.remove('valid');
  }
});