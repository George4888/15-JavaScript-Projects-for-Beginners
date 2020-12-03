console.log('hello');

const shoppingCart = document.querySelector('.cart-items');
const addButton = document.querySelectorAll('.cart-btn');
const clearButton = document.getElementById('clear');
const buyButton = document.getElementById('buy');

addButton.forEach(button => {
    button.addEventListener('click', createSelectedItem);
});

function createSelectedItem() {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item');

    const name = document.createElement('p');
    name.innerHTML = 'item name';

    const photo = document.createElement('img');
    photo.innerHTML = `$`;

    const desc = document.createElement('p');
    desc.innerHTML = 'Short desc: Lorem ipsum dolor sit, amet consectetur adipisicing.';

    const price = document.createElement('p');
    price.innerHTML = `$`;

    shoppingCart.appendChild(itemDiv);
    itemDiv.appendChild(name);
    itemDiv.appendChild(photo);
    itemDiv.appendChild(desc);
    itemDiv.appendChild(price);
}