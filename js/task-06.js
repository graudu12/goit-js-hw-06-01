const validInput = document.querySelector('#validation-input');

validInput.addEventListener('blur', onBlur);

function onBlur (event) {
  const {
    target: { classList, dataset, value },
  } = event;

  if (parseInt(dataset.length) <= value.length) {
    classList.add('valid');
    classList.remove('invalid');
  } else {
    classList.add('invalid');
    classList.remove('valid');
  }
}