const listElem = document.querySelectorAll('.js-item');

console.log(`Number of categories: ${listElem.length}`);


listElem.forEach((item) => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
})