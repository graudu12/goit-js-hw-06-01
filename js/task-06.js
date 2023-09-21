const textInput = document.querySelector('#validation-input')
textInput.addEventListener('blur', event => {
    if (event.target.value.length == +textInput.getAttribute('data-length')) {
        //textInput.classList.add('valid')
         textInput.classList.contains('valid') 
            textInput.classList.remove('invalid')
        }
     else {
         textInput.classList.contains('invalid') 
            textInput.classList.remove('valid')
        
        //textInput.classList.add('invalid')
    }
});