const shoppingCart = document.querySelector('.cart-items');
const addButton = document.querySelectorAll('.cart-btn');
const clearButton = document.getElementById('clear');
const buyButton = document.getElementById('buy');

addButton.forEach(button => {
    button.addEventListener('click', createSelectedItem);
});
clearButton.addEventListener('click', clearCart);

function createSelectedItem(event) {
    const selectedimage = event.target.parentElement;
    const itemPrice = event.target.parentElement.childNodes[7].childNodes[1].innerText;
    const img = selectedimage.childNodes[3].src;

    const itemDiv = document.createElement('div');
    itemDiv.classList.add('cart-item');

    const name = document.createElement('p');
    name.innerHTML = 'item name';

    const photo = document.createElement('img');
    photo.setAttribute('src', `./images${img.slice(-9)}`);

    const desc = document.createElement('p');
    desc.innerHTML = 'Short desc: Lorem ipsum dolor sit, amet consectetur adipisicing.';

    const price = document.createElement('p');
    price.innerHTML = `Price: <span class='cart-item-price'>${itemPrice}</span>$`;

    shoppingCart.appendChild(itemDiv);
    itemDiv.appendChild(name);
    itemDiv.appendChild(photo);
    itemDiv.appendChild(desc);
    itemDiv.appendChild(price);

    calcTotal();
}

function calcTotal() {
    const total = [];
    const items = document.querySelectorAll('.cart-item-price');
    
    items.forEach(item => {
        total.push(parseInt(item.textContent));
    });
    
    const totalMoney = total.reduce((total, item) => {
        total = total + item;
        return total;
    }, 0);

    document.querySelector('#total').textContent = totalMoney;
}

function clearCart() {
    document.querySelector('#total').textContent = '0';
    const allItems = document.querySelectorAll('.cart-item');

    allItems.forEach(item => {
        item.remove();
    });
}