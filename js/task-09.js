function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const changeColor = document.querySelector('button.change-color')
const body = document.querySelector('body')
const colorVal = document.querySelector('span.color')


changeColor.addEventListener('click', a => {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorVal.textContent = color;
})
