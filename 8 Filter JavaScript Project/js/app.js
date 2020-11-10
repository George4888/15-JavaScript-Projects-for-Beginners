function filterAll() {
    const buttons = document.getElementsByClassName('btn');
    const storeItems = document.getElementsByClassName('store-item');
    console.log(storeItems);

    for (let button of buttons) {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const filter = e.target.dataset.filter;
            console.log(filter);

            for(item of storeItems) {
                if(filter === 'all'){
                    item.style.display = 'block';
                } else {
                    if(item.classList.contains(filter)){
                        console.log(filter);
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                }
            }
        })
    }
}

filterAll();

function searchBar() {
    const search = document.getElementById('search-item');
    const storeItems = document.getElementsByClassName('store-item');

    search.addEventListener('keyup', (e) => {
        const searchFilter = e.target.value.toLowerCase();

       for(let item of storeItems) {
        if (item.textContent.includes(searchFilter)){
            item.style.display = 'block'
        } else {
            item.style.display = 'none'
        }
       }
    })
}

searchBar();