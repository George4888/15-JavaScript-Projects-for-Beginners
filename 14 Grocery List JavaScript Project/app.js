const addButton  = document.querySelector('.addItems-submit');
const clearButton = document.querySelector('.displayItems-clear');
const itemsList = document.querySelector('.displayItems-title');

addButton.addEventListener('click', addItem);
clearButton.addEventListener('click', clearList);

function addItem(e) {
    e.preventDefault();

    let itemName = document.querySelector('.addItems-input').value;

    if (itemName === '') {
        alert('Please add grocery item');
    } else {
    const newDiv = document.createElement('div');
    newDiv.classList.add('grocery-item');

    const title = document.createElement('h4');
    title.classList.add('grocery-item__title');
    title.innerHTML = `${itemName}`;

    itemsList.appendChild(newDiv);
    newDiv.appendChild(title);

    const trash = document.createElement('a');
    trash.classList.add('grocery-item__link');
    trash.innerHTML = `<i class="far fa-trash-alt"></i>`;

    newDiv.appendChild(trash);
    }
}

function clearList() {
    const list = document.querySelectorAll('.grocery-item');
    list.forEach(item => {
        item.remove();
    })
}