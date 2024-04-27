
const loginForm = document.querySelector('.login-form');


loginForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const formData = {};
  const formElements = this.elements;
  for (let i = 0; i < formElements.length; i++) {
    const element = formElements[i];

    if (element.tagName === 'INPUT' && element.value.trim() !== '') {
      formData[element.name] = element.value;
    }
  }

  if (Object.keys(formData).length === 0) {
    alert('Please fill in all fields.');
  } else {
    console.log(formData);
    this.reset();
  }
});

