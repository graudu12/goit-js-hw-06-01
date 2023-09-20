const form = document.querySelector('.login-form')

form.addEventListener('submit', allSubmit)

function allSubmit(event) {
    event.preventDefault()
    const {
        elements: { email, password },
    } = event.currentTarget

    if (email.value === '' || password.value === '') {
        return alert('Please fill in all the fields!')
    }
    const userData = { email: email.value, Password: password.value }
    
    //console.log(userData)
    event.currentTarget.reset()
}
