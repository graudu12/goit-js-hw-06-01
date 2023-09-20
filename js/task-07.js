const inputChange = document.querySelector('input#font-size-control')
const textFocus = document.querySelector('span#text')

inputChange.addEventListener('change', a => {
    textFocus.style.fontSize = `${a.target.value }px`
})