const items = document.querySelectorAll('.item');
Array.prototype.forEach.call(items, (element) => {
    const allCat = element.querySelectorAll('ul').length;
    const title = element.querySelector('h2').innerHTML;
    const itemsLength = element.querySelectorAll('li').length;
    console.log(`Number of categories: ${allCat}`);
    console.log(`Category: ${title}`);
    console.log(`Elements: ${itemsLength}`);
});