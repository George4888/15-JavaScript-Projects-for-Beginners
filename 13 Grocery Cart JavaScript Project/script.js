console.log('hello');

const shoppingCart = document.querySelector('.cart-items');
const addButton = document.querySelectorAll('.cart-btn');
const clearButton = document.getElementById('clear');
const buyButton = document.getElementById('buy');

addButton.forEach(button => {
    button.addEventListener('click', createSelectedItem);
});

function createSelectedItem(event) {
    const selectedimage = event.target.parentElement;
    const itemPrice = event.target.parentElement.childNodes[7].childNodes[1].innerText;
    const img = selectedimage.childNodes[3].src;
    console.log(itemPrice);

    const itemDiv = document.createElement('div');
    itemDiv.classList.add('cart-item');

    const name = document.createElement('p');
    name.innerHTML = 'item name';

    const photo = document.createElement('img');
    photo.setAttribute('src', `./images${img.slice(-9)}`);

    const desc = document.createElement('p');
    desc.innerHTML = 'Short desc: Lorem ipsum dolor sit, amet consectetur adipisicing.';

    const price = document.createElement('p');
    price.innerHTML = `Price: <span>${itemPrice}</span>$`;

    shoppingCart.appendChild(itemDiv);
    itemDiv.appendChild(name);
    itemDiv.appendChild(photo);
    itemDiv.appendChild(desc);
    itemDiv.appendChild(price);
}