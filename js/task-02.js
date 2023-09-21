const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('#ingredients')
//const liList = []

ingredients.map(ingredient => {
  //liList = document.createElement('li')
  const items = document.createElement('li')
  items.className = 'item'
  items.textContent = ingredient
  //liList.push(items)


  list.append(items)
})

