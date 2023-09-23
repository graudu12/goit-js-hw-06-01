const inputChange = document.querySelector('input#font-size-control')
const textFocus = document.querySelector('span#text')

inputChange.addEventListener('input', a => {
    textFocus.style.fontSize = `${a.target.value }px`
})